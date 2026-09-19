"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { assetPath } from "@/lib/site-paths";

const nav = [
  ["Программы", "/programs"],
  ["Персонажи", "/characters"],
  ["О нас", "/about"],
  ["Контакты", "/contacts"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur-md">
      <div className="border-b-2 border-ink bg-violet text-white">
        <div className="site-container flex min-h-10 items-center justify-center gap-4 py-1.5 sm:justify-between">
          <span className="hidden text-sm font-bold sm:block">Ежедневно, 09:00–21:00</span>
          <a className="flex items-center gap-2 text-lg font-black tracking-tight" href="tel:+79259245573">
            <Phone className="h-4 w-4" strokeWidth={2.8} />
            8 (925) 924-55-73
          </a>
        </div>
      </div>

      <div className="site-container flex h-[82px] items-center justify-between gap-7">
        <Link aria-label="Фантастик Шоу — на главную" className="flex items-center" href="/" onClick={() => setOpen(false)}>
          <span className="relative block h-[72px] w-[74px] overflow-hidden rounded-xl bg-white">
            <Image
              src={assetPath("/images/fantastik-show-logo.png")}
              alt="Фантастик Шоу"
              fill
              priority
              sizes="74px"
              className="object-contain"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {nav.map(([label, href]) => (
            <Link className="font-bold transition-colors hover:text-violet" href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link className="rounded-full border-2 border-ink bg-violet px-5 py-3 font-black text-white shadow-[3px_3px_0_#17131f] transition-transform hover:-translate-y-0.5" href="/contacts">
            Рассчитать праздник
          </Link>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-ink bg-cream px-5 py-6 lg:hidden">
          <nav className="site-container flex flex-col gap-4" aria-label="Мобильная навигация">
            {nav.map(([label, href]) => (
              <Link className="text-2xl font-black" href={href} key={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link className="btn-primary mt-3 w-full" href="/contacts" onClick={() => setOpen(false)}>
              Рассчитать праздник
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
