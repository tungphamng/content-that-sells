"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { Reveal } from "@/components/ui/reveal";
import { LeadSuccessModal } from "@/components/ui/lead-success-modal";

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
      <section
        id="dang-ky"
        className="relative scroll-mt-24 overflow-hidden bg-mesh-animated py-16 text-white md:scroll-mt-28 md:py-24"
      >
        <AmbientOrbs variant="cta" />
        <div className="container relative mx-auto px-5 md:px-4">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/60">
                Giữ chỗ ngay
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Đăng ký{" "}
                <span className="text-gold-shimmer">Content That Sells</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85 text-justify-vi">
                Điền form bên cạnh — team gửi link Zoom và hướng dẫn vào group
                Zalo trong 24h. Hãy dùng email bạn check thường xuyên để không
                bỏ lỡ nhắc lịch trước ngày{" "}
                <strong className="text-white">31/10</strong>.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                <li>✓ Sự kiện: 9h00 – 11h00, Thứ 7, 31/10</li>
                <li>✓ Online qua Zoom — miễn phí 100%</li>
                <li>✓ Tặng template chuỗi content + checklist</li>
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="kit-form-wrapper kit-form-wrapper--dark rounded-2xl border border-white/15 bg-black/50 p-6 backdrop-blur-md md:p-8"
              >
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-white/90"
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
                      className="mb-1.5 block text-sm font-medium text-white/90"
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
                      className="mb-1.5 block text-sm font-medium text-white/90"
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
                  className="mt-6 w-full rounded-full glow-pulse-red"
                >
                  Xác nhận đăng ký miễn phí
                </Button>
                <p className="mt-3 text-center text-xs text-white/50">
                  Bạn có thể huỷ nhận tin bất cứ lúc nào. Không spam.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <LeadSuccessModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
}
