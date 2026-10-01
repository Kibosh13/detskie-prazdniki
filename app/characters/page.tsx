import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { assetPath } from "@/lib/site-paths";

export const metadata: Metadata = {
  title: "Персонажи",
  description: "Персонажи и ведущие для детских праздников Фантастик Шоу.",
};

const characters = [
  { title: "Капитан Америка", tag: "Супергерой", image: "/images/characters/captain.jpg", color: "bg-[#128fd0] text-white" },
  { title: "Чебурашка", tag: "Добрый герой", image: "/images/characters/cheburashka.jpg", color: "bg-[#f47a31] text-white" },
  { title: "Тигра", tag: "Ростовой персонаж", image: "/images/characters/tigger.jpg", color: "bg-[#ffcf3f] text-[#253252]" },
  { title: "Человек-паук", tag: "Супергерой", image: "/images/characters/spiderman.jpg", color: "bg-[#ea3454] text-white" },
  { title: "Маша и Медведь", tag: "Парная программа", image: "/images/characters/masha-bear.jpg", color: "bg-[#ff8fa3] text-[#253252]" },
  { title: "Бамблби", tag: "Трансформер", image: "/images/characters/bumblebee.jpg", color: "bg-[#ffcf3f] text-[#253252]" },
  { title: "Миньоны", tag: "Парная программа", image: "/images/characters/minions.jpg", color: "bg-[#128fd0] text-white" },
  { title: "Аладдин и Жасмин", tag: "Сказочная пара", image: "/images/characters/aladdin-jasmine.jpg", color: "bg-[#35a64b] text-white" },
  { title: "Minecraft", tag: "Игровой мир", image: "/images/characters/minecraft.jpg", color: "bg-[#74d45d] text-[#253252]" },
  { title: "Леди Баг и Супер-Кот", tag: "Парная программа", image: "/images/characters/ladybug-catnoir.jpg", color: "bg-[#ea3454] text-white" },
  { title: "Соник", tag: "Быстрый герой", image: "/images/characters/sonic.jpg", color: "bg-[#128fd0] text-white" },
  { title: "Пикачу", tag: "Любимый герой", image: "/images/characters/pikachu.jpg", color: "bg-[#ffcf3f] text-[#253252]" },
];

export default function CharactersPage() {
  return (
    <main>
      <section className="pastel-watercolor overflow-hidden border-b border-ink/15">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:py-20">
          <div>
            <p className="eyebrow">Наши герои</p>
            <h1 className="display-title text-[clamp(3.4rem,8vw,7.2rem)] leading-[0.92] tracking-[-0.055em]">
              <span className="brand-blue">Встречайте</span><br />
              <span className="brand-red">вживую!</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-semibold leading-relaxed md:text-xl">
              Яркие костюмы, живые актёры и любимые персонажи — подберём героя под возраст, интересы ребёнка и формат праздника.
            </p>
            <Link className="btn-primary mt-8" href="/contacts">Подобрать героя</Link>
          </div>

          <div className="relative grid min-h-[500px] grid-cols-2 gap-4 rounded-[2.75rem] bg-white/70 p-4 shadow-[0_24px_60px_rgba(37,50,82,0.14)] backdrop-blur-sm">
            <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-[#f5efff]">
              <Image src={assetPath("/images/characters/masha-bear.jpg")} alt="Маша и Медведь" fill priority sizes="(max-width:1024px) 50vw, 28vw" className="object-cover object-top" />
            </div>
            <div className="relative mb-10 overflow-hidden rounded-[2rem] bg-[#effbff]">
              <Image src={assetPath("/images/characters/ladybug-catnoir.jpg")} alt="Леди Баг и Супер-Кот" fill priority sizes="(max-width:1024px) 50vw, 28vw" className="object-cover object-top" />
            </div>
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] flex-col items-center justify-center rounded-full border-4 border-white bg-[#ffcf3f] text-center shadow-[0_10px_24px_rgba(37,50,82,0.2)]">
              <span className="display-title text-4xl leading-none text-[#ea3454]">49</span>
              <span className="text-xs font-black uppercase leading-tight">образов<br />на выбор</span>
            </div>
          </div>
        </div>
      </section>

      <section className="party-surface bg-white py-16 md:py-24">
        <div className="site-container">
          <div className="max-w-5xl">
            <p className="eyebrow">Популярные персонажи</p>
            <h2 className="section-title"><span className="brand-blue">Кого позовём</span> <span className="brand-red">на праздник?</span></h2>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-[#5d6680]">Показываем часть коллекции костюмов. Если нужного героя здесь нет — спросите менеджера, скорее всего он уже есть у нас.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {characters.map((character) => (
              <article className="party-card group overflow-hidden rounded-[2.25rem] border-2 bg-white transition-transform hover:-translate-y-1" key={character.title}>
                <div className="relative aspect-[4/5] overflow-hidden bg-[#f6f1ff]">
                  <Image src={assetPath(character.image)} alt={`${character.title} — персонаж Фантастик Шоу`} fill sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 33vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                  <span className={`${character.color} absolute left-4 top-4 rounded-full px-4 py-2 text-sm font-black shadow-md`}>{character.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-comfortaa)] text-2xl font-bold leading-tight">{character.title}</h3>
                  <Link className="mt-5 inline-flex rounded-full bg-[#eef8ff] px-4 py-2 font-black text-[#128fd0] transition-colors hover:bg-[#128fd0] hover:text-white" href={`/contacts?character=${encodeURIComponent(character.title)}`}>
                    Пригласить героя
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#128fd0] py-16 text-white md:py-20">
        <div className="site-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="mb-4 flex gap-2 text-[#ffcf3f]"><Sparkles /><Sparkles /><Sparkles /></div>
            <h2 className="max-w-4xl font-[family-name:var(--font-comfortaa)] text-4xl font-bold leading-tight md:text-6xl">Не нашли любимого героя?</h2>
            <p className="mt-4 max-w-2xl text-lg font-bold text-white/85">Напишите нам — покажем остальные костюмы и предложим программу под интересы ребёнка.</p>
          </div>
          <Link className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-white bg-[#ffcf3f] px-7 font-black text-[#253252] shadow-[4px_4px_0_#ffffff]" href="/contacts">Попросить подборку</Link>
        </div>
      </section>
    </main>
  );
}
