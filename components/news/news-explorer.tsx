"use client";

import { useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Search, SearchX } from "lucide-react";
import { NewsCard } from "@/components/cards/news-card";
import { Reveal } from "@/components/ui/reveal";
import { newsArticles } from "@/data/news";
import { NEWS_CATEGORIES } from "@/lib/labels";
import type { NewsArticle, NewsCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

/** 每页展示条数 */
const PAGE_SIZE = 6;

type CategoryFilter = "all" | NewsCategory;

/** 分类筛选项：全部 + 六个新闻分类（顺序取自 NEWS_CATEGORIES） */
const CATEGORY_OPTIONS: Array<{ value: CategoryFilter; label: string }> = [
  { value: "all", label: "全部" },
  ...(Object.keys(NEWS_CATEGORIES) as NewsCategory[]).map((key) => ({
    value: key,
    label: NEWS_CATEGORIES[key].zh,
  })),
];

/** 列表数据：置顶文章已在列表上方单独展示，此处不再重复 */
const listArticles = newsArticles.filter((article) => !article.pinned);

/** 关键词匹配：标题 / 摘要（含英文字段），不区分大小写 */
function matchesQuery(keyword: string): (article: NewsArticle) => boolean {
  const q = keyword.trim().toLowerCase();
  if (!q) return () => true;
  return (article) =>
    [article.title, article.titleEn, article.excerpt, article.excerptEn].some(
      (text) => text?.toLowerCase().includes(q),
    );
}

/**
 * 新闻列表页 · 筛选 + 搜索 + 分页浏览。
 * 客户端组件：仅承担交互，卡片渲染复用 NewsCard。
 */
export function NewsExplorer() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const byQuery = matchesQuery(query);
    return listArticles.filter(
      (article) =>
        (category === "all" || article.category === category) &&
        byQuery(article),
    );
  }, [category, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageArticles = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  /** 筛选 / 搜索变化时回到第 1 页 */
  const applyCategory = (value: CategoryFilter) => {
    setCategory(value);
    setPage(1);
  };

  const applyQuery = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const resetFilters = () => {
    setCategory("all");
    setQuery("");
    setPage(1);
  };

  /** 翻页后滚回列表顶部（尊重系统减少动态效果设置） */
  const goToPage = (next: number) => {
    if (next < 1 || next > pageCount || next === currentPage) return;
    setPage(next);
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    topRef.current?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  };

  const pageButtonBase =
    "inline-flex h-10 items-center justify-center rounded-[2px] border text-sm transition-colors duration-300";
  const pageButtonIdle =
    "border-ink/15 bg-white text-ink-soft hover:border-gold/60 hover:text-ink";

  return (
    <div ref={topRef} id="news-list" className="scroll-mt-24">
      {/* 筛选 + 搜索 */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="group"
          aria-label="按分类筛选新闻"
          className="flex flex-wrap gap-2"
        >
          {CATEGORY_OPTIONS.map((option) => {
            const active = category === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => applyCategory(option.value)}
                aria-pressed={active}
                className={cn(
                  "rounded-[2px] border px-4 py-2 text-[13px] tracking-wide transition-colors duration-300",
                  active
                    ? "border-pine-800 bg-pine-800 text-cream"
                    : "border-ink/15 bg-white text-ink-soft hover:border-gold/60 hover:text-ink",
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="relative w-full shrink-0 lg:w-72">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft/60"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => applyQuery(e.target.value)}
            placeholder="搜索新闻…"
            aria-label="搜索新闻"
            className="w-full rounded-[2px] border border-ink/20 bg-white py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-ink-soft/50 focus:border-gold focus:outline-none"
          />
        </div>
      </div>

      {/* 结果统计 */}
      <p
        role="status"
        className="mt-6 border-t border-ink/10 pt-5 text-xs tracking-wide text-ink-soft"
      >
        共 {filtered.length} 条{pageCount > 1 && ` · 第 ${currentPage} / ${pageCount} 页`}
      </p>

      {/* 列表 / 空状态 */}
      {pageArticles.length > 0 ? (
        <div className="mt-6 flex flex-col gap-6">
          {pageArticles.map((article, index) => (
            <Reveal key={article.slug} delay={Math.min(index * 0.06, 0.3)}>
              <NewsCard article={article} variant="horizontal" />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-6 border border-dashed border-ink/15 bg-white/60 px-6 py-16 text-center">
          <SearchX
            aria-hidden="true"
            className="mx-auto h-8 w-8 text-ink-soft/40"
          />
          <p className="mt-4 text-[15px] font-medium text-ink">未找到相关新闻</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            请尝试更换关键词，或切换其他分类查看。
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-6 inline-flex items-center justify-center rounded-[2px] border border-ink/25 px-6 py-2.5 text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:border-gold-dark hover:text-pine-800"
          >
            清除筛选条件
          </button>
        </div>
      )}

      {/* 分页 */}
      {pageCount > 1 && (
        <nav
          aria-label="新闻列表分页"
          className="mt-12 flex flex-wrap items-center justify-center gap-2"
        >
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="上一页"
            className={cn(
              pageButtonBase,
              pageButtonIdle,
              "gap-1 px-3",
              currentPage === 1 && "cursor-not-allowed opacity-40 hover:border-ink/15 hover:text-ink-soft",
            )}
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
            <span className="hidden sm:inline">上一页</span>
          </button>

          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => goToPage(n)}
              aria-label={`第 ${n} 页`}
              aria-current={n === currentPage ? "page" : undefined}
              className={cn(
                pageButtonBase,
                "w-10",
                n === currentPage
                  ? "border-pine-800 bg-pine-800 text-cream"
                  : pageButtonIdle,
              )}
            >
              {n}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === pageCount}
            aria-label="下一页"
            className={cn(
              pageButtonBase,
              pageButtonIdle,
              "gap-1 px-3",
              currentPage === pageCount &&
                "cursor-not-allowed opacity-40 hover:border-ink/15 hover:text-ink-soft",
            )}
          >
            <span className="hidden sm:inline">下一页</span>
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </nav>
      )}
    </div>
  );
}
