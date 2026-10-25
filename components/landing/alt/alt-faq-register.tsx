"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/ui/chevron-down-icon";
import { RegisterForm } from "@/components/landing/register-form";
import { cn } from "@/lib/utils/cn";

const faqs = [
  {
    q: "Workshop có mất phí không?",
    a:
      "Hoàn toàn miễn phí. Đăng ký để nhận link Zoom và tài liệu trong group Zalo.",
  },
  {
    q: "Chưa có sản phẩm rõ, tham gia được không?",
    a:
      "Có — phần đầu giúp chốt thông điệp; content vẫn áp dụng cho waitlist/webinar giới thiệu.",
  },
  {
    q: "Diễn ra trên nền tảng nào?",
    a: "Zoom live. Link và nhắc lịch gửi qua group Zalo sau đăng ký.",
  },
  {
    q: "Có recording không?",
    a:
      "Có trong group Zalo, thời gian giới hạn — nên tham gia live để hỏi đáp.",
  },
];

export default function AltFaqRegister() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="register-form"
      className="scroll-mt-24 border-t border-white/10 bg-[#0a0a0a] py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold">Câu hỏi thường gặp</h2>
            <p className="mt-2 text-[#9CA3AF]">
              FAQ bên trái — form đăng ký sticky bên phải (desktop).
            </p>
            <div className="mt-8 space-y-3">
              {faqs.map((item, i) => {
                const expanded = open === i;
                return (
                  <div
                    key={item.q}
                    className="overflow-hidden rounded-xl border border-white/10 bg-[#141414]"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-semibold"
                      aria-expanded={expanded}
                      onClick={() => setOpen(expanded ? null : i)}
                    >
                      {item.q}
                      <ChevronDownIcon expanded={expanded} />
                    </button>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden" aria-hidden={!expanded}>
                        <p className="border-t border-white/10 px-4 py-4 text-[15px] leading-relaxed text-[#C2C2C2]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="alt-sticky-form">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-red)]">
                Giữ chỗ
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Đăng ký{" "}
                <span className="text-gold-shimmer">miễn phí</span>
              </h3>
              <p className="mt-3 text-sm text-[#C2C2C2]">
                9h–11h · Thứ 7, 31/10 · Zoom
              </p>
              <RegisterForm className="mt-6" idPrefix="alt" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
