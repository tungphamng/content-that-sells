import { RegisterCtaButton } from "@/components/ui/button";
import { CheckCircleIcon } from "@/components/ui/check-circle-icon";
import { Reveal } from "@/components/ui/reveal";
import {
  Section,
  SectionContainer,
  SectionIntro,
} from "@/components/ui/section";

const blocks = [
  {
    time: "45 phút",
    title: "Bản đồ chuỗi content",
    detail: "Warm-up → Proof → Push, một chủ đề xuyên suốt.",
  },
  {
    time: "45 phút",
    title: "Viết và sản xuất nhanh",
    detail: "Hook, CTA, script video ngắn và carousel.",
  },
  {
    time: "30 phút",
    title: "Q&A và triển khai",
    detail: "Review case thật và checklist 14 ngày.",
  },
];

const paymentPoints = [
  "Không chuyển khoản, không cần thẻ",
  "Không phát sinh phí để vào phòng Zoom",
  "Điền form là giữ chỗ — link gửi trong group Zalo",
];

export default function ScheduleSection() {
  return (
    <Section id="thoi-gian" variant="elevated">
      <SectionContainer width="wide">
        <Reveal>
          <SectionIntro
            label="Lịch và chi phí"
            title={
              <>
                Thời gian và{" "}
                <span className="text-gold-shimmer">cách thanh toán</span>
              </>
            }
            description="Một buổi online, đúng hai giờ. Tham gia live không mất phí."
            descriptionAlign="center"
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="card-surface flex h-full flex-col">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
                Thời gian diễn ra
              </p>
              <h3 className="mt-2 text-3xl font-extrabold tracking-tight">
                9h00 – 11h00
              </h3>
              <p className="mt-2 text-lg font-semibold">
                Thứ 7, 31/10/2026 · Zoom
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Giờ Việt Nam (GMT+7) · Online
              </p>

              <ol className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6">
                {blocks.map((block, index) => (
                  <li key={block.title} className="flex gap-3">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-bold text-black"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-subtle)]">
                        {block.time}
                      </p>
                      <p className="font-semibold">{block.title}</p>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        {block.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="card-surface flex h-full flex-col">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
                Cách thức thanh toán
              </p>
              <h3 className="mt-2 text-3xl font-extrabold tracking-tight">
                0đ
              </h3>
              <p className="mt-2 text-lg font-semibold">
                Miễn phí 100% để tham gia live
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Không có bước thanh toán trước giờ học.
              </p>

              <ul className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
                {paymentPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-body">
                    <CheckCircleIcon className="mt-0.5 text-white" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-[var(--color-text-subtle)]">
                Bản ghi buổi học, nếu có, không gửi miễn phí tự động. Ai muốn
                mua recording sẽ được báo sau buổi học — không bắt buộc để
                tham gia.
              </p>

              <div className="mt-auto pt-6">
                <RegisterCtaButton className="w-full sm:w-auto" />
              </div>
            </article>
          </Reveal>
        </div>
      </SectionContainer>
    </Section>
  );
}
