// @ts-nocheck
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plane, Users, Shield } from "lucide-react";

const benefits = [
  {
    title: "Простое подключение",
    description:
      "Мгновенный доступ через QR-код без установки приложений",
    icon: Plane,
  },
  {
    title: "Социальное взаимодействие", 
    description:
      "Знакомьтесь с попутчиками и создавайте новые дружеские связи",
    icon: Users,
  },
  {
    title: "Безопасность данных",
    description:
      "Полная конфиденциальность и защита личной информации пассажиров",
    icon: Shield,
  },
];

const ThreeColumnImageCards = () => {
  return (
    <section className="py-32 bg-light-blue/20" id="benefits">
      <div className="container">
        <div className="m-auto mb-24 max-w-xl text-center">
          <h2 className="mb-6 text-3xl font-semibold lg:text-5xl text-dark-navy">
            Преимущества FlightGames
          </h2>
          <p className="m-auto max-w-3xl text-lg lg:text-xl text-slate-gray">
            Почему пассажиры выбирают нас для развлечений в полёте
          </p>
          <div className="mt-8 flex flex-col items-center space-y-2">
            <Button
              className="rounded-xl bg-sky-blue hover:bg-primary-blue"
              size="lg"
            >
              Все преимущества
            </Button>
          </div>
        </div>
        <div className="mt-11 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 pt-6 pb-6 bg-cloud-white hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-sky-blue/10">
                    <benefit.icon className="h-8 w-8 text-sky-blue" />
                  </div>
                </div>
                <p className="mb-3 font-semibold text-dark-navy text-lg">{benefit.title}</p>
                <p className="text-slate-gray leading-relaxed">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ThreeColumnImageCards };