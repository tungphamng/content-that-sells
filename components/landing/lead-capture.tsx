"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { Reveal } from "@/components/ui/reveal";
import { LeadSuccessModal } from "@/components/ui/lead-success-modal";
import { Section, SectionContainer } from "@/components/ui/section";

export default function LeadCaptureSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setShowSuccess(true);
    setName("");
    setEmail("");
    setPhone("");
  }

  return (
    <>
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
              <form
                onSubmit={handleSubmit}
                className="kit-form-wrapper kit-form-wrapper--dark rounded-2xl border border-[var(--color-border)] bg-[rgba(18,18,18,0.85)] p-6 backdrop-blur-md md:p-8"
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                    >
                      Họ và tên *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ban@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-[var(--foreground)]"
                    >
                      Số Zalo (tuỳ chọn)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="09xx xxx xxx"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  variant="red"
                  size="lg"
                  className="mt-6 w-full rounded-full glow-pulse-red transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(229,57,53,0.4)]"
                >
                  Xác nhận đăng ký miễn phí
                </Button>
                <p className="mt-4 text-center text-xs text-[#9CA3AF]">
                  Bạn có thể huỷ nhận tin bất cứ lúc nào. Không spam.
                </p>
              </form>
            </Reveal>
          </div>
        </SectionContainer>
      </Section>

      <LeadSuccessModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
}
