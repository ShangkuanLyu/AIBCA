import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { Badge, type BadgeTone } from "@/components/ui/badge";
import { EVENT_CATEGORIES, EVENT_STATUS } from "@/lib/labels";
import type { ChamberEvent, EventStatus } from "@/lib/types";
import { cn, formatDate } from "@/lib/utils";

/** 活动状态 → 颜色 */
export const STATUS_TONES: Record<EventStatus, BadgeTone> = {
  upcoming: "gold",
  open: "pine",
  full: "neutral",
  past: "neutral",
};

interface EventCardProps {
  event: ChamberEvent;
  className?: string;
}

/** 活动卡片：封面图 + 状态标签 + 关键信息行 */
export function EventCard({ event, className }: EventCardProps) {
  const status = EVENT_STATUS[event.status];
  const category = EVENT_CATEGORIES[event.category];

  return (
    <article
      className={cn(
        "group flex flex-col border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/60",
        className,
      )}
    >
      <Link href={`/events/${event.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={event.coverImage}
            alt={event.coverAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4">
            <Badge tone={STATUS_TONES[event.status]} onImage>
              {status.zh}
            </Badge>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold-dark">
            {category.zh} · {category.en}
          </p>
          <h3 className="mt-2.5 line-clamp-2 font-serif text-xl leading-snug transition-colors group-hover:text-pine-700">
            {event.title}
          </h3>

          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li className="flex items-center gap-2.5">
              <CalendarDays className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
              <time dateTime={event.date}>
                {formatDate(event.date)}
                {event.endDate ? ` – ${formatDate(event.endDate)}` : ""}
              </time>
            </li>
            {event.time && (
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                {event.time}
              </li>
            )}
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
              {event.location}
            </li>
          </ul>

          <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-pine-800 transition-colors group-hover:text-gold-dark">
            查看详情
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
