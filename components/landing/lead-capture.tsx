"use client";

import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionContainer } from "@/components/ui/section";
import { RegisterForm } from "@/components/landing/register-form";

export default function LeadCaptureSection() {
  return (
    <Section id="register-form" variant="mesh" className="relative">
      <AmbientOrbs variant="cta" />
      <SectionContainer width="wide" className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal className="lg:pt-2">
            <p className="section-label">
              Giữ chỗ ngay
            </p>
            <h2 className="section-title section-title--split-col mt-2 text-left md:whitespace-nowrap">
              Đăng ký{" "}
              <span className="text-gold-shimmer">Content That Sells</span>
            </h2>
            <p className="mt-4 text-body text-justify-vi text-[var(--color-text-muted)]">
              Vui lòng điền form đăng ký tham gia bên cạnh để nhận quà tặng và
              thông tin tham gia chương trình.
            </p>
            <ul className="mt-6 flex flex-col gap-2 text-sm text-[var(--color-text-muted)]">
              <li>✓ Sự kiện: 9h00 – 11h00, Thứ 7, 31/10</li>
              <li>✓ Online qua Zoom — miễn phí 100%</li>
              <li>✓ Quà tặng hấp dẫn</li>
            </ul>
          </Reveal>

          <div className="register-sticky-form">
            <RegisterForm />
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}
