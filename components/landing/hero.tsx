"use client";

import Image from "next/image";
import { Button, RegisterCtaButton } from "@/components/ui/button";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { Reveal } from "@/components/ui/reveal";
import { MakeItLaunchTitle } from "@/components/ui/make-it-launch-title";
import { WORKSHOP_HERO_SRC } from "@/lib/constants";
import { scrollToHash } from "@/lib/scroll-to-section";

const trustItems = [
  "100% miễn phí — không bán khóa trong workshop",
  "Framework content đã dùng cho launch thật",
  "Tặng template chuỗi bài + checklist triển khai",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-mesh-animated text-white">
      <AmbientOrbs variant="hero" />
      <div className="container relative mx-auto grid gap-12 px-5 py-16 md:px-4 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <Reveal>
          <div className="space-y-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              Free Workshop Online
            </p>
            <MakeItLaunchTitle size="hero" className="block" />
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Content That{" "}
              <span className="text-gold-shimmer">Sells</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/85 text-justify-vi max-w-xl">
              Chủ đề: Cách tạo dựng{" "}
              <strong className="text-white">chuỗi bài content</strong>{" "}
              &ldquo;chuyển đổi cao&rdquo;, thu hút đúng khách hàng đến sự kiện
              bán hàng, webinar, workshop của bạn — không cần đu trend vô
              nghĩa hay đăng bài ngẫu hứng mỗi ngày.
            </p>

            <ul className="space-y-3">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm md:text-base text-white/90"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-pizza-red)]/25 text-xs text-[var(--color-pizza-red)]"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <RegisterCtaButton size="lg" className="w-full sm:w-auto" />
              <Button
                variant="outline-light"
                size="lg"
                className="w-full rounded-full sm:w-auto"
                onClick={() => scrollToHash("#lo-trinh")}
              >
                Xem nội dung workshop
              </Button>
            </div>

            <p className="text-sm text-[var(--color-pizza-red)] font-medium">
              ⚡ Chỉ còn vài chục suất — ưu tiên người đăng ký sớm
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="peephole-ring relative mx-auto aspect-square w-full max-w-[340px] overflow-hidden md:max-w-[400px]">
              <Image
                src={WORKSHOP_HERO_SRC}
                alt="Workshop Content That Sells — MAKE IT LAUNCH"
                fill
                className="object-cover object-[center_20%] scale-105"
                sizes="(max-width: 768px) 90vw, 400px"
                priority
              />
            </div>
            <div
              className="absolute -bottom-4 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl border border-white/15 bg-black/60 px-4 py-3 backdrop-blur-md"
            >
              <HeroEventInfoBar />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HeroEventInfoBar() {
  return (
    <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 sm:gap-4">
      <div className="flex items-start gap-2 text-white/90">
        <span className="text-[var(--color-brand-gold)]" aria-hidden>
          ↘
        </span>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-white/50">
            Thời gian
          </p>
          <p className="font-medium">9h00 – 11h00</p>
          <p className="text-white/75">Thứ 7, ngày 31/10</p>
        </div>
      </div>
      <div className="flex items-start gap-2 text-white/90">
        <span className="text-[var(--color-brand-gold)]" aria-hidden>
          ◎
        </span>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-white/50">
            Địa điểm
          </p>
          <p className="font-medium">Zoom (online)</p>
          <p className="text-white/75">Link gửi trong group Zalo</p>
        </div>
      </div>
    </div>
  );
}
