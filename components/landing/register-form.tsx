"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LeadSuccessModal } from "@/components/ui/lead-success-modal";
import {
  EVENT_ZALO_GROUP_URL,
  SBO_EVENT_REGISTER_API_URL,
} from "@/lib/constants";
import {
  buildSboCustomData,
  SBO_MONTHLY_REVENUE_OPTIONS,
  SBO_TEAM_SIZE_OPTIONS,
} from "@/lib/sbo-event-form-fields";
import { submitSboEventRegistration } from "@/lib/sbo-event-register";
import { cn } from "@/lib/utils/cn";

const TOTAL_STEPS = 2;

function RadioFieldGroup({
  legend,
  name,
  options,
  value,
  onChange,
  disabled,
  idPrefix,
}: {
  legend: string;
  name: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  idPrefix: string;
}) {
  return (
    <fieldset className="border-0 p-0">
      <legend className="mb-2 block text-sm font-medium text-[var(--foreground)]">
        {legend} *
      </legend>
      <div className="flex flex-col gap-2 rounded-xl border border-[var(--color-border)] bg-[rgba(0,0,0,0.25)] p-3">
        {options.map((option, index) => {
          const id = `${idPrefix}${name}-opt-${index}`;
          return (
            <label
              key={option}
              htmlFor={id}
              className="flex cursor-pointer items-start gap-2 text-sm leading-snug text-[var(--foreground)]"
            >
              <input
                id={id}
                type="radio"
                name={name}
                value={option}
                checked={value === option}
                onChange={() => onChange(option)}
                disabled={disabled}
              />
              <span>{option}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

function StepIndicator({ step }: { step: number }) {
  return (
    <div
      className="mb-5 flex items-center justify-between gap-4"
      aria-label={`Bước ${step} trên ${TOTAL_STEPS}`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
        Bước {step}/{TOTAL_STEPS}
      </p>
      <div className="flex gap-2" aria-hidden>
        {Array.from({ length: TOTAL_STEPS }, (_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-8 rounded-full transition-colors duration-300",
              i + 1 <= step ? "bg-white" : "bg-white/20",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function RegisterForm({
  className,
  idPrefix = "",
}: {
  className?: string;
  idPrefix?: string;
}) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessIndustry, setBusinessIndustry] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [problemToSolve, setProblemToSolve] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [zaloJoinUrl, setZaloJoinUrl] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const p = idPrefix ? `${idPrefix}-` : "";

  function resetForm() {
    setStep(1);
    setName("");
    setEmail("");
    setPhone("");
    setBusinessIndustry("");
    setTeamSize("");
    setMonthlyRevenue("");
    setProblemToSolve("");
  }

  function validateStep1() {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    if (!trimmedName || !trimmedEmail || !trimmedPhone) {
      setError("Vui lòng điền họ tên, số điện thoại và email.");
      return false;
    }
    return true;
  }

  function validateStep2() {
    const trimmedIndustry = businessIndustry.trim();
    const trimmedProblem = problemToSolve.trim();
    if (!trimmedIndustry || !teamSize || !monthlyRevenue || !trimmedProblem) {
      setError("Vui lòng điền đầy đủ các trường bắt buộc.");
      return false;
    }
    return true;
  }

  function goToStep2() {
    if (!validateStep1()) return;
    setError(null);
    setStep(2);
  }

  function goToStep1() {
    setError(null);
    setStep(1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (step === 1) {
      goToStep2();
      return;
    }

    if (!validateStep1() || !validateStep2()) return;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedIndustry = businessIndustry.trim();
    const trimmedProblem = problemToSolve.trim();

    setError(null);
    setSubmitting(true);
    try {
      const { ok, data } = await submitSboEventRegistration(
        SBO_EVENT_REGISTER_API_URL,
        {
          name: trimmedName,
          phone: trimmedPhone,
          email: trimmedEmail,
          customData: buildSboCustomData({
            businessIndustry: trimmedIndustry,
            teamSize,
            monthlyRevenue,
            problemToSolve: trimmedProblem,
          }),
        },
      );
      if (!ok || !data.success) {
        throw new Error(data.error || "Không gửi được đăng ký.");
      }
      const joinUrl = data.redirectTo?.trim() || EVENT_ZALO_GROUP_URL.trim();
      setZaloJoinUrl(joinUrl || null);
      setShowSuccess(true);
      resetForm();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Không gửi được đăng ký.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "kit-form-wrapper kit-form-wrapper--dark rounded-2xl border border-[var(--color-border)] bg-[rgba(18,18,18,0.85)] p-6 backdrop-blur-md md:p-8",
          className,
        )}
      >
        <StepIndicator step={step} />

        {step === 1 ? (
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[var(--color-text-muted)]">
              Thông tin liên hệ để gửi link Zoom và quà tặng.
            </p>
            <div>
              <label
                htmlFor={`${p}name`}
                className="mb-2 block text-sm font-medium text-[var(--foreground)]"
              >
                Họ và tên *
              </label>
              <input
                id={`${p}name`}
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nguyễn Văn A"
                disabled={submitting}
              />
            </div>
            <div>
              <label
                htmlFor={`${p}phone`}
                className="mb-2 block text-sm font-medium text-[var(--foreground)]"
              >
                Số điện thoại *
              </label>
              <input
                id={`${p}phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="09xx xxx xxx"
                disabled={submitting}
              />
            </div>
            <div>
              <label
                htmlFor={`${p}email`}
                className="mb-2 block text-sm font-medium text-[var(--foreground)]"
              >
                Email *
              </label>
              <input
                id={`${p}email`}
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ban@email.com"
                disabled={submitting}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <p className="text-sm text-[var(--color-text-muted)]">
              Vài câu hỏi ngắn để workshop sát nhu cầu của bạn.
            </p>
            <div>
              <label
                htmlFor={`${p}business-industry`}
                className="mb-2 block text-sm font-medium text-[var(--foreground)]"
              >
                Ngành kinh doanh của bạn là gì? *
              </label>
              <input
                id={`${p}business-industry`}
                name="businessIndustry"
                type="text"
                required
                value={businessIndustry}
                onChange={(e) => setBusinessIndustry(e.target.value)}
                disabled={submitting}
              />
            </div>
            <RadioFieldGroup
              idPrefix={p}
              legend="Doanh nghiệp của bạn hiện tại có bao nhiêu người?"
              name={`${p}team-size`}
              options={SBO_TEAM_SIZE_OPTIONS}
              value={teamSize}
              onChange={setTeamSize}
              disabled={submitting}
            />
            <RadioFieldGroup
              idPrefix={p}
              legend="Doanh thu trung bình/tháng của bạn là bao nhiêu?"
              name={`${p}monthly-revenue`}
              options={SBO_MONTHLY_REVENUE_OPTIONS}
              value={monthlyRevenue}
              onChange={setMonthlyRevenue}
              disabled={submitting}
            />
            <div>
              <label
                htmlFor={`${p}problem`}
                className="mb-2 block text-sm font-medium text-[var(--foreground)]"
              >
                Vấn đề bạn muốn giải quyết là gì? *
              </label>
              <input
                id={`${p}problem`}
                name="problemToSolve"
                type="text"
                required
                value={problemToSolve}
                onChange={(e) => setProblemToSolve(e.target.value)}
                disabled={submitting}
              />
            </div>
          </div>
        )}

        {error ? (
          <p
            className="mt-4 rounded-xl border border-[#fecaca] bg-[#fef2f2] px-3 py-2 text-sm text-[#991b1b]"
            role="alert"
          >
            {error}
          </p>
        ) : null}

        <div className="mt-6 flex flex-col gap-3">
          {step === 2 ? (
            <Button
              type="button"
              variant="secondary"
              size="lg"
              disabled={submitting}
              className="w-full rounded-full whitespace-nowrap"
              onClick={goToStep1}
            >
              Quay lại
            </Button>
          ) : null}
          <Button
            type="submit"
            variant="red"
            size="lg"
            disabled={submitting}
            className="w-full rounded-full whitespace-nowrap glow-pulse-red transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(255,255,255,0.25)] disabled:opacity-65"
          >
            {submitting
              ? "Đang gửi…"
              : step === 1
                ? "Tiếp tục"
                : "Đăng ký tham gia"}
          </Button>
        </div>

        <p className="mt-4 text-center text-xs leading-relaxed text-[#9CA3AF]">
          Bằng việc gửi form này, bạn đồng ý nhận thông tin từ chúng tôi về
          chương trình đăng ký và các thông tin cập nhật khác. Bạn có thể hủy
          đăng ký bất cứ lúc nào.
        </p>
      </form>
      <LeadSuccessModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        zaloJoinUrl={zaloJoinUrl}
      />
    </>
  );
}
