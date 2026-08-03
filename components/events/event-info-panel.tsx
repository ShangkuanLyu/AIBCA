import { CalendarDays, Clock, MapPin, Ticket, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { ChamberEvent } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface InfoItem {
  icon: LucideIcon;
  label: string;
  value: ReactNode;
}

/** 活动详情 · 关键信息面板（细边框卡 + Lucide 图标行） */
export function EventInfoPanel({ event }: { event: ChamberEvent }) {
  const items: InfoItem[] = [
    {
      icon: CalendarDays,
      label: "日期 · Date",
      value: (
        <time dateTime={event.date}>
          {formatDate(event.date)}
          {event.endDate ? ` – ${formatDate(event.endDate)}` : ""}
        </time>
      ),
    },
  ];

  if (event.time) {
    items.push({ icon: Clock, label: "时间 · Time", value: event.time });
  }

  items.push({
    icon: MapPin,
    label: "地点 · Venue",
    value: (
      <>
        <span className="block">{event.location}</span>
        {event.venue && (
          <span className="mt-1 block text-sm text-ink-soft">
            {event.venue}
          </span>
        )}
      </>
    ),
  });

  if (event.capacity) {
    items.push({ icon: Users, label: "名额 · Capacity", value: event.capacity });
  }

  if (event.price) {
    items.push({ icon: Ticket, label: "费用 · Price", value: event.price });
  }

  return (
    <dl className="grid gap-x-10 gap-y-7 border border-ink/10 bg-white p-7 sm:grid-cols-2 md:p-9 lg:grid-cols-3">
      {items.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-start gap-3.5">
          <Icon
            className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark"
            aria-hidden="true"
          />
          <div>
            <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">
              {label}
            </dt>
            <dd className="mt-1.5 text-[15px] leading-relaxed text-ink">
              {value}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
