import localFont from "next/font/local";
import { DM_Sans, Inter } from "next/font/google";

export const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700", "800"]
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const eudoxus = localFont({
  src: [
    {
      path: "./EudoxusSans-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./EudoxusSans-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./EudoxusSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./EudoxusSans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./EudoxusSans-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./EudoxusSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});
