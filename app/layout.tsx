import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BulletproofK9s — Toronto & GTA's #1 Dog Trainers",
  description:
    "Premium dog training in Toronto & the GTA. From toy breeds to working dogs — we fix what others can't. Private lessons, board & train, personal protection, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${dmSans.variable}`}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
