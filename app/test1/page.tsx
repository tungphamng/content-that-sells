import type { Metadata } from "next";
import Test1Shell from "@/components/landing/test1/test1-shell";

export const metadata: Metadata = {
  title: "Content That Sells | Workshop miễn phí — 10X Masterminds",
  description:
    "Workshop online miễn phí: dành cho ai, bạn nhận được gì, lịch học và cách tham gia. Thứ 7, 31/10 — 9h–11h trên Zoom.",
  robots: { index: false, follow: false },
};

export default function Test1Page() {
  return <Test1Shell />;
}
