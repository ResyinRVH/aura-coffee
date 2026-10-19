import type { Metadata } from "next";
import { Geist, Geist_Mono} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: [
    {
      path: "./fonts/poppins.regular.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const texGyreAdventor = localFont({
  src: [
    {
      path: "./fonts/texgyreadventor-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/texgyreadventor-bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/texgyreadventor-bolditalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/texgyreadventor-italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-adventor",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurora Roast & Brew | Artisan & Boutique Coffee Roastery",
  description:
    "A clean, modern artisan coffee house landing page highlighting specialty coffee, curated menu, and sanctuary experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${texGyreAdventor.variable} ${poppins.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-silver-100 text-silver">
        {children}
      </body>
    </html>
  );
}