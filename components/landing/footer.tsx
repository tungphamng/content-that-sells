import Image from "next/image";
import { SectionContainer } from "@/components/ui/section";
import { BRAND_LOGO_SRC, FACEBOOK_PAGE_URL } from "@/lib/constants";

export default function FooterSection() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--background)] py-8 text-[var(--color-text-muted)] md:py-10">
      <SectionContainer className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:text-left">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
          <Image
            src={BRAND_LOGO_SRC}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain opacity-90"
            aria-hidden
          />
          <p className="text-sm">
            © 2026 10X Masterminds · MAKE IT LAUNCH
          </p>
        </div>
        <a
          href={FACEBOOK_PAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center rounded-full border border-[var(--color-border-strong)] px-4 py-2 text-sm transition-colors hover:border-[var(--color-accent-gold)] hover:text-white"
        >
          Facebook
        </a>
      </SectionContainer>
    </footer>
  );
}
