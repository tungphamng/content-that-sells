"use client";

import { useState } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils/cn";

const faqs = [
  {
    q: "Workshop có mất phí không?",
    a:
      "Hoàn toàn miễn phí. Bạn chỉ cần đăng ký để nhận link Zoom và tài liệu trong group Zalo.",
  },
  {
    q: "Tôi chưa có sản phẩm rõ, có tham gia được không?",
    a:
      "Có. Phần đầu workshop giúp bạn chốt thông điệp và đối tượng — chuỗi content vẫn áp dụng cho webinar giới thiệu hoặc waitlist.",
  },
  {
    q: "Workshop diễn ra trên nền tảng nào?",
    a:
      "Trực tiếp trên Zoom. Sau khi đăng ký, bạn sẽ được mời vào group Zalo của 10X Masterminds để nhận link và nhắc lịch.",
  },
  {
    q: "Có recording sau sự kiện không?",
    a:
      "Recording chỉ gửi trong group Zalo trong thời gian giới hạn cho người đã đăng ký — hãy tham gia live để hỏi đáp trực tiếp.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-poster-section-alt py-16 md:scroll-mt-28 md:py-24"
    >
      <div className="container mx-auto px-5 md:px-4">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Câu hỏi thường gặp
            </h2>
            <p className="text-lg text-white/70">
              Còn thắc mắc? Đăng ký trước — hỏi trực tiếp trong buổi live.
            </p>
          </div>
        </Reveal>

        <Stagger className="mx-auto max-w-3xl space-y-3">
          {faqs.map((item, i) => {
            const expanded = open === i;
            return (
              <StaggerItem key={item.q}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white transition-colors hover:bg-white/5"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : i)}
                  >
                    {item.q}
                    <span
                      className={cn(
                        "text-[var(--color-brand-gold)] transition-transform",
                        expanded && "rotate-45",
                      )}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {expanded && (
                    <p className="border-t border-white/10 px-5 py-4 text-white/70 leading-relaxed text-justify-vi">
                      {item.a}
                    </p>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
