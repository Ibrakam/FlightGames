// @ts-nocheck
"use client"

import { Wifi, QrCode, Gamepad2, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface DataItem {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DATA: DataItem[] = [
  {
    id: 1,
    number: "01",
    title: "Подключитесь к Wi-Fi",
    description: "Используйте бортовой Wi-Fi для доступа к FlightGames",
    icon: Wifi,
  },
  {
    id: 2,
    number: "02",
    title: "Сканируйте QR-код",
    description: "Найдите QR-код на спинке кресла или в журнале",
    icon: QrCode,
  },
  {
    id: 3,
    number: "03",
    title: "Выберите игру",
    description: "Просмотрите доступные игры и выберите подходящую",
    icon: Gamepad2,
  },
  {
    id: 4,
    number: "04",
    title: "Играйте с другими",
    description: "Подключайтесь к играм других пассажиров",
    icon: Users,
  },
];

const NumberedBadgeCards = () => {
  return (
    <section className="bg-secondary py-32" id="how-it-works">
      <div className="container">
        <div className="flex flex-col items-center pb-4 text-center">
          <h1 className="pb-3 text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
            Как это работает
          </h1>
          <p className="text-muted-foreground max-w-md text-sm lg:max-w-2xl lg:text-lg">
            Всего 4 простых шага до увлекательной игры
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-4 grid grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-12">
          {DATA.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-background grid grid-cols-1 rounded-2xl border shadow-sm"
              >
                <div className="p-6">
                  <div className="bg-primary text-primary-foreground inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold mb-4">
                    {feature.number}
                  </div>
                  <div className="text-primary mb-4 flex justify-center">
                    <IconComponent className="h-12 w-12" />
                  </div>
                  <p className="mb-3 font-semibold">{feature.title}</p>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { NumberedBadgeCards };