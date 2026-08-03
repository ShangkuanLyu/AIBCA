"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Badge, type BadgeTone } from "@/components/ui/badge";
import type { Member, MemberTier } from "@/lib/types";
import { cn } from "@/lib/utils";

/** 会员类别展示标识（标签文案 + 徽章色调） */
const TIER_META: Record<MemberTier, { label: string; tone: BadgeTone }> = {
  director: { label: "理事会员", tone: "gold" },
  corporate: { label: "企业会员", tone: "pine" },
  individual: { label: "个人会员", tone: "neutral" },
};

interface MemberDirectoryProps {
  members: Member[];
  industries: string[];
}

/** 会员服务 · 会员名录（顶部行业筛选 + 网格卡片） */
export function MemberDirectory({ members, industries }: MemberDirectoryProps) {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  const filtered = activeIndustry
    ? members.filter((member) => member.industry === activeIndustry)
    : members;

  const filterButton = (label: string, value: string | null) => {
    const active = activeIndustry === value;
    return (
      <button
        key={label}
        type="button"
        aria-pressed={active}
        onClick={() => setActiveIndustry(value)}
        className={cn(
          "rounded-[2px] border px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-300",
          active
            ? "border-pine-800 bg-pine-800 text-cream"
            : "border-ink/20 bg-white text-ink-soft hover:border-gold-dark hover:text-pine-800",
        )}
      >
        {label}
      </button>
    );
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filterButton("全部", null)}
        {industries.map((industry) => filterButton(industry, industry))}
      </div>
      <p role="status" className="mt-4 text-center text-xs text-ink-soft/80">
        当前显示 {filtered.length} 位会员
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((member) => {
          const tier = TIER_META[member.tier];
          return (
            <article
              key={member.id}
              className="flex h-full flex-col border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="pine">{member.industry}</Badge>
                <Badge tone={tier.tone}>{tier.label}</Badge>
              </div>
              <h3 className="mt-5 font-serif text-lg leading-snug text-ink">
                {member.name}
              </h3>
              {member.nameEn && member.nameEn !== member.name && (
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-gold-dark">
                  {member.nameEn}
                </p>
              )}
              {member.description && (
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {member.description}
                </p>
              )}
              {member.website && (
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 pt-5 text-xs font-medium text-pine-800 transition-colors duration-300 hover:text-gold-dark"
                >
                  访问官网
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </article>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-ink-soft">
          该行业暂无会员展示。
        </p>
      )}
    </div>
  );
}
