"use client";

import { CheckCircleIcon } from "@/components/ui/check-circle-icon";
import { Reveal } from "@/components/ui/reveal";

const cells = [
  {
    feature: true,
    title: "Hệ thống content bán được",
    body:
      "Workshop 2 giờ thực chiến: từ ý tưởng rời rạc → chuỗi bài có mục tiêu rõ trước ngày mở bán.",
    accent: "PRODUCT · CONTENT · FUNNEL",
  },
  {
    title: "Content có mục tiêu",
    body: "Nhận diện → tin tưởng → đăng ký sự kiện. Mỗi bài một vai trò.",
  },
  {
    title: "Hook & CTA chuẩn",
    body: "Storytelling ngắn + CTA không gây khó chịu.",
  },
  {
    title: "Lịch 7–14 ngày",
    body: "Template tần suất, format, tái sử dụng 1 ý nhiều bài.",
  },
];

export default function AltOutcomesBento() {
  return (
    <section id="outcomes" className="scroll-mt-24 bg-[#121212] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Bạn sẽ{" "}
            <span className="text-[var(--foreground)]">mang về</span>
          </h2>
          <p className="mt-3 max-w-2xl text-[#C2C2C2]">
            Bento layout — nhấn mạnh outcome chính, chi tiết phụ xếp quanh.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {cells.map((cell) => (
            <Reveal
              key={cell.title}
              className={
                cell.feature
                  ? "alt-bento-feature rounded-2xl border border-white/10 bg-gradient-to-br from-[#1f1416] to-[#121212] p-6 md:p-8 lg:col-span-2"
                  : "rounded-2xl border border-white/10 bg-[#1a1a1a] p-6"
              }
            >
              {cell.accent && (
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--foreground)]">
                  {cell.accent}
                </p>
              )}
              <h3 className="mt-2 text-xl font-bold">{cell.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#E0E0E0]">
                {cell.body}
              </p>
              {cell.feature && (
                <ul className="mt-6 space-y-2 text-sm text-[#C2C2C2]">
                  {[
                    "100% miễn phí trong workshop",
                    "Framework launch thật",
                    "Template + checklist tặng kèm",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <CheckCircleIcon className="text-[var(--foreground)]" />
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
