"use client";

import Image from "next/image";
import { RegisterCtaButton } from "@/components/ui/button";
import { MakeItLaunchTitle } from "@/components/ui/make-it-launch-title";
import { BRAND_LOGO_SRC } from "@/lib/constants";
import { scrollToHash } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils/cn";

const links = [
  { href: "#loi-ich", label: "Lợi ích" },
  { href: "#lo-trinh", label: "Nội dung" },
  { href: "#faq", label: "FAQ" },
];

export default function HeaderSection() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md"
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-5 py-3 md:px-4 md:py-4">
        <a
          href="#"
          className="flex min-w-0 items-center gap-3"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            src={BRAND_LOGO_SRC}
            alt="10X Masterminds"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain"
            priority
          />
          <div className="flex min-w-0 flex-col gap-0.5">
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/70">
              10X Masterminds
            </span>
            <MakeItLaunchTitle size="header" className="truncate" />
          </div>
        </a>

        <nav
          className="nav-pill-track hidden md:flex"
          aria-label="Điều hướng chính"
        >
          {links.map((link) => (
            <button
              key={link.href}
              type="button"
              className={cn(
                "font-nav rounded-full px-4 py-1.5 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-white",
              )}
              onClick={() => scrollToHash(link.href)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <RegisterCtaButton size="sm" className="shrink-0" />
      </div>
    </header>
  );
}
