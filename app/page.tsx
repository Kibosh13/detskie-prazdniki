import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/site-paths";
import {
  ArrowRight,
  Atom,
  CakeSlice,
  Check,
  PartyPopper,
  Play,
  WandSparkles,
} from "lucide-react";

const directions = [
  {
    icon: PartyPopper,
    title: "Праздник под ключ",
    text: "Сценарий, команда, реквизит и координация — всё берём на себя.",
    color: "bg-[#7660a9] text-white",
    href: "/programs",
  },
  {
    icon: WandSparkles,
    title: "Любимый герой",
    text: "Авторские образы и артисты, которые умеют быть с детьми на одной волне.",
    color: "bg-[#efc3c7] text-[#282331]",
    href: "/characters",
  },
  {
    icon: Atom,
    title: "Шоу и мастер-классы",
    text: "Наука, фокусы, слаймы и творческие форматы для разных возрастов.",
    color: "bg-[#f5e9bd] text-[#282331]",
    href: "/programs#shows",
  },
  {
    icon: CakeSlice,
    title: "Декор и сладкий стол",
    text: "Собираем пространство в единую историю — от фотозоны до торта.",
    color: "bg-[#dceccd] text-[#282331]",
    href: "/programs#extras",
  },
];

export default function Home() {
  return (
    <main>
      <section className="pastel-watercolor overflow-hidden border-b border-ink/15">
        <div className="site-container grid min-h-[540px] gap-10 py-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-center lg:py-14">
          <div className="relative z-10 max-w-[560px]">
            <h1 className="sr-only">Организация фантастических праздников в Москве и Московской области</h1>
            <p className="eyebrow mb-5">Почему нам доверяют</p>
            <div className="grid gap-3 text-base font-bold">
              {[
                "Реалистичные костюмы",
                "Профессиональные актёры",
                "Авторский сценарий с захватывающим сюжетом",
                "Более 15 фантастических шоу-программ на выбор",
              ].map((item) => (
                <span className="flex items-start gap-3 rounded-2xl bg-white/75 px-4 py-3 shadow-sm backdrop-blur-sm" key={item}>
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-violet text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="leading-snug">{item}</span>
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary group" href="/programs">
                Выбрать программу
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link className="btn-secondary" href="/contacts">Обсудить праздник</Link>
            </div>
          </div>

          <div id="video" className="relative aspect-[3/2] scroll-mt-28">
            <div className="absolute inset-4 rotate-2 rounded-[3rem] bg-[#dcd2ea]" />
            <div className="absolute inset-4 overflow-hidden rounded-[3rem] border border-ink/20 bg-[#f7f1ec] shadow-[0_24px_70px_rgba(64,48,82,0.16)]">
              <Image
                src={assetPath("/images/hero-wide.png")}
                alt="Фантастический праздник с ведущей и детьми"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain object-center saturate-[0.78] contrast-[0.96]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#352d42]/35 via-transparent to-white/10" />
              <div className="absolute bottom-3 left-3 right-3 flex flex-nowrap items-center justify-between gap-2 rounded-2xl bg-white/90 p-3 backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:gap-4 sm:rounded-[1.75rem] sm:p-5 md:p-6">
                <div className="min-w-0">
                  <p className="text-[0.6rem] font-black uppercase tracking-[0.15em] text-violet sm:text-xs">Фантастик Микс № 1</p>
                  <p className="mt-1 text-sm font-black leading-tight sm:text-xl md:text-2xl">Посмотрите, как проходит праздник</p>
                </div>
                <Link aria-label="Перейти к программам" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet text-white sm:h-14 sm:w-14" href="/programs">
                  <Play className="ml-0.5 h-4 w-4 fill-current sm:ml-1 sm:h-6 sm:w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 bg-white py-20 md:py-28">
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

      <section className="border-y border-ink/15 bg-[#342d3c] text-white">
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

      <section id="gallery" className="scroll-mt-28 bg-white py-20 md:py-28">
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

      <section className="pastel-watercolor py-20 md:py-28">
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
                <article className={`min-h-[260px] rounded-[1.75rem] border border-ink/20 p-6 shadow-sm ${index === 0 ? "bg-sun" : index === 1 ? "bg-coral" : index === 2 ? "bg-[#ddd4ef]" : "bg-lime"}`} key={number}>
                  <p className="display-title text-5xl text-violet">{number}</p>
                  <h3 className="mt-10 text-2xl font-black">{title}</h3>
                  <p className="mt-3 font-semibold leading-relaxed opacity-70">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-28 border-y border-ink/15 bg-coral py-16 md:py-24">
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
