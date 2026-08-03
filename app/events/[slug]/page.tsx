import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { EventCard, STATUS_TONES } from "@/components/cards/event-card";
import { EventInfoPanel } from "@/components/events/event-info-panel";
import { RegistrationPanel } from "@/components/events/registration-panel";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { ImageFrame } from "@/components/ui/image-frame";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  events,
  getEventBySlug,
  getPastEvents,
  getUpcomingEvents,
} from "@/data/events";
import { EVENT_CATEGORIES, EVENT_STATUS } from "@/lib/labels";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return events.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) {
    return { title: "活动未找到" };
  }
  /* 站点名后缀由 layout 的 title.template 统一追加 */
  return {
    title: event.title,
    description: event.summary,
  };
}

/** 活动详情页 */
export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) {
    notFound();
  }

  const status = EVENT_STATUS[event.status];
  const category = EVENT_CATEGORIES[event.category];
  /** 更多活动：优先展示即将举行，再补往期，共 3 场 */
  const moreEvents = [...getUpcomingEvents(), ...getPastEvents()]
    .filter((item) => item.slug !== event.slug)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="EVENTS"
        title={event.title}
        titleEn={event.titleEn}
        description={event.summary}
      >
        {/* 状态 + 活动类型标签 */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Badge tone={STATUS_TONES[event.status]} onImage>
            {status.zh} · {status.en}
          </Badge>
          <Badge tone="cream">
            {category.zh} · {category.en}
          </Badge>
        </div>
      </PageHeader>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-pine-800"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            返回活动列表
          </Link>

          {/* 顶部大图 */}
          {/* TODO(上线前)：替换为商会真实活动照片 */}
          <Reveal className="mt-8">
            <ImageFrame
              src={event.coverImage}
              alt={event.coverAlt}
              aspect="aspect-[16/9]"
              sizes="(min-width: 1280px) 1152px, 100vw"
              priority
            />
          </Reveal>

          {/* 信息面板 */}
          <Reveal delay={0.08} className="mt-14">
            <EventInfoPanel event={event} />
          </Reveal>

          {/* 正文 */}
          {event.body && event.body.length > 0 && (
            <div className="mt-14 max-w-3xl space-y-5 text-[15px] leading-relaxed text-ink-soft md:mt-16">
              {event.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}

          {/* 报名区块 */}
          <div id="register" className="mt-14 scroll-mt-24 md:mt-16">
            <RegistrationPanel event={event} />
          </div>
        </div>
      </section>

      {/* 更多活动 */}
      {moreEvents.length > 0 && (
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="More Events"
                title="更多活动"
                titleEn="More from the Chamber"
              />
              <ButtonLink
                href="/events"
                variant="link"
                withArrow
                className="mb-1"
              >
                查看全部活动
              </ButtonLink>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {moreEvents.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.1} className="h-full">
                  <EventCard event={item} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
