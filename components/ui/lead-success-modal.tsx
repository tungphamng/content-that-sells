"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";

export function LeadSuccessModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        aria-label="Đóng"
        onClick={onClose}
      />
      <div className="relative max-w-md w-full rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
        <h3
          id="success-title"
          className="text-2xl font-bold text-white"
        >
          Đã nhận đăng ký! 🎉
        </h3>
        <p className="mt-3 text-white/75 leading-relaxed">
          Kiểm tra email và tham gia group Zalo để nhận link Zoom. Hẹn bạn
          <strong className="text-white"> 9h00 Thứ 7, 31/10</strong> — đừng quên thêm lịch nhé.
        </p>
        <Button
          variant="red"
          size="md"
          className="mt-6 w-full rounded-full"
          onClick={onClose}
        >
          Tuyệt — đã hiểu
        </Button>
      </div>
    </div>,
    document.body,
  );
}
