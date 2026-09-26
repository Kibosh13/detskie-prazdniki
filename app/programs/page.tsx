import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/site-paths";
import {
  ArrowRight,
  Atom,
  Camera,
  Check,
  Clock3,
  Crown,
  Music2,
  Palette,
  PartyPopper,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Программы и цены",
  description: "Программы детских праздников Фантастик Шоу: анимация, квесты, научные шоу, вечеринки и праздники под ключ.",
};

const programs = [
  {
    title: "Фантастик Mini",
    age: "3–6 лет",
    duration: "60 минут",
    people: "1 артист",
    price: "от 9 900 ₽",
    description: "Динамичная программа для небольшого праздника дома, в кафе или детском саду.",
    items: ["герой на выбор", "музыка и тематический реквизит", "10+ игр и мини-квест", "фигурки из шаров"],
    color: "bg-sun",
    icon: Sparkles,
  },
  {
    title: "Большая игра",
    age: "5–10 лет",
    duration: "90 минут",
    people: "2 артиста",
    price: "от 18 900 ₽",
    description: "Сюжетный квест с командными заданиями, неожиданными поворотами и ярким финалом.",
    items: ["два ведущих в образах", "авторский квест", "объёмный реквизит", "мини-дискотека"],
    color: "bg-coral",
    icon: Crown,
  },
  {
    title: "Научный бум",
    age: "6–12 лет",
    duration: "75 минут",
    people: "ведущий + техник",
    price: "от 21 900 ₽",
    description: "Безопасные эксперименты, настоящий холодный пар и опыт, в котором участвует каждый.",
    items: ["защитные очки", "8 эффектных опытов", "мороженое с азотом", "фото после шоу"],
    image: assetPath("/images/science.png"),
    color: "bg-violet text-white",
    icon: Atom,
  },
  {
    title: "Танцы и конфетти",
    age: "7–14 лет",
    duration: "120 минут",
    people: "ведущий + DJ",
    price: "от 29 900 ₽",
    description: "Музыка, челленджи и танцевальный драйв для компании, которая уже выросла из сказок.",
    items: ["DJ и свет", "танцевальные баттлы", "селфи-челлендж", "конфетти-финал"],
    image: assetPath("/images/pastel.png"),
    color: "bg-lime",
    icon: Music2,
  },
  {
    title: "Праздник под ключ",
    age: "любой возраст",
    duration: "от 3 часов",
    people: "полная команда",
    price: "от 65 000 ₽",
    description: "Придумываем концепцию, собираем подрядчиков и координируем событие от встречи гостей до финала.",
    items: ["персональная концепция", "площадка и оформление", "шоу и программа", "координатор на площадке"],
    color: "bg-[#ddd4ef]",
    icon: PartyPopper,
  },
];

const extras = [
  [Palette, "Оформление", "Фотозоны, шары, сервировка и печатная продукция в едином стиле."],
  [Camera, "Фото и видео", "Репортажная съёмка, короткий ролик и готовые кадры для всей семьи."],
  [Atom, "Шоу-программы", "Научное, бумажное, мыльное и фокус-шоу как яркий финал."],
  [Music2, "Звук и DJ", "Аппаратура, плейлист, микрофоны и свет для большой компании."],
];

export default function ProgramsPage() {
  return (
    <main>
      <section className="pastel-watercolor border-b border-ink/15">
        <div className="site-container py-16 md:py-24">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.15em] text-violet">Программы и цены</p>
          <div className="grid gap-9 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h1 className="max-w-5xl text-[clamp(3.4rem,8vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.04em] text-[#413656]">
              Выберите свой формат
            </h1>
            <p className="max-w-xl text-lg font-semibold leading-relaxed text-[#625c6c] md:text-xl">
              Любую программу адаптируем под возраст, площадку и интересы ребёнка. Цена фиксируется в смете до праздника.
            </p>
          </div>
        </div>
      </section>

      <section id="shows" className="scroll-mt-20 bg-white py-16 md:py-24">
        <div className="site-container space-y-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <article
                className="grid overflow-hidden rounded-[2rem] border-2 border-ink bg-white shadow-[7px_7px_0_#17131f] lg:grid-cols-[0.72fr_1.28fr]"
                key={program.title}
              >
                <div className={`relative min-h-[300px] border-b-2 border-ink p-7 lg:border-b-0 lg:border-r-2 ${program.color}`}>
                  {program.image ? (
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 38vw"
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <span className="text-sm font-black uppercase tracking-[0.13em] opacity-60">Программа 0{index + 1}</span>
                      <Icon className="absolute bottom-7 right-7 h-28 w-28 opacity-25" strokeWidth={1.3} />
                      <p className="display-title absolute bottom-6 left-7 max-w-[75%] text-5xl leading-[0.87] md:text-6xl">{program.title}</p>
                    </>
                  )}
                  {program.image && (
                    <div className="absolute inset-x-5 bottom-5 rounded-2xl border-2 border-ink bg-white p-4 text-ink shadow-[4px_4px_0_#17131f]">
                      <span className="text-sm font-black uppercase tracking-[0.13em]">Программа 0{index + 1}</span>
                    </div>
                  )}
                </div>
                <div className="p-7 md:p-10">
                  <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2 text-sm font-black">
                        <span className="rounded-full bg-[#f2ecff] px-3 py-1.5">{program.age}</span>
                        <span className="flex items-center gap-1.5 rounded-full bg-[#f2ecff] px-3 py-1.5"><Clock3 className="h-4 w-4" />{program.duration}</span>
                        <span className="rounded-full bg-[#f2ecff] px-3 py-1.5">{program.people}</span>
                      </div>
                      <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">{program.title}</h2>
                      <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-[#625c6c]">{program.description}</p>
                    </div>
                    <p className="shrink-0 text-3xl font-black text-violet">{program.price}</p>
                  </div>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {program.items.map((item) => (
                      <span className="flex items-center gap-3 font-bold" key={item}>
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime"><Check className="h-4 w-4" strokeWidth={3} /></span>
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link className="btn-primary mt-8" href={`/contacts?program=${encodeURIComponent(program.title)}`}>
                    Хочу эту программу <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="extras" className="pastel-watercolor scroll-mt-20 border-y border-ink/15 py-16 md:py-24">
        <div className="site-container">
          <p className="eyebrow">Можно добавить</p>
          <h2 className="section-title max-w-4xl">Соберём всё в одну историю</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {extras.map(([Icon, title, text]) => (
              <div className="rounded-[1.75rem] border-2 border-ink bg-white p-6" key={title as string}>
                <Icon className="h-9 w-9 text-violet" />
                <h3 className="mt-8 text-2xl font-black">{title as string}</h3>
                <p className="mt-3 font-medium leading-relaxed text-[#625c6c]">{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white md:py-24">
        <div className="site-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.15em] text-sun">Не знаете, что выбрать?</p>
            <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">Расскажите про ребёнка — предложим 3 подходящих сценария</h2>
          </div>
          <Link className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-white bg-sun px-7 font-black text-ink" href="/contacts">
            Получить подборку <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
