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
    <header className="relative z-50 border-b border-ink/15 bg-white/95 backdrop-blur-md">
      <div className="site-container hidden min-h-[224px] grid-cols-[170px_minmax(0,1fr)] xl:grid">
        <Link
          aria-label="Фантастик Шоу — на главную"
          className="row-span-3 flex items-center justify-center border-r border-ink/15 pr-5"
          href="/"
          onClick={() => setOpen(false)}
        >
          <span className="relative block h-[148px] w-[150px] overflow-hidden rounded-2xl bg-white">
            <Image
              src={assetPath("/images/fantastik-show-logo.png")}
              alt="Фантастик Шоу"
              fill
              priority
              sizes="150px"
              className="object-contain"
            />
          </span>
        </Link>

        <div className="flex min-h-[72px] items-center justify-center gap-5 border-b border-ink/10 px-6">
          <nav className="flex items-center gap-6" aria-label="Основная навигация">
            {nav.map(([label, href]) => (
              <Link className="text-sm font-bold transition-colors hover:text-violet" href={href} key={`${label}-${href}`}>
                {label}
              </Link>
            ))}
          </nav>
          <Link aria-label="Найти программу" className="grid h-10 w-10 place-items-center rounded-full border border-ink/25 bg-[#faf8fb] text-violet transition-colors hover:bg-[#f1ecf7]" href="/programs">
            <Search className="h-5 w-5" />
          </Link>
        </div>

        <div className="flex min-h-[64px] items-center justify-end gap-3 border-b border-ink/10 px-6">
          <a className="flex items-center gap-2 whitespace-nowrap text-base font-black tracking-tight text-violet" href="tel:+79259245573">
            <Phone className="h-4 w-4" strokeWidth={2.8} />
            +7 925 924-55-73
          </a>
          <Link aria-label="Написать в MAX" className="grid h-10 min-w-10 place-items-center rounded-full border border-ink/25 bg-white px-2 text-[0.65rem] font-black" href="/contacts">MAX</Link>
          <a aria-label="Написать в WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-ink/25 bg-white text-violet" href="https://wa.me/79259245573" rel="noreferrer" target="_blank"><MessageCircle className="h-5 w-5" /></a>
          <Link aria-label="Написать в Telegram" className="grid h-10 w-10 place-items-center rounded-full border border-ink/25 bg-white text-violet" href="/contacts"><Send className="h-4 w-4" /></Link>
        </div>

        <p className="flex min-h-[88px] items-center justify-center px-6 text-center text-[clamp(1.25rem,2.05vw,2rem)] font-black uppercase leading-[1.05] tracking-[-0.04em] text-violet">
          Организация&nbsp;<span className="text-[#a85b73]">фантастических</span>&nbsp;праздников в Москве и М.О.
        </p>
      </div>

      <div className="site-container grid min-h-[146px] grid-cols-[82px_minmax(0,1fr)] grid-rows-[72px_auto] xl:hidden">
        <Link aria-label="Фантастик Шоу — на главную" className="row-span-2 flex items-center border-r border-ink/10 pr-2" href="/" onClick={() => setOpen(false)}>
          <span className="relative block h-[78px] w-[80px] overflow-hidden rounded-xl bg-white">
            <Image
              src={assetPath("/images/fantastik-show-logo.png")}
              alt="Фантастик Шоу"
              fill
              priority
              sizes="80px"
              className="object-contain"
            />
          </span>
        </Link>

        <div className="flex items-center justify-end gap-3 border-b border-ink/10 pl-3">
          <a className="whitespace-nowrap text-[0.78rem] font-black tracking-tight text-violet sm:text-sm" href="tel:+79259245573">+7 925 924-55-73</a>
          <button
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/30 bg-white"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <p className="flex items-center justify-center px-3 py-3 text-center text-[clamp(0.92rem,4.2vw,1.15rem)] font-black uppercase leading-[1.05] tracking-[-0.035em] text-violet">
          Организация фантастических праздников в Москве и М.О.
        </p>
      </div>

      {open && (
        <div className="border-t border-ink/15 bg-white px-5 py-6 xl:hidden">
          <nav className="site-container flex flex-col gap-4" aria-label="Мобильная навигация">
            {nav.map(([label, href]) => (
              <Link className="text-2xl font-black" href={href} key={`${label}-${href}`} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link className="flex items-center gap-2 text-xl font-black text-violet" href="/programs" onClick={() => setOpen(false)}>
              <Search className="h-5 w-5" /> Поиск программ
            </Link>
            <a className="mt-2 flex items-center gap-2 text-xl font-black text-violet" href="tel:+79259245573"><Phone className="h-5 w-5" />+7 925 924-55-73</a>
            <div className="mt-2 flex flex-wrap gap-2">
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
