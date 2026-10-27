import { ShineCard } from "@/components/ui/shine-card";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import {
  Section,
  SectionContainer,
  SectionIntro,
} from "@/components/ui/section";

const outcomes = [
  {
    title: "Framework CONTENT-FUNNEL",
    body: "Bản đồ 3 giai đoạn Warm-up → Proof → Push. Một chủ đề xuyên suốt, thay vì mười bài rời không dẫn tới đăng ký.",
  },
  {
    title: "Hook và CTA chuyển đổi",
    body: "Công thức mở bài, storytelling ngắn và lời kêu gọi khiến người đọc muốn bấm link sự kiện.",
  },
  {
    title: "Lịch đăng 7–14 ngày",
    body: "Tần suất, format video / carousel / live, và cách biến một ý thành nhiều bài trước ngày mở bán.",
  },
  {
    title: "Năm dạng bài bắt buộc",
    body: "Những bài cần có trước webinar, kèm script video ngắn và khung carousel 7 slide.",
  },
  {
    title: "Template và checklist",
    body: "Chuỗi bài mẫu cùng checklist 14 ngày để triển khai ngay, không về nhà với mỗi ý tưởng.",
  },
  {
    title: "Q&A và group Zalo",
    body: "Review case thật trong buổi học. Sau khi đăng ký, vào group để nhận link Zoom, tài liệu và nhắc lịch.",
  },
];

export default function OutcomesSection() {
  return (
    <Section id="loi-ich">
      <SectionContainer width="wide">
        <Reveal>
          <SectionIntro
            label="Khi tham gia"
            title={
              <>
                Bạn nhận được{" "}
                <span className="text-gold-shimmer">những gì?</span>
              </>
            }
            description="Hai giờ tập trung vào hệ thống content bán được — dùng cho webinar, workshop và đợt mở bán."
            descriptionAlign="center"
          />
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <StaggerItem key={item.title}>
              <ShineCard className="card-surface h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                <p className="text-xs font-bold tracking-[0.18em] text-[var(--color-text-subtle)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-body text-justify-vi">{item.body}</p>
              </ShineCard>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>
    </Section>
  );
}
