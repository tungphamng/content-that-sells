import type { Metadata } from "next";
import { svnUncutSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content That Sells | Workshop miễn phí — 10X Masterminds",
  description:
    "Workshop online miễn phí: Cách tạo dựng chuỗi bài content chuyển đổi cao, thu hút đúng khách hàng đến sự kiện bán hàng của bạn. Thứ 7, 31/10 — 9h–11h.",
  openGraph: {
    title: "Content That Sells — Free Workshop Online",
    description:
      "Chuỗi content chuyển đổi cao cho webinar, workshop & sự kiện bán hàng.",
    images: [{ url: "/hero-peephole.jpg" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${svnUncutSans.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans">
        {children}
      </body>
    </html>
  );
}
