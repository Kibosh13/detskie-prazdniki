import type { Metadata } from "next";
import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";

export const metadata: Metadata = {
  title: "Контакты и заявка",
  description: "Обсудить детский праздник с командой Фантастик Шоу и получить подборку программ.",
};

export default function ContactsPage() {
  return (
    <main className="pastel-watercolor">
      <section className="border-b border-ink/15">
        <div className="site-container grid gap-10 py-14 lg:grid-cols-[0.78fr_1.22fr] lg:py-20">
          <div>
            <p className="eyebrow">Давайте знакомиться</p>
            <h1 className="display-title text-[clamp(3.4rem,8vw,7rem)] leading-[0.95] tracking-[-0.055em]"><span className="brand-blue">Расскажите</span><br /><span className="brand-red">о празднике</span></h1>
            <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed md:text-xl">
              Ответим, зададим несколько уточнений и предложим три варианта программы с предварительной сметой.
            </p>
            <div className="mt-10 grid gap-4">
              <a className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-white p-4 font-black" href="tel:+79259245573">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-sun"><Phone className="h-5 w-5" /></span>
                8 (925) 924-55-73
              </a>
              <div className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-white p-4 font-black">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-lime"><Clock3 className="h-5 w-5" /></span>
                Ежедневно, 09:00–21:00
              </div>
              <div className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-white p-4 font-black">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#ddd4ef]"><MapPin className="h-5 w-5" /></span>
                Москва и Московская область
              </div>
            </div>
            <p className="mt-6 flex items-center gap-2 font-bold text-violet"><MessageCircle className="h-5 w-5" /> Обычно отвечаем в течение 15 минут</p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
