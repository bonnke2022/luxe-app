import type { Metadata } from "next";
import { Jost, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Favicon from "@/public/favicon-16x16.png";
import Providers from "./providers";

const jost = Jost({
  variable: "--font-jost",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxe By Deba",
  description: "We make the world see just how beautiful you are.",
  icons: {
    icon: Favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jost.variable} ${playfair.variable} ${inter.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
