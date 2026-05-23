import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Brush,
  Clock3,
  FileText,
  Instagram,
  LayoutGrid,
  Phone,
  Printer,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Brush className="h-5 w-5" />,
    title: "Графічний дизайн",
    text: "Логотипи, візитки, флаєри, банери, меню, прайси та оформлення соцмереж.",
  },
  {
    icon: <Printer className="h-5 w-5" />,
    title: "Друк під ключ",
    text: "Підготовка макета, друк, перевірка якості та готовий результат без зайвих клопотів.",
  },
  {
    icon: <LayoutGrid className="h-5 w-5" />,
    title: "Макети для бізнесу",
    text: "Упаковка, постери, сертифікати, тейбл-тенти, зовнішня реклама та POS-матеріали.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Instagram-дизайн",
    text: "Креативи для реклами, пости, сторіс, обкладинки та візуальна система сторінки.",
  },
];

const benefits = [
  "Сучасний стиль, який виглядає дорого",
  "Швидка комунікація і зрозумілий процес",
  "Макет + друк в одному місці",
  "Акуратна подача для українського ринку",
];

const workflow = [
  {
    step: "01",
    title: "Обговорення",
    text: "Пишете, що потрібно: тип реклами, формат, стиль і терміни.",
  },
  {
    step: "02",
    title: "Дизайн",
    text: "Готуємо концепцію та макет у фірмовому стилі Materiya Print.",
  },
  {
    step: "03",
    title: "Друк",
    text: "Після затвердження запускаємо якісний друк без втрати деталей.",
  },
  {
    step: "04",
    title: "Результат",
    text: "Ви отримуєте готовий матеріал, який можна одразу використовувати.",
  },
];

const portfolio = [
  {
    title: "Візитки",
    subtitle: "Мінімалістичні та преміальні",
    badge: "Популярно в Україні",
  },
  {
    title: "Флаєри",
    subtitle: "Для акцій, відкриттів і подій",
    badge: "Швидкий продаж",
  },
  {
    title: "Instagram Ads",
    subtitle: "Пости, сторіс, креативи",
    badge: "Для реклами",
  },
];

export default function MateriyaPrintLanding() {
  return (
    <div className="min-h-screen bg-[#07070a] text-white selection:bg-fuchsia-500/30 selection:text-white">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,196,0,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(251,0,255,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,191,255,0.12),transparent_30%)]" />
        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/30 backdrop-blur">
              <span className="bg-gradient-to-r from-[#ffb000] via-[#ff4fd8] to-[#31c8ff] bg-clip-text text-lg font-black text-transparent">
                MP
              </span>
            </div>
            <div>
              <div className="text-sm tracking-[0.35em] text-white/60">MATERIYA PRINT</div>
              <div className="text-xs text-white/40">Дизайн • Друк • Реклама</div>
            </div>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10 md:inline-flex"
          >
            Зв'язатися
          </a>
        </header>

        <main className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-8 md:pb-24 md:pt-12">
          <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                <Star className="h-4 w-4 text-[#ffcf4a]" />
                Стильна подача для бізнесу в Україні
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                <span className="block text-white">ДИЗАЙН,</span>
                <span className="block bg-gradient-to-r from-[#ffb000] via-[#ff4fd8] to-[#31c8ff] bg-clip-text text-transparent">
                  ЯКИЙ ПРАЦЮЄ
                </span>
                <span className="block text-white/90">НА ВАШ БІЗНЕС</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
                Materiya Print створює рекламні макети, фірмовий стиль і друковану
                продукцію, яка виглядає сучасно, зрозуміло та переконливо.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button className="group h-14 rounded-full bg-gradient-to-r from-[#ffb000] via-[#ff4fd8] to-[#31c8ff] px-6 text-base font-semibold text-black hover:opacity-95">
                  Замовити дизайн
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="h-14 rounded-full border-white/15 bg-white/5 px-6 text-base text-white/90 hover:bg-white/10"
                >
                  Дивитись послуги
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["Швидко", "Підготовка без затримок"],
                  ["Якісно", "Преміальна подача"],
                  ["Під ключ", "Дизайн + друк"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <div className="text-lg font-semibold">{title}</div>
                    <div className="mt-1 text-sm text-white/60">{text}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="relative"
            >
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-[#ff4fd8]/20 blur-3xl" />
              <div className="absolute -right-6 bottom-12 h-48 w-48 rounded-full bg-[#31c8ff]/20 blur-3xl" />
              <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-white/5 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <CardContent className="p-5 md:p-6">
                  <div className="rounded-[1.6rem] border border-white/10 bg-[#0c0c11] p-4 md:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-[0.4em] text-white/40">
                          Instagram preview
                        </div>
                        <div className="mt-2 text-2xl font-black">
                          Materiya Print
                        </div>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                        Популярний стиль
                      </div>
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(160deg,rgba(255,176,0,0.18),rgba(255,79,216,0.15),rgba(49,200,255,0.16))] p-5">
                        <div className="text-sm text-white/75">Дизайн + друк</div>
                        <div className="mt-3 max-w-40 text-3xl font-black leading-tight">
                          Візитки, флаєри, банери
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
                          <BadgeCheck className="h-4 w-4 text-[#ffcf4a]" />
                          Готово до запуску в рекламу
                        </div>
                      </div>
                      <div className="grid gap-3">
                        {[
                          "Для кав'ярень",
                          "Для салонів",
                          "Для магазинів",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/75"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {[
                        ["25+", "типів макетів"],
                        ["1", "єдиний стиль"],
                        ["100%", "подача під бренд"],
                      ].map(([a, b]) => (
                        <div key={a} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                          <div className="text-2xl font-black">{a}</div>
                          <div className="text-xs uppercase tracking-[0.2em] text-white/45">{b}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </section>
        </main>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-[0.35em] text-white/40">Послуги</div>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Що ми робимо</h2>
          </div>
          <div className="hidden text-sm text-white/55 md:block">
            Дизайн, який виглядає актуально для української аудиторії
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => (
            <Card key={i} className="rounded-[1.5rem] border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
              <CardContent className="p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffb000]/20 via-[#ff4fd8]/15 to-[#31c8ff]/20 text-[#ffcf4a]">
                  {service.icon}
                </div>
                <div className="mt-4 text-xl font-bold">{service.title}</div>
                <p className="mt-2 text-sm leading-7 text-white/65">{service.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white/[0.03] py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-white/40">Переваги</div>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">Чому це працює</h2>
              <p className="mt-4 max-w-xl text-white/65 leading-8">
                Для малого бізнесу в Україні важливі не лише красиві картинки, а
                зрозуміла комунікація, впізнаваність і швидкий шлях до готового
                матеріалу.
              </p>

              <div className="mt-6 space-y-3">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Zap className="mt-0.5 h-4 w-4 text-[#ffcf4a]" />
                    <div className="text-white/80">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {portfolio.map((item, idx) => (
                <Card key={idx} className="overflow-hidden rounded-[1.5rem] border-white/10 bg-[#0d0d12]">
                  <CardContent className="p-0">
                    <div className="flex min-h-[360px] flex-col justify-between bg-[radial-gradient(circle_at_top,rgba(255,176,0,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-5">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/45">
                        <span>{item.badge}</span>
                        <LayoutGrid className="h-4 w-4 text-[#ffcf4a]" />
                      </div>
                      <div>
                        <div className="text-2xl font-black">{item.title}</div>
                        <p className="mt-2 text-sm leading-7 text-white/65">{item.subtitle}</p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                        <div className="h-36 rounded-2xl bg-[linear-gradient(135deg,rgba(255,176,0,0.18),rgba(255,79,216,0.16),rgba(49,200,255,0.14))]" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-8">
          <div className="text-sm uppercase tracking-[0.35em] text-white/40">Як ми працюємо</div>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">Простий процес без хаосу</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {workflow.map((item) => (
            <Card key={item.step} className="rounded-[1.5rem] border-white/10 bg-white/5 backdrop-blur">
              <CardContent className="p-5">
                <div className="text-sm font-semibold tracking-[0.35em] text-white/35">{item.step}</div>
                <div className="mt-3 text-xl font-bold">{item.title}</div>
                <p className="mt-2 text-sm leading-7 text-white/65">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.35em] text-white/40">Контакти</div>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">Готові зробити ваш бренд помітним</h2>
              <p className="mt-4 max-w-2xl text-white/65 leading-8">
                Напишіть у дірект або залиште заявку. Підберемо стиль, запропонуємо
                рішення та підготуємо дизайн під друк.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://instagram.com"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:opacity-95"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram / Direct
                </a>
                <a
                  href="tel:+380000000000"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  +38 (000) 000 00 00
                </a>
              </div>
            </div>

            <Card className="rounded-[1.8rem] border-white/10 bg-[#0c0c11] shadow-2xl shadow-black/30">
              <CardContent className="p-6">
                <div className="rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-[#ffb000]/15 via-[#ff4fd8]/12 to-[#31c8ff]/12 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/40">
                      <FileText className="h-5 w-5 text-[#ffcf4a]" />
                    </div>
                    <div>
                      <div className="text-lg font-bold">Materiya Print</div>
                      <div className="text-sm text-white/60">Дизайн • Друк • Реклама</div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 text-sm text-white/75">
                    <div className="flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-[#ffcf4a]" />
                      Швидка відповідь у робочий час
                    </div>
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="h-4 w-4 text-[#ffcf4a]" />
                      Макет і друк під ключ
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#ffcf4a]" />
                      Сучасний стиль для Instagram та бізнесу
                    </div>
                  </div>

                  <Button className="mt-6 h-12 w-full rounded-full bg-white text-black hover:bg-white/90">
                    Замовити консультацію
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-6 text-center text-sm text-white/45 md:px-8">
        © 2026 Materiya Print — Дизайн, який працює на ваш бізнес
      </footer>
    </div>
  );
}
