"use client";

import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionContainer } from "@/components/ui/section";
import { RegisterForm } from "@/components/landing/register-form";

export default function LeadCaptureSection() {
  return (
    <Section
      id="register-form"
      variant="mesh"
      className="relative overflow-hidden"
    >
      <AmbientOrbs variant="cta" />
      <SectionContainer width="wide" className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <p className="section-label text-[var(--color-text-subtle)]">
              Giữ chỗ ngay
            </p>
            <h2 className="section-title mt-2 text-left">
              Đăng ký{" "}
              <span className="text-gold-shimmer">Content That Sells</span>
            </h2>
            <p className="mt-4 text-body text-justify-vi text-[var(--color-text-muted)]">
              Điền form bên cạnh — team gửi link Zoom và hướng dẫn vào group
              Zalo trong 24h. Dùng email bạn check thường xuyên để không bỏ
              lỡ nhắc lịch trước ngày{" "}
              <strong className="text-[var(--foreground)]">31/10</strong>.
            </p>
            <ul className="mt-6 flex flex-col gap-2 text-sm text-[var(--color-text-muted)]">
              <li>✓ Sự kiện: 9h00 – 11h00, Thứ 7, 31/10</li>
              <li>✓ Online qua Zoom — miễn phí 100%</li>
              <li>✓ Tặng template chuỗi content + checklist</li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <RegisterForm />
          </Reveal>
        </div>
      </SectionContainer>
    </Section>
  );
}
