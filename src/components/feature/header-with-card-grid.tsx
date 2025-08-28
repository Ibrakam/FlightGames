// @ts-nocheck
"use client"

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface feature {
  title: string;
  description: string;
  link: string;
  badge: string;
}

const FEATURES: Array<feature> = [
  {
    title: "Введите код игры",
    description:
      "Получите специальный код от играющих пассажиров и наблюдайте за их игрой в реальном времени",
    link: "#",
    badge: "Простой доступ",
  },
  {
    title: "Комментируйте и болейте",
    description:
      "Поддерживайте игроков, оставляйте комментарии и наслаждайтесь захватывающими моментами",
    link: "#",
    badge: "Интерактивность",
  },
];

const HeaderWithCardGrid = () => {
  return (
    <section className="bg-[var(--color-light-blue)] bg-[length:3.125rem_3.125rem] bg-repeat py-32" >
      <div className="container">
        <div className="flex w-full flex-col items-start justify-between gap-4 pb-16 lg:flex-row lg:items-end">
          <div className="flex w-full max-w-[48rem] flex-1 flex-col items-start gap-5">
            <h2 className="text-[2rem] font-bold leading-none tracking-tight md:text-[2.75rem] lg:text-5xl text-[var(--color-dark-navy)]">
              Функция 'Наблюдатели'
            </h2>
            <p className="text-[var(--color-slate-gray)] w-full max-w-[44rem] text-[1.15rem] font-medium leading-normal sm:text-xl">
              Не хотите играть? Наблюдайте за играми других пассажиров!
            </p>
          </div>
          <div>
            <Button className="rounded-full bg-[var(--color-primary-blue)] hover:bg-[var(--color-dark-navy)] text-[var(--color-cloud-white)]">
              Узнать больше
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 grid-rows-[auto] gap-10 md:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <Card
              key={`feature-${i}`}
              className="bg-[var(--color-cloud-white)] flex w-full flex-col justify-between gap-10 rounded-[.5rem] border p-5"
            >
              <CardHeader className="flex w-full flex-col justify-between gap-4 p-0 lg:flex-row lg:items-center">
                <CardTitle className="flex w-fit items-center justify-start gap-2.5">
                  <h3 className="text-[1.75rem] font-bold leading-none tracking-tight text-[var(--color-dark-navy)]">
                    {feature.title}
                  </h3>
                </CardTitle>
                <Badge className="bg-[var(--color-secondary)]">
                  <p className="text-[var(--color-dark-navy)] text-sm">{feature.badge}</p>
                </Badge>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[var(--color-slate-gray)] max-w-[20rem] text-base font-medium leading-[1.4]">
                  {feature.description}
                </p>
              </CardContent>
              <CardFooter className="flex w-full items-end justify-between gap-5 p-0 lg:flex-row">
                <div className="flex-1">
                  <Button size="sm" className="rounded-full bg-[var(--color-sky-blue)] hover:bg-[var(--color-primary-blue)] text-[var(--color-cloud-white)]">
                    <a href={feature.link} className="flex items-center gap-2">
                      {i === 0 ? "Попробовать" : "Подробнее"}
                      <ArrowRight />
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { HeaderWithCardGrid };