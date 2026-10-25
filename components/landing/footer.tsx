import Image from "next/image";
import { BRAND_LOGO_SRC } from "@/lib/constants";

export default function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white/70">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-5 text-center sm:flex-row sm:text-left md:px-4">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Image
            src={BRAND_LOGO_SRC}
            alt=""
            width={36}
            height={36}
            className="h-8 w-8 object-contain opacity-90"
            aria-hidden
          />
          <p className="text-sm">
            © 2026 10X Masterminds · MAKE IT LAUNCH
          </p>
        </div>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-4 py-2 text-sm transition-colors hover:border-[var(--color-brand-gold)] hover:text-white"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}
