"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, Phone, Search, Send, X } from "lucide-react";
import { useState } from "react";
import { assetPath } from "@/lib/site-paths";

const nav = [
  ["Главная", "/"],
  ["Услуги", "/programs"],
  ["Персонажи", "/characters"],
  ["Фото", "/#gallery"],
  ["Видео", "/#video"],
  ["Отзывы", "/#reviews"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-white/95 backdrop-blur-md">
      <div className="site-container flex min-h-[92px] items-center justify-between gap-5 py-2">
        <Link aria-label="Фантастик Шоу — на главную" className="flex items-center" href="/" onClick={() => setOpen(false)}>
          <span className="relative block h-[78px] w-[80px] overflow-hidden rounded-xl bg-white lg:h-[88px] lg:w-[90px]">
            <Image
              src={assetPath("/images/fantastik-show-logo.png")}
              alt="Фантастик Шоу"
              fill
              priority
              sizes="(max-width: 1024px) 80px, 90px"
              className="object-contain"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Основная навигация">
          {nav.map(([label, href]) => (
            <Link className="text-sm font-bold transition-colors hover:text-violet" href={href} key={`${label}-${href}`}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link aria-label="Найти программу" className="grid h-10 w-10 place-items-center rounded-full border border-ink/25 bg-[#faf8fb] text-violet transition-colors hover:bg-[#f1ecf7]" href="/programs">
            <Search className="h-5 w-5" />
          </Link>
          <a className="flex items-center gap-2 whitespace-nowrap text-base font-black tracking-tight text-violet" href="tel:+79259245573">
            <Phone className="h-4 w-4" strokeWidth={2.8} />
            +7 925 924-55-73
          </a>
          <Link aria-label="Написать в MAX" className="grid h-10 min-w-10 place-items-center rounded-full border border-ink/25 bg-white px-2 text-[0.65rem] font-black" href="/contacts">MAX</Link>
          <a aria-label="Написать в WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-ink/25 bg-white text-violet" href="https://wa.me/79259245573" rel="noreferrer" target="_blank"><MessageCircle className="h-5 w-5" /></a>
          <Link aria-label="Написать в Telegram" className="grid h-10 w-10 place-items-center rounded-full border border-ink/25 bg-white text-violet" href="/contacts"><Send className="h-4 w-4" /></Link>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <a className="whitespace-nowrap text-[0.78rem] font-black tracking-tight text-violet sm:text-sm" href="tel:+79259245573">+7 925 924-55-73</a>
          <button
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/30 bg-white"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/15 bg-white px-5 py-6 xl:hidden">
          <nav className="site-container flex flex-col gap-4" aria-label="Мобильная навигация">
            {nav.map(([label, href]) => (
              <Link className="text-2xl font-black" href={href} key={`${label}-${href}`} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <a className="mt-2 flex items-center gap-2 text-xl font-black text-violet" href="tel:+79259245573"><Phone className="h-5 w-5" />+7 925 924-55-73</a>
            <div className="mt-2 flex gap-2">
              <Link className="rounded-full border border-ink/25 px-4 py-2 text-sm font-black" href="/contacts" onClick={() => setOpen(false)}>MAX</Link>
              <a className="rounded-full border border-ink/25 px-4 py-2 text-sm font-black" href="https://wa.me/79259245573" rel="noreferrer" target="_blank">WhatsApp</a>
              <Link className="rounded-full border border-ink/25 px-4 py-2 text-sm font-black" href="/contacts" onClick={() => setOpen(false)}>Telegram</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
