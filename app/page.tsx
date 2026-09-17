import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/site-paths";
import {
  ArrowRight,
  Atom,
  CakeSlice,
  Check,
  PartyPopper,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const directions = [
  {
    icon: PartyPopper,
    title: "Праздник под ключ",
    text: "Сценарий, команда, реквизит и координация — всё берём на себя.",
    color: "bg-[#5b2bd0] text-white",
    href: "/programs",
  },
  {
    icon: WandSparkles,
    title: "Любимый герой",
    text: "Авторские образы и артисты, которые умеют быть с детьми на одной волне.",
    color: "bg-[#ff6b6b] text-[#17131f]",
    href: "/characters",
  },
  {
    icon: Atom,
    title: "Шоу и мастер-классы",
    text: "Наука, фокусы, слаймы и творческие форматы для разных возрастов.",
    color: "bg-[#ffd93d] text-[#17131f]",
    href: "/programs#shows",
  },
  {
    icon: CakeSlice,
    title: "Декор и сладкий стол",
    text: "Собираем пространство в единую историю — от фотозоны до торта.",
    color: "bg-[#b9f46a] text-[#17131f]",
    href: "/programs#extras",
  },
];

export default function Home() {
  return (
    <main>
      <section className="overflow-hidden border-b-2 border-ink bg-sun">
        <div className="site-container grid min-h-[720px] gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-20">
          <div className="relative z-10 max-w-[690px]">
            <div className="mb-7 inline-flex rotate-[-2deg] items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-2 font-bold shadow-[4px_4px_0_#17131f]">
              <Sparkles className="h-4 w-4 text-violet" />
              Москва и Московская область
            </div>
            <h1 className="hero-title text-[clamp(3.5rem,7.5vw,6.7rem)] leading-[0.88]">
              <span className="block">Детский</span>
              <span className="block text-coral">праздник,</span>
              <span className="block">который</span>
              <span className="hero-wow mt-3 inline-block">вау!</span>
            </h1>
            <p className="mt-9 max-w-xl text-lg font-semibold leading-relaxed md:text-xl">
              Придумываем, собираем и проводим живые праздники для детей 3–14 лет. Вы отдыхаете — мы держим тайминг, настроение и каждую деталь.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary group" href="/contacts">
                Обсудить праздник
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link className="btn-secondary" href="/programs">
                Смотреть программы
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
              {["Смета без сюрпризов", "Договор", "Свой реквизит"].map((item) => (
                <span className="flex items-center gap-2" key={item}>
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[530px] lg:min-h-[650px]">
            <div className="absolute inset-4 rotate-3 rounded-[3rem] border-2 border-ink bg-violet shadow-[10px_10px_0_#17131f]" />
            <div className="absolute inset-4 -rotate-2 overflow-hidden rounded-[3rem] border-2 border-ink bg-[#efe7ff]">
              <Image
                src={assetPath("/images/hero.png")}
                alt="Дети и ведущая запускают конфетти на ярком празднике"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-[63%_center]"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-[2rem] border-2 border-ink bg-white/95 p-6 shadow-[6px_6px_0_#17131f] backdrop-blur-sm md:inset-x-12 md:p-8">
                <p className="text-sm font-black uppercase tracking-[0.13em] text-violet">Быстрый старт</p>
                <p className="mt-2 text-2xl font-black leading-tight md:text-3xl">
                  3 идеи праздника и предварительная смета — за один разговор
                </p>
              </div>
              <div className="absolute left-8 top-8 rotate-[-8deg] rounded-full border-2 border-ink bg-coral px-5 py-3 text-sm font-black shadow-[4px_4px_0_#17131f]">
                12 лет опыта
              </div>
              <div className="absolute right-8 top-20 rotate-6 rounded-full border-2 border-ink bg-white px-5 py-3 text-sm font-black shadow-[4px_4px_0_#17131f]">
                4,9 ★
              </div>
              <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="display-title block text-[8rem] leading-none text-violet/20 md:text-[11rem]">И</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="site-container">
          <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow">Соберите свой праздник</p>
              <h2 className="section-title max-w-4xl">Одна команда — десятки сценариев</h2>
            </div>
            <Link className="arrow-link" href="/programs">
              Все направления <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {directions.map(({ icon: Icon, title, text, color, href }, index) => (
              <Link
                key={title}
                href={href}
                className={`${color} group min-h-[330px] rounded-[2rem] border-2 border-ink p-6 shadow-[6px_6px_0_#17131f] transition-transform hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-current/80 bg-white/20">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="text-sm font-black opacity-60">0{index + 1}</span>
                </div>
                <h3 className="mt-16 text-3xl font-black leading-[1.02] tracking-tight">{title}</h3>
                <p className="mt-4 font-semibold leading-relaxed opacity-85">{text}</p>
                <ArrowRight className="mt-6 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-ink bg-ink text-white">
        <div className="site-container grid grid-cols-2 md:grid-cols-4">
          {[
            ["1 800+", "праздников провели"],
            ["46", "артистов в команде"],
            ["4,9", "рейтинг родителей"],
            ["12", "лет создаём вау"],
          ].map(([number, label], index) => (
            <div className={`px-4 py-9 text-center md:py-12 ${index % 2 ? "border-l border-white/20" : ""} ${index > 1 ? "border-t border-white/20 md:border-t-0" : ""}`} key={label}>
              <p className="display-title text-4xl text-sun md:text-6xl">{number}</p>
              <p className="mt-2 text-sm font-bold text-white/65 md:text-base">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f1eaff] py-20 md:py-28">
        <div className="site-container">
          <p className="eyebrow">Популярные форматы</p>
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="section-title">Каждый праздник — отдельная история</h2>
            <p className="max-w-xl text-lg font-semibold leading-relaxed text-[#625c6c] lg:justify-self-end">
              Начните с готового формата, а мы настроим его под возраст, характер ребёнка и состав гостей.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[2.25rem] border-2 border-ink bg-white shadow-[7px_7px_0_#17131f]">
              <div className="relative aspect-[4/3] border-b-2 border-ink">
                <Image src={assetPath("/images/science.png")} alt="Дети наблюдают за научным экспериментом" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                <span className="absolute left-5 top-5 rounded-full border-2 border-ink bg-sun px-4 py-2 text-sm font-black">6–12 лет</span>
              </div>
              <div className="p-7 md:p-9">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-4xl font-black tracking-tight">Научный бум</h3>
                    <p className="mt-3 max-w-md font-medium leading-relaxed text-[#625c6c]">Эксперименты, холодный пар и настоящее мороженое — дети внутри действия.</p>
                  </div>
                  <p className="text-2xl font-black text-violet">от 21 900 ₽</p>
                </div>
                <Link className="arrow-link mt-7" href="/programs">Подробнее <ArrowRight className="h-5 w-5" /></Link>
              </div>
            </article>
            <article className="overflow-hidden rounded-[2.25rem] border-2 border-ink bg-white shadow-[7px_7px_0_#17131f]">
              <div className="relative aspect-[4/3] border-b-2 border-ink">
                <Image src={assetPath("/images/pastel.png")} alt="Дети танцуют среди воздушных шаров" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                <span className="absolute left-5 top-5 rounded-full border-2 border-ink bg-coral px-4 py-2 text-sm font-black">7–14 лет</span>
              </div>
              <div className="p-7 md:p-9">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-4xl font-black tracking-tight">Танцы и конфетти</h3>
                    <p className="mt-3 max-w-md font-medium leading-relaxed text-[#625c6c]">Челленджи, DJ, свет и финал, который хочется пересматривать на видео.</p>
                  </div>
                  <p className="text-2xl font-black text-violet">от 29 900 ₽</p>
                </div>
                <Link className="arrow-link mt-7" href="/programs">Подробнее <ArrowRight className="h-5 w-5" /></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="eyebrow">Как мы работаем</p>
              <h2 className="section-title">Спокойно и по плану</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["01", "Узнаём ребёнка", "Возраст, характер, любимые темы, гости и место праздника."],
                ["02", "Предлагаем 3 идеи", "Показываем сценарии и честную смету в течение одного дня."],
                ["03", "Готовим всё", "Подтверждаем команду, реквизит и подробный тайминг события."],
                ["04", "Вы отдыхаете", "Координатор встречает команду и решает вопросы на площадке."],
              ].map(([number, title, text], index) => (
                <article className={`min-h-[260px] rounded-[1.75rem] border-2 border-ink p-6 ${index === 0 ? "bg-sun" : index === 1 ? "bg-coral" : index === 2 ? "bg-[#c7b4ff]" : "bg-lime"}`} key={number}>
                  <p className="display-title text-5xl text-violet">{number}</p>
                  <h3 className="mt-10 text-2xl font-black">{title}</h3>
                  <p className="mt-3 font-semibold leading-relaxed opacity-70">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-ink bg-coral py-16 md:py-24">
        <div className="site-container grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <blockquote>
            <p className="display-title text-[clamp(3rem,7vw,6.5rem)] leading-[0.87] tracking-[-0.06em]">«Дети забыли про телефоны. Это лучший отзыв!»</p>
            <footer className="mt-6 text-lg font-black">— Марина, мама Сони, 9 лет</footer>
          </blockquote>
          <div className="rounded-[2rem] border-2 border-ink bg-white p-7 shadow-[6px_6px_0_#17131f]">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-violet">Хотите так же?</p>
            <h2 className="mt-3 text-3xl font-black leading-tight">Получите три сценария под вашего ребёнка</h2>
            <Link className="btn-primary mt-6 w-full" href="/contacts">Обсудить праздник <ArrowRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
