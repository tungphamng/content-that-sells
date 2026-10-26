import { ShineCard } from "@/components/ui/shine-card";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import {
  Section,
  SectionContainer,
  SectionIntro,
} from "@/components/ui/section";

const benefits = [
  {
    title: "Content có mục tiêu rõ",
    body:
      "Biết mỗi bài phục vụ bước nào trong hành trình: nhận diện → tin tưởng → đăng ký sự kiện — không đăng vì phải đăng.",
  },
  {
    title: "Hook & CTA chuẩn chuyển đổi",
    body:
      "Công thức mở bài, storytelling ngắn và lời kêu gọi hành động khiến người đọc muốn bấm link đăng ký ngay.",
  },
  {
    title: "Lịch đăng 7–14 ngày",
    body:
      "Template lịch content trước sự kiện: tần suất, format (video/carousel/live) và cách tái sử dụng 1 ý thành nhiều bài.",
  },
];

export default function BenefitsSection() {
  return (
    <Section id="loi-ich">
      <SectionContainer>
        <Reveal>
          <SectionIntro
            label="Bạn sẽ mang về nhà"
            title={
              <>
                Không chỉ ý tưởng — mà là{" "}
                <span className="text-gold-shimmer">hệ thống content</span>{" "}
                bán được
              </>
            }
            description="Workshop 2 giờ, tập trung thực chiến cho coach, creator và chủ business đang chuẩn bị webinar, workshop hoặc đợt mở bán."
            descriptionAlign="center"
            descriptionClassName="mx-auto max-w-[36rem] leading-snug"
          />
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <ShineCard
                className="card-surface h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
              >
                <h3 className="text-xl font-bold">{b.title}</h3>
                <p className="mt-3 text-body text-justify-vi">{b.body}</p>
              </ShineCard>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>
    </Section>
  );
}
