import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/site-paths";
import {
  ArrowRight,
  Compass,
  FlaskConical,
  Gamepad2,
  IceCreamBowl,
  Rainbow,
  Telescope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Персонажи",
  description: "Авторские персонажи и ведущие для детских праздников Фантастик Шоу.",
};

const characters = [
  [Telescope, "Агент космолаборатории", "6–11 лет", "bg-violet text-white"],
  [Rainbow, "Хранительница радуги", "3–7 лет", "bg-coral"],
  [FlaskConical, "Профессор Бум", "6–12 лет", "bg-sun"],
  [Gamepad2, "Пиксель и Кнопка", "7–13 лет", "bg-lime"],
  [Compass, "Капитан Ветер", "4–9 лет", "bg-[#cce7ef]"],
  [IceCreamBowl, "Мастер сладостей", "5–10 лет", "bg-[#ead8ef]"],
];

export default function CharactersPage() {
  return (
    <main>
      <section className="pastel-watercolor overflow-hidden border-b border-ink/15">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
          <div>
            <p className="eyebrow">Наши герои</p>
            <h1 className="display-title text-[clamp(4rem,10vw,8.5rem)] leading-[0.8] tracking-[-0.07em]">
              Встречайте вживую
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-semibold leading-relaxed md:text-xl">
              Не копируем мультфильмы — создаём собственных ярких героев. Каждый артист проходит кастинг, обучение и знает, как увлечь даже застенчивого ребёнка.
            </p>
            <Link className="btn-primary mt-8" href="/contacts">
              Подобрать героя <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="relative min-h-[460px] overflow-hidden rounded-[2.5rem] border-2 border-ink shadow-[8px_8px_0_#17131f]">
            <Image src={assetPath("/images/pastel.png")} alt="Дети танцуют на ярком празднике" fill priority sizes="(max-width:1024px) 100vw, 52vw" className="object-cover" />
            <div className="absolute bottom-5 left-5 rotate-[-3deg] rounded-full border-2 border-ink bg-sun px-5 py-3 font-black shadow-[4px_4px_0_#17131f]">Живые эмоции, а не шаблон</div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="site-container">
          <div className="max-w-4xl">
            <p className="eyebrow">Авторские образы</p>
            <h2 className="section-title">Герой под характер ребёнка</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {characters.map(([Icon, title, age, color], index) => (
              <article className={`${color} group relative min-h-[430px] overflow-hidden rounded-[2rem] border-2 border-ink p-7 shadow-[6px_6px_0_#17131f]`} key={title as string}>
                <div className="flex items-start justify-between">
                  <span className="rounded-full border-2 border-current px-3 py-1 text-sm font-black">{age as string}</span>
                  <span className="text-sm font-black opacity-50">0{index + 1}</span>
                </div>
                <Icon className="absolute right-[-1rem] top-24 h-52 w-52 rotate-6 opacity-20 transition-transform group-hover:rotate-12 group-hover:scale-105" strokeWidth={1.1} />
                <div className="absolute inset-x-7 bottom-7">
                  <h3 className="max-w-[85%] text-4xl font-black leading-[0.98] tracking-tight">{title as string}</h3>
                  <Link className="mt-5 inline-flex items-center gap-2 border-b-2 border-current pb-1 font-black" href={`/contacts?character=${encodeURIComponent(title as string)}`}>
                    Пригласить <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pastel-watercolor border-y border-ink/15 py-16 md:py-24">
        <div className="site-container grid gap-8 lg:grid-cols-2 lg:items-center">
          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">Не нашли подходящий образ?</h2>
          <div>
            <p className="text-lg font-semibold leading-relaxed">Расскажите, чем увлекается ребёнок. Режиссёр предложит героя и сюжет, которые попадут точно в интерес.</p>
            <Link className="btn-primary mt-7" href="/contacts">Попросить идею <ArrowRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
