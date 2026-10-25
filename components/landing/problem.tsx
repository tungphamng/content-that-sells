import { Reveal } from "@/components/ui/reveal";

const pains = [
  "Đăng nhiều nhưng inbox không có ai hỏi mua hoặc đăng ký sự kiện",
  "Mỗi bài một kiểu — khách không hiểu bạn bán gì và tại sao phải tham gia ngay",
  "Sắp đến ngày launch mà vẫn chưa có chuỗi content dẫn dắt",
];

export default function ProblemSection() {
  return (
    <section className="bg-poster-section-alt py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-4">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/50">
              Có quen không?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Content nhiều —{" "}
              <span className="text-[var(--color-pizza-red)]">
                chuyển đổi ít
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75 text-justify-vi">
              Phần lớn sự kiện trống khách không phải vì sản phẩm kém, mà vì
              chuỗi content trước sự kiện không kéo đúng người, đúng cảm xúc,
              đúng thời điểm. Workshop này giải đúng nút thắt đó.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {pains.map((pain) => (
                <li
                  key={pain}
                  className="rounded-2xl border border-white/10 bg-black/40 p-5 text-white/80 transition-colors duration-300 hover:border-[var(--color-pizza-red)]/50 hover:text-white"
                >
                  <span
                    className="mr-2 text-[var(--color-brand-red)]"
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
      </div>
    </section>
  );
}
