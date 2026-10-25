"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LeadSuccessModal } from "@/components/ui/lead-success-modal";
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
  const p = idPrefix ? `${idPrefix}-` : "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setShowSuccess(true);
    setName("");
    setEmail("");
    setPhone("");
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
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nguyễn Văn A"
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ban@email.com"
            />
          </div>
          <div>
            <label
              htmlFor={`${p}phone`}
              className="mb-2 block text-sm font-medium text-[var(--foreground)]"
            >
              Số Zalo (tuỳ chọn)
            </label>
            <input
              id={`${p}phone`}
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="09xx xxx xxx"
            />
          </div>
        </div>
        <Button
          type="submit"
          variant="red"
          size="lg"
          className="mt-6 w-full rounded-full glow-pulse-red transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(229,57,53,0.4)]"
        >
          Xác nhận đăng ký miễn phí
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
