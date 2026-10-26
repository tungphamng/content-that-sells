import localFont from "next/font/local";

/** Licensed SVN-Uncut Sans files can replace the bundled woff2 in `app/fonts/`. */
export const svnUncutSans = localFont({
  src: [
    {
      path: "./fonts/SVN-UncutSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SVN-UncutSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SVN-UncutSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SVN-UncutSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-svn-uncut-sans",
  display: "swap",
});
