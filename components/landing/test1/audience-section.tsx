import { Reveal } from "@/components/ui/reveal";
import {
  Section,
  SectionContainer,
  SectionIntro,
} from "@/components/ui/section";
import { cn } from "@/lib/utils/cn";

const forYou = [
  "Coach, creator và chủ business đang chuẩn bị webinar, workshop hoặc đợt mở bán",
  "Đăng đều nhưng inbox ít người hỏi mua hoặc đăng ký sự kiện",
  "Muốn một chuỗi content có đích: nhận diện, tin tưởng, rồi đăng ký",
  "Sắp xếp được 2 giờ live để mang framework về dùng ngay tuần sau",
];

const notForYou = [
  "Chỉ tìm mẹo viral hoặc cách đu trend mỗi ngày",
  "Chưa có ý định bán hàng hay tổ chức sự kiện",
  "Cần một khóa dài hạn, không phải workshop thực chiến 2 giờ",
  "Không tham gia đúng giờ live và chỉ muốn nhận recording miễn phí",
];

function FitList({
  items,
  tone,
}: {
  items: string[];
  tone: "yes" | "no";
}) {
  const yes = tone === "yes";

  return (
    <ul className="mt-5 flex flex-col gap-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-muted)] md:text-base"
        >
          <span
            className={cn(
              "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold",
              yes
                ? "bg-white text-black"
                : "border border-white/25 text-[var(--color-text-subtle)]",
            )}
            aria-hidden
          >
            {yes ? "✓" : "×"}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AudienceSection() {
  return (
    <Section id="danh-cho-ai" variant="elevated">
      <SectionContainer width="wide">
        <Reveal>
          <SectionIntro
            label="Đối tượng"
            title={
              <>
                Dành cho ai,{" "}
                <span className="text-gold-shimmer">không dành cho ai</span>
              </>
            }
            description="Workshop 2 giờ cho người đang chuẩn bị sự kiện bán hàng. Không cố hợp với mọi người."
            descriptionAlign="center"
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="card-surface h-full border-white/20">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                Dành cho bạn nếu
              </p>
              <h3 className="mt-2 text-2xl font-bold">Bạn đang cần khách đến sự kiện</h3>
              <FitList items={forYou} tone="yes" />
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="card-surface h-full">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
                Chưa phù hợp nếu
              </p>
              <h3 className="mt-2 text-2xl font-bold">Bạn tìm một thứ khác</h3>
              <FitList items={notForYou} tone="no" />
            </article>
          </Reveal>
        </div>
      </SectionContainer>
    </Section>
  );
}
