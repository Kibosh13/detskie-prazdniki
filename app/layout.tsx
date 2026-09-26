import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { assetPath } from "@/lib/site-paths";
import "./globals.css";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

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
        className="antialiased"
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
