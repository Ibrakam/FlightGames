// @ts-nocheck
"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const navigation = [
  {
    title: "Продукт",
    links: [
      { name: "Концепция", href: "#" },
      { name: "Как работает", href: "#" },
      { name: "Преимущества", href: "#" },
      { name: "Наблюдатели", href: "#" },
    ],
  },
  {
    title: "Компания",
    links: [
      { name: "О нас", href: "#" },
      { name: "Контакты", href: "#" },
      { name: "Карьера", href: "#" },
      { name: "Пресс-центр", href: "#" },
    ],
  },
  {
    title: "Поддержка",
    links: [
      { name: "Помощь", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Обратная связь", href: "#" },
      { name: "Статус сервиса", href: "#" },
    ],
  },
  {
    title: "Правовая информация",
    links: [
      { name: "Политика конфиденциальности", href: "#" },
      { name: "Условия использования", href: "#" },
      { name: "Cookies", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

export const NewsletterFooter = () => {
  return (
    <section className="bg-[var(--color-light-blue)] py-12 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-5 md:px-6">
        {/* Logo and newsletter section */}
        <div className="mb-10 flex flex-col items-start justify-between gap-10 border-b border-[var(--color-slate-gray)]/20 pb-10 sm:mb-16 sm:pb-12 md:flex-row">
          <div className="w-full max-w-full sm:max-w-sm">
            <div className="mb-6 flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary-blue)] mr-3">
                <span className="text-[var(--color-cloud-white)] font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold text-[var(--color-dark-navy)] font-[var(--font-display)]">FlightGames</span>
            </div>
            <p className="mb-8 text-base text-[var(--color-slate-gray)]">
              Играйте в интерактивные игры во время полета вместе с другими пассажирами. Превратите каждый рейс в увлекательное приключение.
            </p>

            {/* Newsletter subscription */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-[var(--color-dark-navy)] mb-3 font-[var(--font-display)]">
                Подпишитесь на новости
              </h3>
              <div className="flex w-full max-w-full flex-col gap-3 sm:max-w-md sm:flex-row">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex h-12 flex-1 rounded-lg border border-[var(--color-slate-gray)]/30 bg-[var(--color-cloud-white)] px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-slate-gray)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:text-sm"
                />
                <button className="inline-flex h-12 items-center justify-center rounded-lg bg-[var(--color-primary-blue)] px-6 py-2 text-base font-medium whitespace-nowrap text-[var(--color-cloud-white)] ring-offset-background transition-colors hover:bg-[var(--color-sky-blue)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:px-4 sm:text-sm">
                  Подписаться
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="w-full border-t border-[var(--color-slate-gray)]/20 pt-8 sm:border-t-0 sm:pt-0">
            <nav className="grid w-full grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 md:w-auto md:grid-cols-4">
              {navigation.map((section) => (
                <div key={section.title} className="min-w-[140px]">
                  <h2 className="mb-4 text-lg font-semibold text-[var(--color-dark-navy)] font-[var(--font-display)]">
                    {section.title}
                  </h2>
                  <ul className="space-y-3.5">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="inline-block py-1 text-[var(--color-slate-gray)] transition-colors duration-200 hover:text-[var(--color-primary-blue)] active:text-[var(--color-sky-blue)]"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="order-1 mb-6 flex w-full items-center justify-center gap-6 sm:justify-start md:order-2 md:mb-0 md:w-auto">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={`Посетить нашу страницу в ${link.name}`}
                className="rounded-full p-3 text-[var(--color-slate-gray)] transition-all duration-200 hover:bg-[var(--color-cloud-white)] hover:text-[var(--color-primary-blue)] active:bg-[var(--color-cloud-white)]/70"
                rel="noopener noreferrer"
                target="_blank"
              >
                <link.icon className="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>

          {/* Copyright - Below on mobile, left on desktop */}
          <p className="order-2 text-center text-sm text-[var(--color-slate-gray)] sm:text-left md:order-1">
            © 2024 FlightGames. Все права защищены.
          </p>
        </div>
      </div>
    </section>
  );
};