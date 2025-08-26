// @ts-nocheck
"use client"

import { Plane, Users, Wifi, Shield, Gamepad2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const TwoColumnWithImage = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-sky-50 to-blue-50" id="concept">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[50%_0] bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/shadow-overlay.png')] bg-no-repeat"></div>
      <div className="container p-6 md:p-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="flex flex-col justify-between gap-8 lg:col-span-2">
            <div>
              <h2 className="my-9 text-3xl font-medium md:text-5xl text-[var(--color-dark-navy)]">
                Концепция FlightGames
              </h2>
              <p className="text-[var(--color-slate-gray)] text-lg leading-relaxed">
                Мы создали уникальную платформу для социальных игр во время полёта. Больше никаких скучных часов в воздухе — теперь вы можете познакомиться с попутчиками и весело провести время, играя в увлекательные игры.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-[var(--color-slate-gray)]">
                <Users className="h-5 w-5 text-[var(--color-primary-blue)]" />
                Социальное взаимодействие в полёте
              </div>
              <Separator />
              <div className="flex items-center gap-3 text-[var(--color-slate-gray)]">
                <Wifi className="h-5 w-5 text-[var(--color-primary-blue)]" />
                Простое подключение через Wi-Fi
              </div>
              <Separator />
              <div className="flex items-center gap-3 text-[var(--color-slate-gray)]">
                <Gamepad2 className="h-5 w-5 text-[var(--color-primary-blue)]" />
                Разнообразие игр для всех возрастов
              </div>
              <Separator />
              <div className="flex items-center gap-3 text-[var(--color-slate-gray)]">
                <Shield className="h-5 w-5 text-[var(--color-primary-blue)]" />
                Безопасная и приватная среда
              </div>
              <Separator />
            </div>
          </div>
          <div className="flex aspect-square w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-light-blue)] to-white px-6 md:px-8 lg:col-span-2 rounded-xl">
            <div className="flex flex-col items-center justify-center gap-6 text-center">
              <div className="relative p-8">
                <Plane className="h-32 w-32 text-[var(--color-primary-blue)] transform rotate-45" />
                <div className="absolute -top-2 -right-2 h-8 w-8 bg-[var(--color-sky-blue)] rounded-full flex items-center justify-center">
                  <Gamepad2 className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[var(--color-dark-navy)]">FlightGames</h3>
                <p className="text-sm text-[var(--color-slate-gray)]">Игры в облаках</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TwoColumnWithImage };