"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LeadSuccessModal } from "@/components/ui/lead-success-modal";
import { SBO_EVENT_REGISTER_API_URL } from "@/lib/constants";
import { submitSboEventRegistration } from "@/lib/sbo-event-register";
import { cn } from "@/lib/utils/cn";

export function RegisterForm({
  className,
  idPrefix = "",
}: {
  className?: string;
  idPrefix?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const p = idPrefix ? `${idPrefix}-` : "";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    if (!trimmedName || !trimmedEmail || !trimmedPhone) return;

    setError(null);
    setSubmitting(true);
    try {
      const { ok, data } = await submitSboEventRegistration(
        SBO_EVENT_REGISTER_API_URL,
        {
          name: trimmedName,
          phone: trimmedPhone,
          email: trimmedEmail,
          customData: {},
        },
      );
      if (!ok || !data.success) {
        throw new Error(data.error || "Không gửi được đăng ký.");
      }
      if (data.redirectTo) {
        window.location.href = data.redirectTo;
        return;
      }
      setShowSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
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
        noValidate
      >
        <div className="flex flex-col gap-4">
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
        </div>
        {error ? (
          <p
            className="mt-4 rounded-xl border border-[#fecaca] bg-[#fef2f2] px-3 py-2 text-sm text-[#991b1b]"
            role="alert"
          >
            {error}
          </p>
        ) : null}
        <Button
          type="submit"
          variant="red"
          size="lg"
          disabled={submitting}
          className="mt-6 w-full rounded-full glow-pulse-red transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(229,57,53,0.4)] disabled:opacity-65"
        >
          {submitting ? "Đang gửi…" : "Xác nhận đăng ký miễn phí"}
        </Button>
        <p className="mt-4 text-center text-xs text-[#9CA3AF]">
          Bạn có thể huỷ nhận tin bất cứ lúc nào. Không spam.
        </p>
      </form>
      <LeadSuccessModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
}
