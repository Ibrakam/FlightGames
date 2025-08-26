// @ts-nocheck
"use client";

import { ChevronRight, Plane } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger } from
"@/components/ui/navigation-menu";

const ITEMS = [
{ label: "Концепция", href: "#concept" },
{ label: "Как работает", href: "#how-it-works" },
{ label: "Преимущества", href: "#benefits" },
{ label: "Контакты", href: "#contacts" }];


const logo = {
  url: "#",
  title: "FlightGames"
};

const FloatingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="absolute top-5 left-1/2 z-50 w-[min(90%,700px)] -translate-x-1/2 rounded-full border bg-background/70 backdrop-blur-md lg:top-12">
      <div className="flex items-center justify-between px-6 py-3 w-full custom:!w-[755px] !h-[72px]">
        <a href={logo.url} className="flex shrink-0 items-center gap-2" title={logo.title}>
          <div className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800">
              <Plane className="size-5 text-white" />
            </div>
            <span className="font-[var(--font-display)] text-xl font-bold text-[var(--color-dark-navy)]">
              FlightGames
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            {ITEMS.map((link) =>
            <NavigationMenuItem key={link.label} className="">
                <a
                href={link.href}
                className={cn(
                  "relative bg-transparent px-1.5 text-sm font-medium text-muted-foreground hover:text-[var(--color-primary-blue)] transition-colors"
                )}
                >
                  {link.label}
                </a>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2.5">
          <div className="max-lg:hidden">
            <Button
              className="bg-[var(--color-primary-blue)] text-white hover:bg-[var(--color-sky-blue)] transition-colors">

              <span className="relative z-10">Начать игру</span>
            </Button>
          </div>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="relative flex size-8 text-muted-foreground lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>

            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}>
              </span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}>
              </span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}>
              </span>
            </div>
          </button>
        </div>
      </div>

      {/*  Mobile Menu Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border bg-background p-6 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen ?
          "visible translate-y-0 opacity-100" :
          "invisible -translate-y-4 opacity-0"
        )}>
        <nav className="flex flex-1 flex-col divide-y divide-border">
          {ITEMS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "py-4 text-base font-medium text-primary transition-colors first:pt-0 last:pb-0 hover:text-primary/80"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <Button
              className="w-full bg-[var(--color-primary-blue)] text-white hover:bg-[var(--color-sky-blue)] transition-colors">

              Начать игру
            </Button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export { FloatingNavbar };