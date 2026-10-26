import { CheckCircleIcon } from "@/components/ui/check-circle-icon";

const steps = [
  {
    time: "45 phút",
    title: "Bản đồ chuỗi content",
    points: ["Warm-up → Proof → Push", "1 chủ đề xuyên suốt", "Metric: save, DM, click"],
  },
  {
    time: "45 phút",
    title: "Viết & sản xuất nhanh",
    points: ["5 dạng bài bắt buộc", "Video + carousel 7 slide", "CTA tối ưu"],
  },
  {
    time: "30 phút",
    title: "Q&A + triển khai",
    points: ["Case thật", "Checklist 14 ngày", "Nhận tài liệu Zalo"],
  },
];

export default function AltAgendaTimeline() {
  return (
    <section id="agenda" className="scroll-mt-24 bg-[#121212] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold md:text-4xl">
          Lộ trình <span className="text-gold-shimmer">2 giờ</span>
        </h2>
        <p className="mt-3 text-[#C2C2C2]">
          Timeline ngang — thấy rõ nhịp workshop một màn hình (desktop).
        </p>

        <div className="relative mt-14 hidden md:block">
          <div className="alt-timeline-rail" aria-hidden />
          <div className="grid grid-cols-3 gap-8 pt-10">
            {steps.map((step, i) => (
              <article key={step.title} className="text-center">
                <div
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent-red)] text-lg font-bold text-white shadow-[0_0_24px_rgba(229,57,53,0.4)]"
                >
                  {i + 1}
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#9CA3AF]">
                  {step.time}
                </p>
                <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                <ul className="mt-4 space-y-2 text-left text-sm text-[#C2C2C2]">
                  {step.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--foreground)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-4 md:hidden">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-5"
            >
              <span className="text-sm font-bold text-[var(--foreground)]">
                Phần {i + 1} · {step.time}
              </span>
              <h3 className="mt-1 text-lg font-bold">{step.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-[#C2C2C2]">
                {step.points.map((p) => (
                  <li key={p}>· {p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
