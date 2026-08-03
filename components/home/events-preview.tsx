import { EventCard } from "@/components/cards/event-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getUpcomingEvents } from "@/data/events";

/** 首页 · 近期活动 */
export function EventsPreview() {
  const upcoming = getUpcomingEvents().slice(0, 3);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Events"
            title="近期活动"
            titleEn="Upcoming Events"
          />
          <ButtonLink href="/events" variant="link" withArrow className="mb-1">
            查看全部
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((event, i) => (
            <Reveal key={event.slug} delay={i * 0.1} className="h-full">
              <EventCard event={event} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
