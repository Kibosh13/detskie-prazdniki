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

const brandTitle = "ОРГАНИЗАЦИЯ ФАНТАСТИЧЕСКИХ ПРАЗДНИКОВ В МОСКВЕ И М.О.";
const letterColors = ["#128fd0", "#ea3454", "#e8a900", "#35a64b", "#f47a31"];
const colorfulBrandTitle = (() => {
  let colorIndex = 0;

  return Array.from(brandTitle, (character) => ({
    character,
    color: character === " " ? undefined : letterColors[colorIndex++ % letterColors.length],
  }));
})();

function BrandTitle({ mobile = false }: { mobile?: boolean }) {
  return (
    <p
      aria-label={brandTitle}
      className={
        mobile
          ? "flex items-center justify-center px-2 py-3 text-center text-[clamp(1rem,4.3vw,1.2rem)] leading-[1.45] tracking-[0.02em]"
          : "flex min-h-[94px] items-center justify-center px-6 py-4 text-center text-[clamp(1.25rem,1.9vw,1.95rem)] leading-[1.35] tracking-[0.025em]"
      }
    >
      <span aria-hidden="true" className="logo-letter-title">
        {colorfulBrandTitle.map(({ character, color }, index) =>
          character === " " ? (
            <span key={index}> </span>
          ) : (
            <span key={index} style={{ color }}>
              {character}
            </span>
          ),
        )}
      </span>
    </p>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#fffefa]/95 shadow-[0_8px_28px_rgba(37,50,82,0.06)] backdrop-blur-md">
      <div className="site-container hidden min-h-[224px] grid-cols-[170px_minmax(0,1fr)] xl:grid">
        <Link
          aria-label="Фантастик Шоу — на главную"
          className="row-span-3 flex items-center justify-center pr-5"
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

        <div className="flex min-h-[72px] items-center justify-center gap-5 px-6">
          <nav className="flex items-center gap-6" aria-label="Основная навигация">
            {nav.map(([label, href], index) => (
              <Link className={`text-sm font-black transition-transform hover:-translate-y-0.5 ${index % 4 === 0 ? "text-[#128fd0]" : index % 4 === 1 ? "text-[#ea3454]" : index % 4 === 2 ? "text-[#35a64b]" : "text-[#e47a20]"}`} href={href} key={`${label}-${href}`}>
                {label}
              </Link>
            ))}
          </nav>
          <Link aria-label="Найти программу" className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#128fd0]/35 bg-[#eaf8ff] text-[#128fd0] transition-transform hover:scale-105" href="/programs">
            <Search className="h-5 w-5" />
          </Link>
        </div>

        <div className="flex min-h-[64px] items-center justify-end gap-3 px-6">
          <a className="flex items-center gap-2 whitespace-nowrap text-base font-black tracking-tight text-[#ea3454]" href="tel:+79259245573">
            <Phone className="h-4 w-4" strokeWidth={2.8} />
            +7 925 924-55-73
          </a>
          <Link aria-label="Написать в MAX" className="grid h-10 min-w-10 place-items-center rounded-full border-2 border-[#ffcf3f] bg-[#fff8d7] px-2 text-[0.65rem] font-black" href="/contacts">MAX</Link>
          <a aria-label="Написать в WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#74d45d] bg-[#efffe9] text-[#35a64b]" href="https://wa.me/79259245573" rel="noreferrer" target="_blank"><MessageCircle className="h-5 w-5" /></a>
          <Link aria-label="Написать в Telegram" className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#128fd0] bg-[#eaf8ff] text-[#128fd0]" href="/contacts"><Send className="h-4 w-4" /></Link>
        </div>

        <BrandTitle />
      </div>

      <div className="site-container grid min-h-[146px] grid-cols-[82px_minmax(0,1fr)] grid-rows-[72px_auto] xl:hidden">
        <Link aria-label="Фантастик Шоу — на главную" className="row-span-2 flex items-center pr-2" href="/" onClick={() => setOpen(false)}>
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

        <div className="flex items-center justify-end gap-3 pl-3">
          <a className="whitespace-nowrap text-[0.78rem] font-black tracking-tight text-[#ea3454] sm:text-sm" href="tel:+79259245573">+7 925 924-55-73</a>
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

        <BrandTitle mobile />
      </div>

      {open && (
        <div className="bg-white px-5 py-6 xl:hidden">
          <nav className="site-container flex flex-col gap-4" aria-label="Мобильная навигация">
            {nav.map(([label, href]) => (
              <Link className="text-2xl font-black" href={href} key={`${label}-${href}`} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link className="flex items-center gap-2 text-xl font-black text-[#128fd0]" href="/programs" onClick={() => setOpen(false)}>
              <Search className="h-5 w-5" /> Поиск программ
            </Link>
            <a className="mt-2 flex items-center gap-2 text-xl font-black text-[#ea3454]" href="tel:+79259245573"><Phone className="h-5 w-5" />+7 925 924-55-73</a>
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
