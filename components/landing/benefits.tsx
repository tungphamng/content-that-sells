import { ShineCard } from "@/components/ui/shine-card";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

const benefits = [
  {
    title: "Content có mục tiêu rõ",
    body:
      "Biết mỗi bài phục vụ bước nào trong hành trình: nhận diện → tin tưởng → đăng ký sự kiện — không đăng vì phải đăng.",
    icon: "🎯",
  },
  {
    title: "Hook & CTA chuẩn chuyển đổi",
    body:
      "Công thức mở bài, storytelling ngắn và lời kêu gọi hành động khiến người đọc muốn bấm link đăng ký ngay.",
    icon: "🔥",
  },
  {
    title: "Lịch đăng 7–14 ngày",
    body:
      "Template lịch content trước sự kiện: tần suất, format (video/carousel/live) và cách tái sử dụng 1 ý thành nhiều bài.",
    icon: "📅",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="loi-ich"
      className="scroll-mt-24 bg-poster-section py-16 md:scroll-mt-28 md:py-24"
    >
      <div className="container mx-auto px-5 md:px-4">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center md:mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-pizza-red)]">
              Bạn sẽ mang về nhà
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Không chỉ ý tưởng — mà là{" "}
              <span className="text-gold-shimmer">
                hệ thống content
              </span>{" "}
              bán được
            </h2>
            <p className="text-lg leading-relaxed text-white/75 text-justify-vi">
              Workshop 2 giờ, tập trung thực chiến cho coach, creator và chủ
              business đang chuẩn bị webinar, workshop hoặc đợt mở bán.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <ShineCard
                className="h-full border border-white/10 bg-[var(--color-surface-elevated)] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-pizza-red)]/45 hover:shadow-[0_0_40px_rgba(227,24,55,0.15)]"
              >
                <span className="text-2xl" aria-hidden>{b.icon}</span>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {b.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/70 text-justify-vi">
                  {b.body}
                </p>
              </ShineCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
