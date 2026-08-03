import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { AboutPreview } from "@/components/home/about-preview";
import { Functions } from "@/components/home/functions";
import { NewsSection } from "@/components/home/news-section";
import { Stats } from "@/components/home/stats";
import { EventsPreview } from "@/components/home/events-preview";
import { Vision } from "@/components/home/vision";
import { PresidentMessage } from "@/components/home/president-message";
import { PartnersSection } from "@/components/home/partners-section";
import { JoinCta } from "@/components/home/join-cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.nameZh} | ${site.nameEn}` },
  description: `${site.tagline}。${site.description}`,
};

/** 首页 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Functions />
      <NewsSection />
      <Stats />
      <EventsPreview />
      <Vision />
      <PresidentMessage />
      <PartnersSection />
      <JoinCta />
    </>
  );
}
