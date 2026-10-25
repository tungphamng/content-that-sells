import Link from "next/link";

const highlights = [
  "Film grain + vignette mesh",
  "Glass cards (inner highlight, glow hover)",
  "Hero ring pulse + gold/red halo",
  "Shimmer section dividers",
  "CTA glow tinh chỉnh (bớt pulse liên tục)",
];

export default function PremiumPreviewBanner() {
  return (
    <aside
      className="premium-preview-banner px-4 py-3 md:px-8"
      aria-label="Ghi chú phiên bản premium"
    >
      <div className="container mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-accent-gold)]">
            Review · Premium layer
          </p>
          <p className="mt-1 text-sm text-[#E0E0E0]">
            Trang{" "}
            <strong className="text-white">/temp</strong> — cùng nội dung, thêm
            polish thị giác. So sánh với{" "}
            <Link
              href="/"
              className="font-semibold text-[var(--color-accent-gold)] underline-offset-2 hover:underline"
            >
              trang chính (/)
            </Link>
            .
          </p>
        </div>
        <ul
          className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#9CA3AF] md:justify-end"
        >
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <span
                className="h-1 w-1 rounded-full bg-[var(--color-accent-red)]"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
