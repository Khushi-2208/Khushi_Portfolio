import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khushi Kumari Portfolio",
  description: "Portfolio of Khushi Kumari, B.Tech ECE student at NIT Patna. Specializing in AI-powered voice-first interfaces, full-stack systems, and clean architectural design.",
  keywords: ["Khushi Kumari", "NIT Patna", "Web Developer", "ECE", "Goonj", "WDC Portal", "Full Stack Developer", "India"],
  authors: [{ name: "Khushi Kumari" }],
  openGraph: {
    title: "Khushi Kumari — Creative Web Engineer",
    description: "Portfolio of Khushi Kumari, B.Tech ECE student at NIT Patna. Specializing in AI-powered voice interfaces and full-stack systems.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${serif.variable} ${sans.variable} ${mono.variable} bg-brand-bg text-brand-text antialiased selection:bg-brand-accent-light selection:text-brand-accent-dark`}>
        {children}
      </body>
    </html>
  );
}
