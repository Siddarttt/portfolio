import { Rubik } from "next/font/google";

/**
 * Typography — dark technical-editorial theme.
 * ONE family does everything (the theme's defining trait): Rubik,
 * loaded as a single variable font (one file, full 300–900 axis).
 *  - Display & headings: 800, uppercase
 *  - Labels / eyebrows: 500, tracked uppercase
 *  - Body: 400, sentence case
 *
 * next/font/google self-hosts at build time — zero runtime requests.
 * No italics loaded (none used).
 */

export const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});
