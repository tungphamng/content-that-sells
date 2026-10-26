const pains = [
  "Đăng nhiều — inbox không có ai đăng ký sự kiện",
  "Khách không hiểu bạn bán gì & vì sao phải tham gia ngay",
  "Sắp launch mà chưa có chuỗi content dẫn dắt",
];

export default function AltPainStrip() {
  return (
    <section className="border-y border-white/10 bg-[#0d0d0d] py-10">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-[var(--foreground)]">
          Có quen không?
        </p>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:gap-6">
          {pains.map((pain, i) => (
            <div
              key={pain}
              className="flex flex-1 items-start gap-3 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#141414] p-5"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-red)]/15 text-sm font-bold text-[var(--foreground)]"
              >
                {i + 1}
              </span>
              <p className="text-[17px] leading-snug text-[#E0E0E0] md:text-[18px]">
                {pain}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
