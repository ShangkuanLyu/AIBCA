"use client";

import { useState } from "react";
import { EventCard } from "@/components/cards/event-card";
import { PastEventCard } from "@/components/events/past-event-card";
import { EVENT_CATEGORIES } from "@/lib/labels";
import type { ChamberEvent, EventCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

type Tab = "upcoming" | "past";
type CategoryFilter = EventCategory | "all";

const TABS: Array<{ key: Tab; zh: string; en: string }> = [
  { key: "upcoming", zh: "即将举行", en: "Upcoming" },
  { key: "past", zh: "往期活动", en: "Past Events" },
];

const CATEGORY_FILTERS: Array<{ key: CategoryFilter; label: string }> = [
  { key: "all", label: "全部" },
  ...(
    Object.entries(EVENT_CATEGORIES) as Array<
      [EventCategory, { zh: string; en: string }]
    >
  ).map(([key, value]) => ({ key, label: value.zh })),
];

interface EventsExplorerProps {
  /** 即将举行（status !== "past"），已按日期升序 */
  upcoming: ChamberEvent[];
  /** 往期活动（status === "past"），已按日期降序 */
  past: ChamberEvent[];
}

/** 活动列表筛选：一级「即将举行 / 往期活动」切换 + 二级活动类型筛选 */
export function EventsExplorer({ upcoming, past }: EventsExplorerProps) {
  const [tab, setTab] = useState<Tab>("upcoming");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const source = tab === "upcoming" ? upcoming : past;
  const filtered =
    category === "all"
      ? source
      : source.filter((event) => event.category === category);

  return (
    <div>
      {/* 一级切换：即将举行 / 往期活动 */}
      <div
        role="group"
        aria-label="活动时间范围"
        className="flex flex-wrap items-center gap-8 border-b border-ink/10"
      >
        {TABS.map(({ key, zh, en }) => {
          const active = tab === key;
          const count = key === "upcoming" ? upcoming.length : past.length;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={active}
              onClick={() => setTab(key)}
              className={cn(
                "group relative -mb-px cursor-pointer pb-4 text-left transition-colors",
                active ? "text-pine-800" : "text-ink-soft hover:text-ink",
              )}
            >
              <span className="font-serif text-lg md:text-xl">{zh}</span>
              <span className="ml-2.5 text-[11px] uppercase tracking-[0.18em] opacity-70">
                {en} · {count}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-0 bottom-0 h-px bg-gold transition-all duration-300",
                  active ? "opacity-100" : "opacity-0 group-hover:opacity-40",
                )}
              />
            </button>
          );
        })}
      </div>

      {/* 二级筛选：活动类型 */}
      <div
        className="mt-8 flex flex-wrap gap-2"
        role="group"
        aria-label="按活动类型筛选"
      >
        {CATEGORY_FILTERS.map(({ key, label }) => {
          const active = category === key;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={active}
              onClick={() => setCategory(key)}
              className={cn(
                "cursor-pointer rounded-[2px] border px-4 py-1.5 text-[13px] tracking-wide transition-colors duration-300",
                active
                  ? "border-pine-800 bg-pine-800 text-cream"
                  : "border-ink/20 bg-white text-ink-soft hover:border-gold-dark hover:text-pine-800",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      <p className="mt-8 text-xs tracking-wide text-ink-soft" aria-live="polite">
        共 {filtered.length} 场活动
      </p>

      {/* 结果列表 */}
      {filtered.length === 0 ? (
        <div className="mt-6 border border-dashed border-ink/20 bg-white/60 px-6 py-20 text-center">
          <p className="font-serif text-lg text-ink">暂无符合条件的活动</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            该类型下暂时没有
            {tab === "upcoming" ? "即将举行的活动" : "往期活动记录"}
            ，可尝试切换其他类型，或稍后再来查看。
          </p>
          {category !== "all" && (
            <button
              type="button"
              onClick={() => setCategory("all")}
              className="mt-6 cursor-pointer rounded-[2px] border border-ink/25 px-5 py-2 text-sm font-medium text-ink transition-colors duration-300 hover:border-gold-dark hover:text-pine-800"
            >
              查看全部类型
            </button>
          )}
        </div>
      ) : tab === "upcoming" ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event) => (
            <EventCard key={event.slug} event={event} className="h-full" />
          ))}
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-6">
          {filtered.map((event) => (
            <PastEventCard key={event.slug} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
