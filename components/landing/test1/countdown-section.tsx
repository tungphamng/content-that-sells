"use client";

import { useEffect, useState } from "react";
import { RegisterCtaButton } from "@/components/ui/button";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { Section, SectionContainer } from "@/components/ui/section";

const START = Date.parse("2026-10-31T09:00:00+07:00");
const END = Date.parse("2026-10-31T11:00:00+07:00");

type Phase = "upcoming" | "live" | "ended";

function remainingParts(now: number) {
  const diff = Math.max(0, START - now);
  const totalSeconds = Math.floor(diff / 1000);
  return [
    { label: "Ngày", value: Math.floor(totalSeconds / 86400) },
    { label: "Giờ", value: Math.floor((totalSeconds % 86400) / 3600) },
    { label: "Phút", value: Math.floor((totalSeconds % 3600) / 60) },
    { label: "Giây", value: totalSeconds % 60 },
  ];
}

function phaseAt(now: number): Phase {
  if (now < START) return "upcoming";
  if (now < END) return "live";
  return "ended";
}

const statusCopy: Record<Exclude<Phase, "upcoming">, { title: string; body: string }> =
  {
    live: {
      title: "Workshop đang diễn ra",
      body: "Phòng Zoom mở từ 9h00 đến 11h00. Vào group Zalo để lấy link nếu bạn đã đăng ký.",
    },
    ended: {
      title: "Buổi học đã kết thúc",
      body: "Form vẫn mở nếu bạn muốn nhận thông báo các buổi tiếp theo.",
    },
  };

export default function CountdownSection() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const phase = now === null ? "upcoming" : phaseAt(now);
  const parts =
    now === null
      ? [
          { label: "Ngày", value: null },
          { label: "Giờ", value: null },
          { label: "Phút", value: null },
          { label: "Giây", value: null },
        ]
      : remainingParts(now);

  return (
    <Section
      id="dem-nguoc"
      variant="elevated"
      className="relative overflow-hidden !py-14 md:!py-20"
    >
      <AmbientOrbs variant="cta" />
      <SectionContainer width="wide" className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="section-label">Đếm ngược</p>
            <h2 className="mt-2 text-left text-[1.875rem] font-bold leading-tight tracking-tight text-balance sm:text-4xl">
              {phase === "upcoming" ? (
                <>
                  Còn lại trước{" "}
                  <span className="text-gold-shimmer">9h00, 31/10</span>
                </>
              ) : (
                statusCopy[phase].title
              )}
            </h2>
            <p className="mt-4 max-w-xl text-body">
              {phase === "upcoming"
                ? "Thứ 7, 31/10/2026 · 9h00–11h00 · Zoom · miễn phí. Giữ chỗ sớm để nhận link và tài liệu trong group Zalo."
                : statusCopy[phase].body}
            </p>
            <RegisterCtaButton size="lg" className="mt-6 w-full sm:w-auto" />
          </div>

          {phase === "upcoming" ? (
            <div
              className="grid grid-cols-4 gap-2 sm:gap-3"
              role="timer"
              aria-label="Thời gian còn lại đến 9h00 ngày 31 tháng 10"
            >
              {parts.map((part) => (
                <div
                  key={part.label}
                  className="rounded-2xl border border-white/15 bg-black/50 px-2 py-4 text-center sm:px-3 sm:py-6"
                >
                  <p className="text-3xl font-extrabold tabular-nums tracking-tight sm:text-5xl">
                    {part.value === null
                      ? "--"
                      : String(part.value).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-text-subtle)] sm:text-xs">
                    {part.label}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/15 bg-black/50 px-6 py-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-text-subtle)]">
                Khung giờ đã chốt
              </p>
              <p className="mt-3 text-3xl font-extrabold tracking-tight">
                9h00 – 11h00
              </p>
              <p className="mt-2 text-body">Thứ 7, 31/10/2026 · Zoom</p>
            </div>
          )}
        </div>
      </SectionContainer>
    </Section>
  );
}
