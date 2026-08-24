import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EVENT_CATEGORIES, EVENT_STATUS } from "@/lib/labels";
import type { ChamberEvent } from "@/lib/types";
import { cn, formatDate } from "@/lib/utils";
import { assetPath } from "@/lib/asset";

interface PastEventCardProps {
  event: ChamberEvent;
  className?: string;
}

/** 往期活动横向卡片：左图（含「活动回顾」标）+ 右侧摘要信息 */
export function PastEventCard({ event, className }: PastEventCardProps) {
  const category = EVENT_CATEGORIES[event.category];

  return (
    <article
      className={cn(
        "group border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60",
        className,
      )}
    >
      <Link href={`/events/${event.slug}`} className="flex h-full flex-col sm:flex-row">
        <div className="relative aspect-[16/9] shrink-0 overflow-hidden sm:aspect-[4/3] sm:w-60 lg:aspect-[16/10] lg:w-80">
          <Image
            src={assetPath(event.coverImage)}
            alt={event.coverAlt}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 240px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4">
            <Badge tone="neutral" onImage>
              {EVENT_STATUS.past.zh}
            </Badge>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold-dark">
            {category.zh} · {category.en}
          </p>
          <h3 className="mt-2.5 font-serif text-xl leading-snug transition-colors group-hover:text-pine-700">
            {event.title}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-soft">
            {event.summary}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-5 text-sm text-ink-soft">
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
              <time dateTime={event.date}>
                {formatDate(event.date)}
                {event.endDate ? ` – ${formatDate(event.endDate)}` : ""}
              </time>
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
              {event.location}
            </span>
            <span className="ml-auto flex items-center gap-1.5 font-medium text-pine-800 transition-colors group-hover:text-gold-dark">
              查看回顾
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
