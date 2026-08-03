import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge, type BadgeTone } from "@/components/ui/badge";
import { NEWS_CATEGORIES } from "@/lib/labels";
import type { NewsArticle, NewsCategory } from "@/lib/types";
import { cn, formatDate } from "@/lib/utils";

/** 分类 → 颜色（暗红仅用于公告与文化类栏目） */
export const NEWS_TONES: Record<NewsCategory, BadgeTone> = {
  chamber: "pine",
  policy: "oxblood",
  business: "gold",
  exchange: "oxblood",
  member: "pine",
  "event-recap": "gold",
};

interface NewsCardProps {
  article: NewsArticle;
  /**
   * featured — 首页重点新闻（大图）
   * default  — 标准卡片
   * mini     — 小图横排（首页次要新闻）
   * horizontal — 列表页横排大卡
   */
  variant?: "featured" | "default" | "mini" | "horizontal";
  priority?: boolean;
  className?: string;
}

/** 新闻卡片（编辑式排版的基础单元） */
export function NewsCard({
  article,
  variant = "default",
  priority = false,
  className,
}: NewsCardProps) {
  const cat = NEWS_CATEGORIES[article.category];
  const tone = NEWS_TONES[article.category];
  const href = `/news/${article.slug}`;

  if (variant === "mini") {
    return (
      <article className={cn("group", className)}>
        <Link href={href} className="flex gap-4 py-4">
          <div className="relative h-20 w-28 shrink-0 overflow-hidden">
            <Image
              src={article.coverImage}
              alt={article.coverAlt}
              fill
              sizes="112px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="min-w-0">
            <p className="flex items-center gap-2 text-[11px] tracking-wide text-ink-soft">
              <span className={cn("font-medium", tone === "oxblood" ? "text-oxblood" : "text-gold-dark")}>
                {cat.zh}
              </span>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </p>
            <h3 className="mt-1.5 line-clamp-2 text-[15px] font-medium leading-snug transition-colors group-hover:text-pine-700">
              {article.title}
            </h3>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "horizontal") {
    return (
      <article
        className={cn(
          "group border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60",
          className,
        )}
      >
        <Link href={href} className="flex flex-col gap-0 sm:flex-row">
          <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden sm:w-64 md:w-72">
            <Image
              src={article.coverImage}
              alt={article.coverAlt}
              fill
              sizes="(min-width: 640px) 288px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-center gap-3">
              <Badge tone={tone}>{cat.zh}</Badge>
              <time dateTime={article.date} className="text-xs text-ink-soft">
                {formatDate(article.date)}
              </time>
            </div>
            <h3 className="mt-3 font-serif text-xl leading-snug transition-colors group-hover:text-pine-700">
              {article.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">
              {article.excerpt}
            </p>
            <span className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-medium text-pine-800 transition-colors group-hover:text-gold-dark">
              阅读更多
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "featured") {
    return (
      <article className={cn("group", className)}>
        <Link href={href} className="block">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={article.coverImage}
              alt={article.coverAlt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="mt-5 flex items-center gap-3">
            <Badge tone={tone}>{cat.zh}</Badge>
            <time dateTime={article.date} className="text-xs text-ink-soft">
              {formatDate(article.date)}
            </time>
          </div>
          <h3 className="mt-3 font-serif text-2xl leading-snug text-balance transition-colors group-hover:text-pine-700 md:text-[1.7rem]">
            {article.title}
          </h3>
          <p className="mt-3 line-clamp-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {article.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-pine-800 transition-colors group-hover:text-gold-dark">
            阅读更多
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </Link>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60",
        className,
      )}
    >
      <Link href={href} className="flex h-full flex-col">
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={article.coverImage}
            alt={article.coverAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3">
            <Badge tone={tone}>{cat.zh}</Badge>
            <time dateTime={article.date} className="text-xs text-ink-soft">
              {formatDate(article.date)}
            </time>
          </div>
          <h3 className="mt-3 line-clamp-2 font-serif text-lg leading-snug transition-colors group-hover:text-pine-700">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">
            {article.excerpt}
          </p>
          <span className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-medium text-pine-800 transition-colors group-hover:text-gold-dark">
            阅读更多
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
