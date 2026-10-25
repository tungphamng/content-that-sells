import type { Metadata } from "next";
import AltLandingShell from "@/components/landing/alt/alt-landing-shell";

export const metadata: Metadata = {
  title: "Layout B Preview | Content That Sells",
  description:
    "Trang review cấu trúc landing thay thế — không index.",
  robots: { index: false, follow: false },
};

export default function TempPremiumPage() {
  return <AltLandingShell />;
}
