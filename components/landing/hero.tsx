"use client";

import Image from "next/image";
import { Button, RegisterCtaButton } from "@/components/ui/button";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionContainer } from "@/components/ui/section";
import { WORKSHOP_POSTER_SRC } from "@/lib/constants";
import { scrollToHash } from "@/lib/scroll-to-section";

const trustItems = [
  "100% miễn phí tham gia workshop",
  "Framework content đã dùng cho launch thật",
  "Tặng template chuỗi bài + checklist triển khai",
];

export default function HeroSection() {
  return (
    <Section
      variant="mesh"
      className="relative overflow-hidden !py-12 md:!py-16 lg:!py-20"
    >
      <AmbientOrbs variant="hero" />
      <SectionContainer className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-6">
        <Reveal>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 md:gap-1.5">
              <p className="section-label text-[var(--color-text-muted)]">
                Free Workshop Online
              </p>
              <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-5xl lg:text-nowrap lg:text-[calc(clamp(2.25rem,3.6vw,3.75rem)+1px)]">
                Content That{" "}
                <span className="text-gold-shimmer">Sells</span>
              </h1>
            </div>
            <p className="max-w-xl text-pretty text-body text-[var(--color-text-muted)] lg:text-justify-vi">
              Chủ đề: Cách tạo dựng{" "}
              <strong className="text-[var(--foreground)]">
                chuỗi bài content
              </strong>{" "}
              &ldquo;chuyển đổi cao&rdquo;, thu hút đúng khách hàng đến sự kiện
              bán hàng, webinar, workshop của bạn — không cần đu trend vô nghĩa
              hay đăng bài ngẫu hứng mỗi ngày.
            </p>

            <ul className="flex flex-col gap-3">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-[var(--color-text-muted)] md:text-base"
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-bold text-[var(--foreground)]"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <RegisterCtaButton size="lg" className="w-full sm:w-auto" />
              <Button
                variant="outline-light"
                size="lg"
                className="w-full rounded-full sm:w-auto"
                onClick={() => scrollToHash("#lo-trinh")}
              >
                Xem nội dung chương trình
              </Button>
            </div>

            <p className="text-sm font-semibold text-[var(--foreground)]">
              Chỉ còn vài suất — ưu tiên người đăng ký sớm
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="hero-visual-anchor lg:pt-1">
            <figure className="m-0">
              <div className="relative">
                <div className="hero-peephole-glow" aria-hidden />
                <div
                  className="peephole-ring hero-peephole-frame mx-auto lg:mx-0 lg:ml-auto"
                >
                  <Image
                    src={WORKSHOP_POSTER_SRC}
                    alt="Mrs. Thao Tran — cố vấn hệ thống nội dung chuyển đổi"
                    fill
                    className="object-cover object-[50%_4%]"
                    sizes="(max-width: 1024px) 84vw, 352px"
                    priority
                  />
                  <figcaption className="hero-peephole-caption">
                    <p className="hero-peephole-caption__name">
                      Mrs. Thao Tran
                    </p>
                    <p className="hero-peephole-caption__role">
                      Cố vấn Hệ thống Nội dung Chuyển đổi
                    </p>
                  </figcaption>
                </div>
              </div>
            </figure>
            <div
              className="hero-event-badge relative z-10 mt-4 w-full rounded-2xl px-4 py-3 sm:px-5 sm:py-4"
            >
              <HeroEventInfoBar />
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </Section>
  );
}

function HeroEventInfoBar() {
  return (
    <div className="hero-event-info text-sm">
      <div className="hero-event-info__time flex items-start gap-2.5">
        <span
          className="mt-0.5 shrink-0 text-base text-[var(--foreground)]"
          aria-hidden
        >
          ↘
        </span>
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
            Thời gian
          </p>
          <p
            className="mt-1 text-[13px] font-semibold leading-tight text-[var(--foreground)] md:text-sm lg:whitespace-nowrap"
          >
            9h00 – 11h00{" "}
            <span className="font-normal text-[var(--color-text-muted)]">|</span>{" "}
            Thứ 7, ngày 31/10
          </p>
        </div>
      </div>

      <div className="hero-event-info__location flex items-start gap-2.5">
        <span
          className="mt-0.5 shrink-0 text-base text-[var(--foreground)]"
          aria-hidden
        >
          ◎
        </span>
        <div className="shrink-0">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
            Địa điểm
          </p>
          <p className="mt-1 text-sm font-semibold leading-snug text-[var(--foreground)] lg:whitespace-nowrap">
            Zoom (online)
          </p>
        </div>
      </div>
    </div>
  );
}
