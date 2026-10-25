"use client";

import Image from "next/image";
import Link from "next/link";
import { RegisterCtaButton } from "@/components/ui/button";
import { BRAND_LOGO_SRC } from "@/lib/constants";
import { scrollToHash } from "@/lib/scroll-to-section";

const anchors = [
  { href: "#outcomes", label: "Kết quả" },
  { href: "#agenda", label: "Lộ trình" },
  { href: "#register-form", label: "Đăng ký" },
];

export default function AltHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(13,13,13,0.88)] backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/temp" className="flex items-center gap-3">
          <Image
            src={BRAND_LOGO_SRC}
            alt="10X Masterminds"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            Content That Sells
          </span>
        </Link>
        <nav className="hidden gap-1 md:flex" aria-label="Điều hướng">
          {anchors.map((a) => (
            <button
              key={a.href}
              type="button"
              className="rounded-lg px-3 py-2 text-sm text-[#C2C2C2] transition hover:bg-white/10 hover:text-white"
              onClick={() => scrollToHash(a.href)}
            >
              {a.label}
            </button>
          ))}
        </nav>
        <RegisterCtaButton size="sm" />
      </div>
    </header>
  );
}
