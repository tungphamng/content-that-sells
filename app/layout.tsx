import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-google-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Content That Sells | Workshop miễn phí — 10X Masterminds",
  description:
    "Workshop online miễn phí: Cách tạo dựng chuỗi bài content chuyển đổi cao, thu hút đúng khách hàng đến sự kiện bán hàng của bạn. Thứ 7, 31/10 — 9h–11h.",
  openGraph: {
    title: "Content That Sells — Free Workshop Online",
    description:
      "Chuỗi content chuyển đổi cao cho webinar, workshop & sự kiện bán hàng.",
    images: [
      { url: "/76a1b93a-19a1-474e-9013-7d1caca4d045.jpg" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${plusJakarta.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans">
        {children}
      </body>
    </html>
  );
}
