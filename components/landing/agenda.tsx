import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import {
  Section,
  SectionContainer,
  SectionIntro,
} from "@/components/ui/section";
import { CheckCircleIcon } from "@/components/ui/check-circle-icon";

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
    <Section id="lo-trinh">
      <SectionContainer width="wide">
        <Reveal>
          <SectionIntro
            label="Nội dung workshop"
            labelTone="gold"
            title={
              <>
                2 giờ — đi thẳng vào{" "}
                <span className="text-[var(--foreground)]">
                  CONTENT-FUNNEL
                </span>
              </>
            }
            description="Nối sản phẩm, nội dung và quy trình chuyển đổi thành một mạch thống nhất — giống thông điệp trên poster workshop."
          />
        </Reveal>

        <Stagger className="flex flex-col gap-6">
          {modules.map((mod, index) => (
            <StaggerItem key={mod.title}>
              <article className="card-surface agenda-card flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white text-lg font-bold text-black shadow-[0_8px_24px_rgba(255,255,255,0.12)]"
                  aria-hidden
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-subtle)]">
                    {mod.time}
                  </p>
                  <h3 className="mt-1 text-xl font-bold">{mod.title}</h3>
                  <ul className="mt-4 flex flex-col gap-2 text-body">
                    {mod.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <CheckCircleIcon
                          className="mt-0.5 text-[var(--foreground)]"
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>
    </Section>
  );
}
