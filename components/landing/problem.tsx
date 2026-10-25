import { Reveal } from "@/components/ui/reveal";
import { Section, SectionContainer } from "@/components/ui/section";

const pains = [
  "Đăng nhiều nhưng inbox không có ai hỏi mua hoặc đăng ký sự kiện",
  "Mỗi bài một kiểu — khách không hiểu bạn bán gì và tại sao phải tham gia ngay",
  "Sắp đến ngày launch mà vẫn chưa có chuỗi content dẫn dắt",
];

export default function ProblemSection() {
  return (
    <Section variant="elevated">
      <SectionContainer width="wide">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <p className="section-label">Có quen không?</p>
            <h2 className="section-title mt-2 text-left">
              Content nhiều —{" "}
              <span className="text-[var(--color-accent-red)]">
                chuyển đổi ít
              </span>
            </h2>
            <p className="mt-4 text-body text-justify-vi">
              Phần lớn sự kiện trống khách không phải vì sản phẩm kém, mà vì
              chuỗi content trước sự kiện không kéo đúng người, đúng cảm xúc,
              đúng thời điểm. Workshop này giải đúng nút thắt đó.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="flex flex-col gap-4">
              {pains.map((pain) => (
                <li
                  key={pain}
                  className="card-surface border border-[rgba(255,255,255,0.08)] text-[17px] leading-relaxed text-[#E0E0E0] md:text-[18px]"
                >
                  <span
                    className="mr-2 font-bold text-[var(--color-accent-red)]"
                    aria-hidden
                  >
                    ×
                  </span>
                  {pain}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionContainer>
    </Section>
  );
}
