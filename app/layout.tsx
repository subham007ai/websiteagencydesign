import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import AccentTheme from "@/components/AccentTheme";
import { Grain } from "@/components/visuals";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Premium geometric display face for headings & the wordmark.
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sitora — Creative Web Design Agency",
  description:
    "Sitora turns an idea into a launched, growing digital product — strategy, design, and engineering under one roof. Scroll to watch one get built in real time.",
  openGraph: {
    title: "Sitora — Creative Web Design Agency",
    description:
      "We build products in real time — strategy, design, and engineering that turns an idea into a launched, growing product.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <Grain />
        <AccentTheme />
        <SmoothScroll />
        <ProgressBar />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
