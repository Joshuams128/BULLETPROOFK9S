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
  metadataBase: new URL("https://bulletproofk9s.com"),
  title: {
    default: "BulletproofK9s — Toronto & GTA's #1 Dog Trainers",
    template: "%s | BulletproofK9s",
  },
  description:
    "BulletproofK9s is Toronto & the GTA's premier dog training facility — turning out calm, confident, bulletproof dogs since day one. Private lessons, board & train, personal protection, group training, law enforcement K9s, and boarding.",
  keywords: [
    "dog training Toronto",
    "GTA dog trainer",
    "Schomberg dog training",
    "board and train Toronto",
    "personal protection dog training",
    "police K9 training",
    "puppy training GTA",
    "reactive dog training",
    "balanced dog training",
    "private dog lessons",
    "BulletproofK9s",
  ],
  authors: [{ name: "BulletproofK9s" }],
  creator: "BulletproofK9s",
  publisher: "BulletproofK9s",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://bulletproofk9s.com",
    siteName: "BulletproofK9s",
    title: "BulletproofK9s — Toronto & GTA's #1 Dog Trainers",
    description:
      "Toronto & the GTA's premier dog training facility — turning out calm, confident, bulletproof dogs. Private lessons, board & train, personal protection, and more.",
    images: [
      {
        url: "https://bulletproofk9s.com/wp-content/uploads/2025/03/logo-300x225.png",
        width: 1200,
        height: 630,
        alt: "BulletproofK9s — Premium Dog Training Toronto & GTA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BulletproofK9s — Toronto & GTA's #1 Dog Trainers",
    description:
      "Toronto & the GTA's premier dog training facility. Calm, confident, bulletproof dogs since day one.",
    images: [
      "https://bulletproofk9s.com/wp-content/uploads/2025/03/logo-300x225.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://bulletproofk9s.com/wp-content/uploads/2025/03/logo-300x225.png",
  },
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
