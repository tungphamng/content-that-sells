"use client";

import { RegisterCtaButton } from "@/components/ui/button";

export default function AltMobileCta() {
  return (
    <div
      className="alt-mobile-cta fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[rgba(13,13,13,0.95)] p-3 backdrop-blur-lg md:hidden"
    >
      <RegisterCtaButton size="md" className="w-full rounded-full" />
    </div>
  );
}
