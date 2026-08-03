import { NewsCard } from "@/components/cards/news-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedNews, getSecondaryNews } from "@/data/news";

/** 首页 · 最新资讯（编辑式布局：左侧重点新闻 + 右侧次要新闻列表） */
export function NewsSection() {
  const featured = getFeaturedNews();
  const secondary = getSecondaryNews(4);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Newsroom"
            title="最新资讯"
            titleEn="Latest News"
          />
          <ButtonLink href="/news" variant="link" withArrow className="mb-1">
            查看全部
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <NewsCard article={featured} variant="featured" />
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10 lg:border-t-0 lg:pt-0">
              {secondary.map((article) => (
                <NewsCard key={article.slug} article={article} variant="mini" />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
