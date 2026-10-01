"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";

export function InquiryForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="grid min-h-[570px] place-items-center rounded-[2.5rem] border-2 border-ink bg-lime p-8 text-center shadow-[8px_8px_0_#17131f]">
        <div>
          <CheckCircle2 className="mx-auto h-20 w-20" strokeWidth={1.5} />
          <h2 className="mt-6 text-4xl font-black tracking-tight">Заявка принята</h2>
          <p className="mx-auto mt-4 max-w-md text-lg font-semibold leading-relaxed">Спасибо! Менеджер свяжется с вами и уточнит детали праздника.</p>
          <button className="mt-8 border-b-2 border-ink pb-1 font-black" onClick={() => setSent(false)} type="button">Отправить ещё одну</button>
        </div>
      </div>
    );
  }

  return (
    <form
      className="rounded-[2.5rem] border-2 border-ink bg-white p-6 shadow-[8px_8px_0_#17131f] md:p-10"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">Получить подборку программ</h2>
      <p className="mt-3 font-medium text-[#625c6c]">Оставьте контакты и коротко расскажите о событии.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 font-bold">
          Ваше имя
          <Input className="h-13 rounded-xl border-2 border-ink bg-cream px-4 text-base focus-visible:ring-violet/30" name="name" placeholder="Анна" required />
        </label>
        <label className="grid gap-2 font-bold">
          Телефон
          <Input className="h-13 rounded-xl border-2 border-ink bg-cream px-4 text-base focus-visible:ring-violet/30" name="phone" placeholder="+7 999 123-45-67" required type="tel" />
        </label>
        <label className="grid gap-2 font-bold">
          Возраст ребёнка
          <NativeSelect className="h-13 rounded-xl border-2 border-ink bg-cream px-4 text-base" defaultValue="" name="age" required>
            <NativeSelectOption disabled value="">Выберите возраст</NativeSelectOption>
            <NativeSelectOption value="3-5">3–5 лет</NativeSelectOption>
            <NativeSelectOption value="6-8">6–8 лет</NativeSelectOption>
            <NativeSelectOption value="9-11">9–11 лет</NativeSelectOption>
            <NativeSelectOption value="12-14">12–14 лет</NativeSelectOption>
          </NativeSelect>
        </label>
        <label className="grid gap-2 font-bold">
          Дата праздника
          <Input className="h-13 rounded-xl border-2 border-ink bg-cream px-4 text-base focus-visible:ring-violet/30" name="date" type="date" />
        </label>
      </div>
      <label className="mt-5 grid gap-2 font-bold">
        Что уже известно?
        <Textarea className="min-h-32 rounded-xl border-2 border-ink bg-cream p-4 text-base focus-visible:ring-violet/30" name="details" placeholder="Количество гостей, любимые темы, площадка, пожелания…" />
      </label>
      <label className="mt-5 flex items-start gap-3 text-sm font-medium text-[#625c6c]">
        <input className="mt-0.5 h-5 w-5 accent-[#5b2bd0]" required type="checkbox" />
        Согласен на обработку данных для связи по заявке
      </label>
      <Button className="mt-7 h-14 w-full rounded-full border-2 border-ink bg-[#ea3454] text-base font-black text-white shadow-[4px_4px_0_#253252] hover:bg-[#d72748]" type="submit">
        Отправить заявку <Send className="h-5 w-5" />
      </Button>
      <p className="mt-4 text-center text-xs text-[#7b7482]">Демонстрационная форма — отправка подключается к CRM заказчика.</p>
    </form>
  );
}
