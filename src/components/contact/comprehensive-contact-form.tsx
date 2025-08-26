// @ts-nocheck
"use client"

import React from "react";
import { Mail, Phone, HeadphonesIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ComprehensiveContactForm = () => {
  return (
    <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-gradient-to-b from-sky-50 via-background to-background py-32 lg:mx-4 " id="contacts">
      <div className="container max-w-4xl">
        <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl text-[var(--color-dark-navy)]">
          Свяжитесь с нами
        </h1>
        <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
          Есть вопросы о FlightGames? Мы всегда готовы помочь!
        </p>
        
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:mt-14 lg:mt-20 lg:gap-12">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-light-blue)]">
              <Mail className="h-6 w-6 text-[var(--color-primary-blue)]" />
            </div>
            <h2 className="font-semibold text-[var(--color-dark-navy)]">Email</h2>
            <div className="mt-3">
              <a
                href="mailto:info@flightgames.com"
                className="text-[var(--color-primary-blue)] hover:text-[var(--color-sky-blue)]"
              >
                info@flightgames.com
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-light-blue)]">
              <Phone className="h-6 w-6 text-[var(--color-primary-blue)]" />
            </div>
            <h2 className="font-semibold text-[var(--color-dark-navy)]">Телефон</h2>
            <div className="mt-3">
              <a
                href="tel:+7"
                className="text-[var(--color-primary-blue)] hover:text-[var(--color-sky-blue)]"
              >
                +7 (xxx) xxx-xx-xx
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-light-blue)]">
              <HeadphonesIcon className="h-6 w-6 text-[var(--color-primary-blue)]" />
            </div>
            <h2 className="font-semibold text-[var(--color-dark-navy)]">Поддержка</h2>
            <div className="mt-3">
              <p className="text-muted-foreground">24/7 онлайн поддержка</p>
            </div>
          </div>
        </div>
        
        <DashedLine className="my-12" />
        
        {/* Contact Form */}
        <div className="mx-auto">
          <h2 className="text-lg font-semibold text-[var(--color-dark-navy)]">Написать нам</h2>
          <form className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label>Имя</Label>
              <Input placeholder="Ваше имя" className="border-[var(--color-primary-blue)]/20 focus:border-[var(--color-primary-blue)] focus:ring-[var(--color-primary-blue)]" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input placeholder="your@email.com" type="email" className="border-[var(--color-primary-blue)]/20 focus:border-[var(--color-primary-blue)] focus:ring-[var(--color-primary-blue)]" />
            </div>
            <div className="space-y-2">
              <Label>Тема сообщения</Label>
              <Input placeholder="О чем ваш вопрос?" className="border-[var(--color-primary-blue)]/20 focus:border-[var(--color-primary-blue)] focus:ring-[var(--color-primary-blue)]" />
            </div>
            <div className="space-y-2">
              <Label>Сообщение</Label>
              <Textarea
                placeholder="Расскажите нам о вашем вопросе или предложении."
                className="min-h-[120px] resize-none border-[var(--color-primary-blue)]/20 focus:border-[var(--color-primary-blue)] focus:ring-[var(--color-primary-blue)]"
              />
            </div>
            <div className="flex justify-end">
              <Button size="lg" type="submit" className="bg-[var(--color-primary-blue)] hover:bg-[var(--color-sky-blue)] text-white">
                Отправить сообщение
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-muted-foreground",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ]
        )}
      />
    </div>
  );
};

export { ComprehensiveContactForm };