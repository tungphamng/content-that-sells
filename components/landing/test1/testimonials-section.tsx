"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import {
  Section,
  SectionContainer,
  SectionIntro,
} from "@/components/ui/section";

const posts = [
  {
    src: "/feedback1.png",
    width: 1275,
    height: 364,
    name: "Trung Công Nghệ",
    result: "Đơn hàng 1.000$ đầu tiên",
  },
  {
    src: "/feedback2.png",
    width: 1254,
    height: 355,
    name: "Windy Nguyen",
    result: "1.000$ MRR trên Skool",
  },
  {
    src: "/feedback3.png",
    width: 1270,
    height: 363,
    name: "Windy Nguyen",
    result: "Kéo cộng đồng trở lại từ 40 thành viên",
  },
  {
    src: "/feedback4.png",
    width: 1260,
    height: 372,
    name: "Huỳnh Hoàng Quốc",
    result: "Bài học sau buổi onboarding 1-1",
  },
  {
    src: "/feedback5.png",
    width: 1318,
    height: 382,
    name: "Mai Do Thi",
    result: "Hợp đồng coach 120 triệu",
  },
  {
    src: "/feedback6.png",
    width: 1325,
    height: 383,
    name: "Nguyễn Đức Tuấn",
    result: "Chốt hợp đồng coaching đầu tiên",
  },
  {
    src: "/feedback7.png",
    width: 1326,
    height: 380,
    name: "Trần Việt Anh",
    result: "4 khách hàng mới sau khi áp dụng",
  },
  {
    src: "/feedback8.png",
    width: 1340,
    height: 377,
    name: "Vũ Nguyễn Quang",
    result: "6.200$ lợi nhuận trong 3 tháng",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section id="chung-thuc">
      <SectionContainer width="wide">
        <Reveal>
          <SectionIntro
            label="Chứng thực"
            title={
              <>
                Người thật,{" "}
                <span className="text-gold-shimmer">kết quả thật</span>
              </>
            }
            description="Ảnh chụp bài chia sẻ thành tích trong cộng đồng. Bấm vào ảnh để đọc rõ."
            descriptionAlign="center"
          />
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {posts.map((post, index) => (
            <StaggerItem key={post.src}>
              <article className="card-surface flex h-full flex-col gap-3 !p-3">
                <div className="px-1 pt-1">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-text-subtle)]">
                    {post.name}
                  </p>
                  <h3 className="mt-1 text-lg font-bold leading-snug">
                    {post.result}
                  </h3>
                </div>
                <button
                  type="button"
                  className="overflow-hidden rounded-xl bg-white text-left transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  onClick={() => setActive(index)}
                  aria-label={`Xem bài chia sẻ của ${post.name}: ${post.result}`}
                >
                  <Image
                    src={post.src}
                    alt={`Bài chia sẻ của ${post.name}: ${post.result}`}
                    width={post.width}
                    height={post.height}
                    quality={90}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </button>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      <FeedbackLightbox
        index={active}
        onClose={() => setActive(null)}
        onChange={setActive}
      />
    </Section>
  );
}

function FeedbackLightbox({
  index,
  onClose,
  onChange,
}: {
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const open = index !== null;
  const post = index !== null ? posts[index] : null;

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && index !== null) {
        onChange((index + 1) % posts.length);
      }
      if (event.key === "ArrowLeft" && index !== null) {
        onChange((index - 1 + posts.length) % posts.length);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, onClose, onChange]);

  if (!open || !post || index === null) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Bài chia sẻ của ${post.name}`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-label="Đóng ảnh"
        onClick={onClose}
      />
      <div className="relative z-10 flex max-h-[100dvh] w-full max-w-5xl flex-col gap-3">
        <div className="flex items-start justify-between gap-3 text-white">
          <div>
            <p className="text-sm font-semibold">{post.name}</p>
            <p className="text-sm text-white/70">{post.result}</p>
          </div>
          <button
            type="button"
            className="inline-flex min-h-10 shrink-0 items-center rounded-full border border-white/30 px-4 text-sm font-semibold"
            onClick={onClose}
          >
            Đóng
          </button>
        </div>

        <div className="overflow-x-auto overscroll-x-contain rounded-xl bg-white">
          <Image
            src={post.src}
            alt={`Bài chia sẻ của ${post.name}: ${post.result}`}
            width={post.width}
            height={post.height}
            quality={95}
            className="h-auto w-[860px] max-w-none sm:w-full"
          />
        </div>
        <p className="text-center text-xs text-white/60 sm:hidden">
          Kéo ngang để đọc hết bài viết
        </p>

        <div className="flex items-center justify-between gap-3 text-white">
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-4 text-sm font-semibold"
            onClick={() => onChange((index - 1 + posts.length) % posts.length)}
          >
            Trước
          </button>
          <p className="text-sm tabular-nums text-white/70">
            {index + 1} / {posts.length}
          </p>
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-4 text-sm font-semibold"
            onClick={() => onChange((index + 1) % posts.length)}
          >
            Sau
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
