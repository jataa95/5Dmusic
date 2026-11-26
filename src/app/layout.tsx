import type { Metadata, Viewport } from "next";
import { Kumbh_Sans, Playfair_Display, Zalando_Sans_Expanded } from "next/font/google";
import "./globals.css";

const display = Zalando_Sans_Expanded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const body = Kumbh_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "5D Music Group: Branding, Recording, Artist Development",
  description:
    "5D Music Group is a full-service music company focused on managing talent. We help upcoming artists with branding, recording and artist development, and move careers faster on a 5D level.",
  openGraph: {
    title: "5D Music Group",
    description: "Branding, recording and artist development, on a 5D level.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050003",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
