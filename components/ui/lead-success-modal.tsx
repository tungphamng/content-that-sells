"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";

export function LeadSuccessModal({
  open,
  onClose,
  zaloJoinUrl,
}: {
  open: boolean;
  onClose: () => void;
  zaloJoinUrl?: string | null;
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

  const trimmedJoinUrl = zaloJoinUrl?.trim();

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[rgba(13,13,13,0.75)] backdrop-blur-sm"
        aria-label="Đóng"
        onClick={onClose}
      />
      <div className="relative max-w-md w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 shadow-[0_24px_64px_rgba(0,0,0,0.55)]">
        <h3 id="success-title" className="text-2xl font-bold">
          Đã nhận đăng ký! 🎉
        </h3>
        <p className="mt-4 text-body">
          Bước tiếp theo: nhấn vào link bên dưới để tham gia{" "}
          <strong className="text-white">group Zalo của sự kiện</strong> — bạn
          sẽ nhận link Zoom, tài liệu và nhắc lịch trước{" "}
          <strong className="text-white">9h00 Thứ 7, 31/10</strong>.
        </p>
        {trimmedJoinUrl ? (
          <a
            href={trimmedJoinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-black shadow-[0_8px_28px_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-[#f0f0f0] hover:scale-[1.02]"
          >
            Tham gia group Zalo
          </a>
        ) : (
          <p className="mt-4 text-sm text-[var(--color-text-muted)]">
            Nếu chưa thấy link, vui lòng kiểm tra email hoặc liên hệ team hỗ
            trợ.
          </p>
        )}
        <Button
          variant="outline-light"
          size="md"
          className="mt-3 w-full rounded-full"
          onClick={onClose}
        >
          Đóng
        </Button>
      </div>
    </div>,
    document.body,
  );
}
