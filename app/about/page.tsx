import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "О студии",
  description: "Как команда Фантастик Шоу создаёт детские праздники и отвечает за безопасность, тайминг и эмоции.",
};

const values = [
  [HeartHandshake, "Слышать ребёнка", "Учитываем темперамент и интересы, не заставляем участвовать и бережно вовлекаем в игру."],
  [ShieldCheck, "Безопасность", "Проверяем реквизит, используем сертифицированные материалы и заранее изучаем площадку."],
  [BookOpenCheck, "Сильная подготовка", "У каждого праздника есть сценарий, тайминг, чек-лист и запасной план на случай перемен."],
];

const steps = [
  ["01", "Знакомимся", "Узнаём возраст, интересы, состав гостей, площадку и ваши пожелания."],
  ["02", "Предлагаем идеи", "В течение дня присылаем три сценария и понятную предварительную смету."],
  ["03", "Готовим", "Фиксируем программу, команду и тайминг. Координатор держит всё на контроле."],
  ["04", "Празднуем", "Приезжаем заранее, проводим событие и берём все организационные вопросы на себя."],
];

export default function AboutPage() {
  return (
    <main>
      <section className="pastel-watercolor border-b border-ink/15">
        <div className="site-container py-16 md:py-24">
          <div className="max-w-6xl">
            <p className="eyebrow">О студии</p>
            <h1 className="display-title text-[clamp(4rem,11vw,9rem)] leading-[0.8] tracking-[-0.07em]">
              За ярким праздником — точная работа
            </h1>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[["12", "лет создаём события"], ["1 800+", "проведённых праздников"], ["46", "артистов и ведущих"]].map(([number, label]) => (
              <div className="rounded-[2rem] border-2 border-ink bg-white p-7 shadow-[5px_5px_0_#17131f]" key={label}>
                <p className="display-title text-6xl text-violet md:text-7xl">{number}</p>
                <p className="mt-2 text-lg font-black">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Наш подход</p>
            <h2 className="section-title">Детям весело. Родителям спокойно.</h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-[#625c6c]">
              Фантастик Шоу — это режиссёры, ведущие, декораторы и координаторы в одной команде. Мы соединяем игровую драматургию с понятной организацией, чтобы праздник ощущался лёгким для семьи.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map(([Icon, title, text], index) => (
              <article className={`rounded-[2rem] border-2 border-ink p-6 ${index === 0 ? "bg-coral" : index === 1 ? "bg-[#ddd4ef]" : "bg-lime"}`} key={title as string}>
                <Icon className="h-10 w-10" />
                <h3 className="mt-14 text-2xl font-black">{title as string}</h3>
                <p className="mt-3 font-semibold leading-relaxed opacity-75">{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/15 bg-[#6c5796] py-16 text-white md:py-24">
        <div className="site-container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.15em] text-sun">Как всё происходит</p>
              <h2 className="section-title max-w-4xl">От первого сообщения до «ещё!»</h2>
            </div>
            <Users className="hidden h-20 w-20 text-sun md:block" strokeWidth={1.4} />
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map(([number, title, text]) => (
              <article className="rounded-[1.75rem] border-2 border-white/70 bg-white/10 p-6" key={number}>
                <p className="display-title text-5xl text-sun">{number}</p>
                <h3 className="mt-10 text-2xl font-black">{title}</h3>
                <p className="mt-3 font-medium leading-relaxed text-white/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="site-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="mb-5 flex gap-2 text-violet"><Sparkles /><Sparkles /><Sparkles /></div>
            <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">Сначала понять, каким должен быть день. Потом — сделать его лучше ожиданий.</h2>
          </div>
          <Link className="btn-primary" href="/contacts">Познакомиться с нами <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
    </main>
  );
}
