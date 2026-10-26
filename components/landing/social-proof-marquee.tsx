export default function SocialProofMarqueeSection() {
  const items = [
    "CONTENT-FUNNEL",
    "10X MASTERMINDS",
    "MAKE IT LAUNCH",
    "CHUỖI CONTENT CHUYỂN ĐỔI CAO",
    "WEBINAR · WORKSHOP · LAUNCH",
    "MIỄN PHÍ 100%",
  ];

  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y-2 border-white bg-white py-4"
      aria-hidden
    >
      <div className="flex w-max marquee-scroll gap-12 whitespace-nowrap px-4">
        {doubled.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className="text-sm font-extrabold uppercase tracking-[0.22em] text-black"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
