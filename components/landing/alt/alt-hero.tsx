"use client";

import Image from "next/image";
import { RegisterCtaButton } from "@/components/ui/button";
import { MakeItLaunchTitle } from "@/components/ui/make-it-launch-title";
import { WORKSHOP_POSTER_SRC } from "@/lib/constants";
import { scrollToHash } from "@/lib/scroll-to-section";

const chips = [
  "9h – 11h · 31/10",
  "Zoom online",
  "Miễn phí 100%",
];

export default function AltHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      <div className="lg:grid lg:grid-cols-2 lg:min-h-[min(92vh,880px)]">
        <div className="relative z-10 flex flex-col justify-center px-4 py-14 md:px-8 lg:py-20 lg:pl-[max(1rem,calc((100vw-1280px)/2+2rem))]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--foreground)]">
            Free Workshop Online
          </p>
          <MakeItLaunchTitle size="hero" className="mt-4 block" />
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Content
            <br />
            That{" "}
            <span className="text-gold-shimmer">Sells</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#C2C2C2]">
            Chuỗi content chuyển đổi cao — kéo đúng khách đến webinar &
            workshop của bạn, không đăng bài ngẫu hứng.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-[#E0E0E0]"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <RegisterCtaButton size="lg" className="w-full sm:w-auto" />
            <button
              type="button"
              className="text-sm font-semibold text-[var(--foreground)] underline-offset-4 hover:underline"
              onClick={() => scrollToHash("#agenda")}
            >
              Xem 2 giờ học gì →
            </button>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0 lg:flex lg:items-stretch">
          <div className="alt-hero-visual relative min-h-[22rem] w-full lg:min-h-full">
            <Image
              src={WORKSHOP_POSTER_SRC}
              alt="MAKE IT LAUNCH — visual workshop"
              fill
              className="object-cover object-[center_25%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
