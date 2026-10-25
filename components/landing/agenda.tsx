import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

const modules = [
  {
    time: "Phần 1 · 45 phút",
    title: "Bản đồ chuỗi content trước sự kiện",
    points: [
      "3 giai đoạn: Warm-up → Proof → Push",
      "Chọn 1 chủ đề xuyên suốt thay vì 10 chủ đề rời rạc",
      "Metric theo dõi: save, DM, click link đăng ký",
    ],
  },
  {
    time: "Phần 2 · 45 phút",
    title: "Viết & sản xuất nhanh",
    points: [
      "5 dạng bài bắt buộc trước ngày mở bán",
      "Script video ngắn + carousel 7 slide",
      "Tối ưu CTA không gây khó chịu",
    ],
  },
  {
    time: "Phần 3 · 30 phút",
    title: "Q&A + triển khai tuần tới",
    points: [
      "Review 1–2 case thật từ cộng đồng",
      "Checklist 14 ngày trước webinar",
      "Cách vào group Zalo nhận tài liệu",
    ],
  },
];

export default function AgendaSection() {
  return (
    <section
      id="lo-trinh"
      className="scroll-mt-24 bg-poster-section py-16 md:scroll-mt-28 md:py-24"
    >
      <div className="container mx-auto px-5 md:px-4">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center md:mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-brand-gold)]">
              Nội dung workshop
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              2 giờ — đi thẳng vào{" "}
              <span className="text-[var(--color-pizza-red)]">
                PRODUCT · CONTENT · FUNNEL
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-white/75">
              Giống thông điệp trên hộp pizza trong poster: bạn sẽ nối sản phẩm,
              nội dung và quy trình chuyển đổi thành một mạch thống nhất.
            </p>
          </div>
        </Reveal>

        <Stagger className="mx-auto max-w-5xl space-y-6">
          {modules.map((mod, index) => (
            <StaggerItem key={mod.title}>
              <article
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[var(--color-surface-elevated)] p-6 md:flex-row md:items-start md:gap-8"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-pizza-red)] text-lg font-bold text-white shadow-[0_8px_24px_rgba(227,24,55,0.3)]"
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                    {mod.time}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {mod.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-white/70">
                    {mod.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span
                          className="text-[var(--color-brand-gold)]"
                          aria-hidden
                        >
                          ▸
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
