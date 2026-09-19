import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { assetPath } from "@/lib/site-paths";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-white">
      <div className="site-container grid gap-12 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-white">
            <Image
              src={assetPath("/images/fantastik-show-logo.png")}
              alt="Фантастик Шоу"
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>
          <p className="mt-5 max-w-sm text-lg text-white/70">
            Праздники, после которых дети ещё долго играют в эту историю.
          </p>
        </div>
        <div className="grid gap-3 font-bold">
          <p className="mb-2 text-sm uppercase tracking-[0.14em] text-white/45">Сайт</p>
          <Link href="/programs">Программы</Link>
          <Link href="/characters">Персонажи</Link>
          <Link href="/about">О нас</Link>
          <Link href="/contacts">Контакты</Link>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-white/45">Связаться</p>
          <a className="flex items-center gap-2 text-xl font-black" href="tel:+79259245573">
            8 (925) 924-55-73 <ArrowUpRight className="h-5 w-5" />
          </a>
          <p className="mt-5 text-sm text-white/45">Москва и Московская область</p>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="site-container flex flex-col gap-2 py-5 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ФАНТАСТИК ШОУ. Демонстрационная версия.</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
}
