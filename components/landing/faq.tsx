"use client";

import { useState } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import {
  Section,
  SectionContainer,
  SectionIntro,
} from "@/components/ui/section";
import { ChevronDownIcon } from "@/components/ui/chevron-down-icon";
import { cn } from "@/lib/utils/cn";

const faqs = [
  {
    q: "Workshop có mất phí không?",
    a:
      "Hoàn toàn miễn phí. Bạn chỉ cần đăng ký để nhận link Zoom và tài liệu trong group Zalo.",
  },
  {
    q: "Tôi chưa có sản phẩm rõ, có tham gia được không?",
    a:
      "Có. Phần đầu workshop giúp bạn chốt thông điệp và đối tượng — chuỗi content vẫn áp dụng cho webinar giới thiệu hoặc waitlist.",
  },
  {
    q: "Workshop diễn ra trên nền tảng nào?",
    a:
      "Trực tiếp trên Zoom. Sau khi đăng ký, bạn sẽ được mời vào group Zalo của sự kiện để nhận link và nhắc lịch.",
  },
  {
    q: "Có recording sau sự kiện không?",
    a:
      "Chúng tôi khuyên bạn tham gia live để hỏi đáp trực tiếp. Bản ghi buổi workshop (nếu có) không tự động gửi miễn phí cho tất cả — ai muốn nhận recording có thể đăng ký mua sau buổi học.",
  },
];

function FaqItem({
  question,
  answer,
  expanded,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  expanded: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
      <button
        type="button"
        id={`${id}-trigger`}
        className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-4 text-left font-semibold md:px-6"
        aria-expanded={expanded}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
      >
        {question}
        <ChevronDownIcon expanded={expanded} />
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden" aria-hidden={!expanded}>
          <p
            className="border-t border-[var(--color-border)] px-4 py-4 text-body text-justify-vi md:px-6"
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" variant="elevated">
      <SectionContainer width="narrow">
        <Reveal>
          <SectionIntro title="Câu hỏi thường gặp" />
        </Reveal>

        <Stagger className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <StaggerItem key={item.q}>
              <FaqItem
                id={`faq-item-${i}`}
                question={item.q}
                answer={item.a}
                expanded={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>
    </Section>
  );
}
