"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { RegisterCtaButton } from "@/components/ui/button";
import { MakeItLaunchTitle } from "@/components/ui/make-it-launch-title";
import { SectionContainer } from "@/components/ui/section";
import { BRAND_LOGO_SRC } from "@/lib/constants";
import { scrollToHash } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils/cn";

const links = [
  { href: "#loi-ich", label: "Lợi ích" },
  { href: "#lo-trinh", label: "Nội dung" },
  { href: "#faq", label: "FAQ" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M6 6l12 12M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  );
}

export default function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  function navigate(href: string) {
    setMenuOpen(false);
    scrollToHash(href);
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(13,13,13,0.92)] backdrop-blur-md"
    >
      <SectionContainer className="py-3 md:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <a
            href="#"
            className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src={BRAND_LOGO_SRC}
              alt="10X Masterminds"
              width={40}
              height={40}
              className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
              priority
            />
            <div className="flex min-w-0 flex-col gap-0.5 sm:gap-1">
              <span
                className="hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-subtle)] sm:block"
              >
                10X Masterminds
              </span>
              <MakeItLaunchTitle
                size="header"
                className="truncate text-xs sm:text-sm"
              />
            </div>
          </a>

          <nav
            className="nav-pill-track hidden shrink-0 md:flex"
            aria-label="Điều hướng chính"
          >
            {links.map((link) => (
              <button
                key={link.href}
                type="button"
                className={cn(
                  "font-nav min-h-10 rounded-full px-4 py-2 text-sm text-[var(--color-text-muted)] transition-colors hover:bg-white/10 hover:text-white",
                )}
                onClick={() => navigate(link.href)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors hover:bg-white/10 hover:text-white md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon open={menuOpen} />
            </button>
            <RegisterCtaButton
              size="sm"
              className="!min-h-10 px-3 text-xs sm:min-h-12 sm:px-4 sm:text-sm"
            />
          </div>
        </div>

        <nav
          id="mobile-nav"
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out md:hidden",
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
          aria-label="Điều hướng di động"
          aria-hidden={!menuOpen}
        >
          <div className="min-h-0">
            <ul
              className={cn(
                "mt-3 flex flex-col gap-1 rounded-2xl border border-[var(--color-border)] bg-[rgba(18,18,18,0.95)] p-2",
                !menuOpen && "pointer-events-none",
              )}
            >
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    className="font-nav w-full rounded-xl px-4 py-3 text-left text-sm text-[var(--color-text-muted)] transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => navigate(link.href)}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </SectionContainer>
    </header>
  );
}
