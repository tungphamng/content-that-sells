export default function SocialProofMarqueeSection() {
  const items = [
    "PRODUCT · CONTENT · FUNNEL",
    "10X MASTERMINDS",
    "MAKE IT LAUNCH",
    "CHUỖI CONTENT CHUYỂN ĐỔI CAO",
    "WEBINAR · WORKSHOP · LAUNCH",
    "MIỄN PHÍ 100%",
  ];

  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y border-[var(--color-accent-red)]/25 bg-[var(--color-accent-red)] py-4"
      aria-hidden
    >
      <div className="flex w-max marquee-scroll gap-12 whitespace-nowrap px-4">
        {doubled.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className="text-sm font-bold uppercase tracking-[0.2em] text-white"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
