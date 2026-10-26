import Link from "next/link";

export default function AltPreviewBanner() {
  return (
    <aside
      className="border-b border-[var(--color-accent-gold)]/30 bg-[#141414] px-4 py-3 md:px-8"
      aria-label="Ghi chú layout thử nghiệm"
    >
      <div className="container mx-auto flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[#E0E0E0]">
          <strong className="text-[var(--foreground)]">Layout B</strong>{" "}
          — hero full-bleed · bento outcomes · timeline agenda · FAQ + form
          sticky. So với{" "}
          <Link href="/" className="underline text-white hover:text-[var(--foreground)]">
            trang chính (/)
          </Link>
          .
        </p>
        <p className="text-xs text-[#9CA3AF]">
          Cùng nội dung — khác cấu trúc thông tin &amp; nhịp scroll.
        </p>
      </div>
    </aside>
  );
}
