import type { Metadata } from "next";
import { NewsCard } from "@/components/cards/news-card";
import { NewsCta } from "@/components/news/news-cta";
import { NewsExplorer } from "@/components/news/news-explorer";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "新闻资讯",
  description:
    "澳大利亚内蒙古商会新闻资讯：商会动态、政策资讯、商务资讯、中澳交流、会员新闻与活动回顾，及时了解商会与两地商界的最新进展。",
  alternates: { canonical: "/news" },
};

/** 新闻列表页：置顶新闻 + 分类筛选 / 搜索 / 分页列表 + 订阅 CTA */
export default function NewsPage() {
  const pinnedArticles = newsArticles.filter((article) => article.pinned);

  return (
    <>
      <PageHeader
        eyebrow="NEWSROOM"
        title="新闻资讯"
        titleEn="Latest News"
        description="商会动态、政策与市场资讯、中澳交流与会员新闻，均由商会秘书处整理发布。"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {/* 无障碍：补齐 h1 与卡片 h3 之间的标题层级 */}
          <h2 className="sr-only">新闻列表</h2>
          {/* 置顶新闻：通栏横向大卡，置于列表上方 */}
          {pinnedArticles.length > 0 && (
            <div className="mb-14 flex flex-col gap-10">
              {pinnedArticles.map((article, index) => (
                <Reveal key={article.slug} delay={index * 0.08}>
                  <div className="flex items-center gap-3">
                    <Badge tone="oxblood">置顶</Badge>
                    <span aria-hidden="true" className="h-px flex-1 bg-gold/40" />
                  </div>
                  <NewsCard
                    article={article}
                    variant="horizontal"
                    className="mt-4"
                  />
                </Reveal>
              ))}
            </div>
          )}

          <NewsExplorer />
        </div>
      </section>

      <NewsCta />
    </>
  );
}
