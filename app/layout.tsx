import type { Metadata } from "next";
import type { CSSProperties } from "react";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { assetPath } from "@/lib/site-paths";
import "./globals.css";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nunito = localFont({
  src: [
    { path: "./fonts/nunito-600.ttf", weight: "600", style: "normal" },
    { path: "./fonts/nunito-800.ttf", weight: "800", style: "normal" },
    { path: "./fonts/nunito-900.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-nunito",
  display: "swap",
});

const comfortaa = localFont({
  src: "./fonts/comfortaa-700.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-comfortaa",
  display: "swap",
});

const rubikBubbles = localFont({
  src: "./fonts/rubik-bubbles-400.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-rubik-bubbles",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Фантастик Шоу — детские праздники в Москве",
    template: "%s — Фантастик Шоу",
  },
  description:
    "Организация детских праздников под ключ в Москве и области: аниматоры, шоу, квесты, мастер-классы и оформление.",
  robots: isGitHubPages
    ? {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      }
    : undefined,
  icons: {
    icon: assetPath("/favicon.svg"),
    shortcut: assetPath("/favicon.svg"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body
        className={`${nunito.variable} ${comfortaa.variable} ${rubikBubbles.variable} antialiased`}
        style={{
          "--pastel-watercolor-image": `url("${assetPath("/images/pastel-watercolor-bg.png")}")`,
        } as CSSProperties}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
