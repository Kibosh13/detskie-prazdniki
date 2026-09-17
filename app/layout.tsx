import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { assetPath } from "@/lib/site-paths";
import "./globals.css";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export const metadata: Metadata = {
  title: {
    default: "ИСКРА — детские праздники в Москве",
    template: "%s — ИСКРА",
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
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
