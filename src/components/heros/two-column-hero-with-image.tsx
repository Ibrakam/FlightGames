// @ts-nocheck
"use client"

import { ArrowRight, ArrowUpRight, Plane } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const TwoColumnHeroWithImage = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[var(--color-light-blue)]" id="concept">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-blue)]/5 via-transparent to-[var(--color-sky-blue)]/5 pointer-events-none" />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <Badge
              variant="outline"
              className="bg-[var(--color-primary-blue)] text-white border-0 hover:bg-[var(--color-sky-blue)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plane className="mr-2 size-3.5 text-white" />
              Новое в авиации
              <ArrowUpRight className="ml-2 size-4" />
            </Badge>

            <h1 className="text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl leading-tight font-[var(--font-display)] text-[var(--color-dark-navy)]">
              Играйте с попутчиками{" "}
              <span className="text-[var(--color-primary-blue)] font-bold">
                прямо в полёте
              </span>
            </h1>

            <p className="text-[var(--color-slate-gray)] max-w-xl lg:text-xl leading-relaxed font-[var(--font-body)]">
              FlightGames превращает ваш полёт в захватывающее игровое приключение. Подключайтесь к Wi-Fi, сканируйте QR-код и наслаждайтесь играми с другими пассажирами.
            </p>

            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start pt-2">
              <Button
                size="lg"
                className="w-full sm:w-auto group bg-[var(--color-primary-blue)] hover:bg-[var(--color-sky-blue)] text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-full px-8"
              >
                Узнать больше
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-auto group bg-white hover:bg-gray-100 text-[var(--color-dark-navy)] border border-[var(--color-slate-gray)]/20 rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Как это работает
                <ArrowUpRight className="ml-2 size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary-blue)]/20 to-[var(--color-sky-blue)]/20 rounded-3xl blur-xl opacity-30" />
            <img
              src="/2025-08-14 15.44.24.jpg"
              alt="FlightGames logo"
              className="relative min-h-[500px] max-h-[800px] w-full rounded-3xl object-contain shadow-2xl ring-1 ring-black/5 bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { TwoColumnHeroWithImage };