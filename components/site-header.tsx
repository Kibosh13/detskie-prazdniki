"use client";

import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

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
      <div className="site-container flex h-[76px] items-center justify-between gap-7">
        <Link className="flex items-center gap-2" href="/" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 rotate-[-7deg] place-items-center rounded-xl border-2 border-ink bg-sun shadow-[3px_3px_0_#17131f]">
            <Sparkles className="h-5 w-5 text-violet" strokeWidth={2.8} />
          </span>
          <span className="display-title text-[1.65rem] leading-none tracking-[-0.04em]">ИСКРА</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {nav.map(([label, href]) => (
            <Link className="font-bold transition-colors hover:text-violet" href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a className="font-black" href="tel:+74950000000">+7 (495) 000-00-00</a>
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
