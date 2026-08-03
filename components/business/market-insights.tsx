import { NewsCard } from "@/components/cards/news-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { newsArticles } from "@/data/news";
import type { NewsArticle } from "@/lib/types";

/**
 * 栏目取稿逻辑：
 * - 澳大利亚市场资讯：优先取「商务资讯」，不足时以「中澳交流」补足；
 * - 内蒙古市场资讯：优先取「政策资讯」，以未被前一栏使用的「中澳交流」补足。
 * newsArticles 本身按日期降序排列，无需再排序。
 */
function pickMarketNews(): {
  australia: NewsArticle[];
  innerMongolia: NewsArticle[];
} {
  const australia = [
    ...newsArticles.filter((a) => a.category === "business"),
    ...newsArticles.filter((a) => a.category === "exchange"),
  ].slice(0, 2);

  const used = new Set(australia.map((a) => a.slug));
  const innerMongolia = [
    ...newsArticles.filter((a) => a.category === "policy"),
    ...newsArticles.filter(
      (a) => a.category === "exchange" && !used.has(a.slug),
    ),
  ].slice(0, 2);

  return { australia, innerMongolia };
}

interface ColumnProps {
  eyebrow: string;
  title: string;
  articles: NewsArticle[];
}

function InsightColumn({ eyebrow, title, articles }: ColumnProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-ink/15 pb-4">
        <p className="text-[11px] uppercase tracking-[0.2em] text-gold-dark">
          {eyebrow}
        </p>
        <h3 className="mt-1.5 font-serif text-xl">{title}</h3>
      </div>
      <div className="flex flex-col divide-y divide-ink/10">
        {articles.map((article) => (
          <NewsCard key={article.slug} article={article} variant="mini" />
        ))}
      </div>
      <div className="mt-auto border-t border-ink/10 pt-4">
        <ButtonLink href="/news" variant="link" withArrow>
          更多资讯
        </ButtonLink>
      </div>
    </div>
  );
}

/** 商务合作 · 市场资讯（澳大利亚 / 内蒙古两栏） */
export function MarketInsights() {
  const { australia, innerMongolia } = pickMarketNews();

  return (
    <section id="insights" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Market Insights"
          title="市场资讯"
          titleEn="Market Updates from Both Sides"
          description="商会秘书处定期梳理两地经贸政策与市场动态，供会员单位经营决策参考。内容据公开信息整理，不构成任何投资建议。"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <InsightColumn
              eyebrow="Australia"
              title="澳大利亚市场资讯"
              articles={australia}
            />
          </Reveal>
          <Reveal delay={0.12}>
            <InsightColumn
              eyebrow="Inner Mongolia"
              title="内蒙古市场资讯"
              articles={innerMongolia}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
