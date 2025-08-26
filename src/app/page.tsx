// @ts-nocheck
import { FloatingNavbar } from "@/components/navbars/floating-navbar";
import { TwoColumnHeroWithImage } from "@/components/heros/two-column-hero-with-image";
import { TwoColumnWithImage } from "@/components/feature/two-column-with-image";
import { NumberedBadgeCards } from "@/components/feature/numbered-badge-cards";
import { HeaderWithCardGrid } from "@/components/feature/header-with-card-grid";
import { ThreeColumnImageCards } from "@/components/feature/three-column-image-cards";
import { ComprehensiveContactForm } from "@/components/contact/comprehensive-contact-form";
import { NewsletterFooter } from "@/components/footers/newsletter-footer";

export default function HomePage() {
  return (
    <>
      <FloatingNavbar />
      <TwoColumnHeroWithImage />
      <TwoColumnWithImage />
      <NumberedBadgeCards />
      <HeaderWithCardGrid />
      <ThreeColumnImageCards />
      <ComprehensiveContactForm />
      <NewsletterFooter />
    </>
  );
}