import type { Metadata } from "next";
import { HorizonLines } from "@/components/decor/horizon-lines";
import { EventsExplorer } from "@/components/events/events-explorer";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPastEvents, getUpcomingEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "商会活动",
  description:
    "澳大利亚内蒙古商会活动一览：商务论坛、商务社交、庆典晚宴、代表团考察与文化交流等活动的最新安排及往期回顾。",
  alternates: { canonical: "/events" },
};

/** 活动列表页：即将举行 / 往期活动 + 活动类型筛选 */
export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <>
      <PageHeader
        eyebrow="EVENTS"
        title="商会活动"
        titleEn="Chamber Events"
        description="商会全年举办商务论坛、会员酒会、年度晚宴及双向考察等多种形式的活动，促进会员交流，推动澳大利亚与内蒙古之间的经贸与人文合作。"
      />

      {/* 活动列表与筛选 */}
      <section id="events" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {/* 无障碍：补齐 h1 与卡片 h3 之间的标题层级 */}
          <h2 className="sr-only">活动列表</h2>
          <Reveal>
            <EventsExplorer upcoming={upcoming} past={past} />
          </Reveal>
        </div>
      </section>

      {/* 承办 / 合作 CTA */}
      <section className="relative overflow-hidden bg-pine-800 text-cream">
        <div
          aria-hidden="true"
          className="bg-meander-faint absolute inset-0 opacity-50"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 text-gold"
        >
          <HorizonLines className="h-28 opacity-30" />
        </div>

        <Reveal className="relative mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28">
          <SectionHeading
            eyebrow="Host with Us"
            title="想承办或合作活动？"
            titleEn="Host or Partner with the Chamber"
            description="商会欢迎会员企业及各界机构提出活动承办、联合主办或赞助合作意向，秘书处将协助对接场地、嘉宾与宣传资源。"
            align="center"
            dark
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact" variant="gold" withArrow>
              联系秘书处
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
