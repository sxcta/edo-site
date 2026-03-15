"use client";


import { motion } from "framer-motion";
import { useState } from "react";



export default function EdoLanding() {
  const [form, setForm] = useState({ name: "", phone: "", company: "" });
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = `Новая заявка с сайта:%0AИмя: ${form.name}%0AТелефон: ${form.phone}%0AКомпания: ${form.company}`;

    // ВСТАВЬ СЮДА СВОЙ TELEGRAM BOT TOKEN И CHAT ID
    const botToken = "8613525145:AAE3xvFX3qpn6gNMQ3SqQw0G-yxO5xP5PWE";
    const chatId = "814769878";

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`);
      setSent(true);
      setForm({ name: "", phone: "", company: "" });
    } catch (err) {
      alert("Ошибка отправки. Попробуйте ещё раз.");
    }
  }
  return (
    <>
      
    <div className="min-h-screen text-neutral-900 bg-gradient-to-b from-[#faf9f5] via-[#f3efe7] to-[#faf9f5]">

      {/* HEADER */}
      <header className="max-w-6xl mx-auto flex items-center justify-between p-6">
        <div className="font-semibold text-lg">Центр Внедрения</div>
        <nav className="flex gap-6 text-sm">
          <a href="#service">Услуга</a>
          <a href="#benefits">Преимущества</a>
          <a href="#steps">Этапы</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative h-[620px] flex items-center justify-center text-center overflow-hidden">

        <img
          src="/bg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl px-6 text-white">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-semibold leading-tight"
          >
            Настройка и внедрение
            <br /> электронного документооборота
          </motion.h1>

          <p className="mt-6 text-lg text-neutral-200 max-w-2xl mx-auto">
            Помогаем компаниям автоматизировать бизнес‑процессы,
            внедрить ЭДО и ускорить работу с документами.
          </p>

          <a href="#contact">
            <button className="mt-8 bg-white text-black px-8 py-4 rounded-xl font-medium">
              Получить консультацию
            </button>
          </a>

        </div>
      </section>


      {/* SERVICE DESCRIPTION */}
      <section id="service" className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-3xl font-semibold leading-tight">
              Что такое внедрение ЭДО
            </h2>

            <p className="mt-6 text-neutral-600">
              Электронный документооборот позволяет компаниям обмениваться
              юридически значимыми документами в цифровом формате. Это
              ускоряет работу с договорами, актами и счетами‑фактурами и
              избавляет от бумажных архивов.
            </p>

            <p className="mt-4 text-neutral-600">
              Мы выполняем полный цикл внедрения: подключаем операторов ЭДО,
              настраиваем обмен документами, интегрируем систему с 1С и
              обучаем сотрудников.
            </p>
          </div>

          <div className="rounded-3xl bg-neutral-100 p-10">
            После внедрения документы отправляются, подписываются
            и хранятся в электронном виде. Это значительно ускоряет
            работу компании.
          </div>

        </div>

      </section>


      {/* BENEFITS */}
      <section id="benefits" className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-semibold text-center">
          Почему компании переходят на ЭДО
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Быстрый обмен документами</h3>
            <p className="mt-2 text-neutral-600">
              Документы отправляются и подписываются онлайн за секунды.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Снижение расходов</h3>
            <p className="mt-2 text-neutral-600">
              Нет затрат на печать, доставку и хранение документов.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Юридическая значимость</h3>
            <p className="mt-2 text-neutral-600">
              Документы подписываются электронной подписью.
            </p>
          </div>

        </div>

      </section>


      

      {/* OPERATORS */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-semibold text-center">
          Работаем с операторами ЭДО
        </h2>

        <p className="text-center text-neutral-600 mt-4">
          Подключаем и настраиваем популярных операторов электронного документооборота
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Контур.Диадок</h3>
            <p className="mt-2 text-neutral-600">
              Подключение и настройка обмена документами через Диадок
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Контур</h3>
            <p className="mt-2 text-neutral-600">
              Интеграция сервисов Контур с вашей системой учета
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold">СБИС</h3>
            <p className="mt-2 text-neutral-600">
              Настройка ЭДО и обмена документами через СБИС
            </p>
          </div>

        </div>

      </section>


      {/* STEPS */}
      <section id="steps" className="bg-neutral-100 py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold text-center">
            Как проходит внедрение
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">

            {[
              "Анализ текущих процессов",
              "Подключение оператора ЭДО",
              "Интеграция с 1С",
              "Обучение сотрудников",
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-sm text-neutral-500">Шаг {i + 1}</div>
                <div className="mt-2 font-medium">{step}</div>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="py-28 px-6">

        <div className="max-w-xl mx-auto text-center">

          <h2 className="text-4xl font-semibold">
            Оставьте заявку
          </h2>

          <p className="text-neutral-600 mt-3">
            Мы свяжемся с вами и расскажем о внедрении ЭДО
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-4">

            <input
              className="w-full p-4 rounded-xl border"
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <input
              className="w-full p-4 rounded-xl border"
              placeholder="Телефон"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />

            <input
              className="w-full p-4 rounded-xl border"
              placeholder="Компания"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />

            <button type="submit" className="w-full bg-black text-white py-4 rounded-xl">
              Отправить заявку
            </button>

            {sent && (
              <p className="text-green-600 text-sm">Заявка отправлена! Мы скоро свяжемся с вами.</p>
            )}

          </form>

        </div>

      </section>


      

      {/* SEO TEXT */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-neutral-700">

        <h2 className="text-3xl font-semibold">
          Внедрение электронного документооборота
        </h2>

        <p className="mt-6">
          Электронный документооборот (ЭДО) позволяет компаниям обмениваться
          юридически значимыми документами через интернет. Это ускоряет
          бизнес‑процессы, снижает расходы на бумагу и повышает прозрачность
          работы компании.
        </p>

        <p className="mt-4">
          Центр Внедрения помогает компаниям подключить операторов ЭДО
          (Диадок, Контур, СБИС), настроить обмен документами и интегрировать
          систему с 1С и другими учетными системами.
        </p>

        <p className="mt-4">
          Мы выполняем полный цикл внедрения: анализ бизнес процессов,
          подключение оператора ЭДО, настройку интеграций и обучение
          сотрудников работе с электронными документами.
        </p>

      </section>


      

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/79999999999"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        WhatsApp
      </a>

      {/* CALL BUTTON */}
      <a
        href="tel:+79999999999"
        className="fixed bottom-20 right-6 bg-black text-white px-5 py-3 rounded-full shadow-lg hover:bg-neutral-800 transition"
      >
        Позвонить
      </a>


      {/* FOOTER */}
      <footer className="text-center text-sm text-neutral-500 pb-10 pt-10">
        © 2026 Центр Внедрения
      </footer>

    </div>
        </>
  );
}
