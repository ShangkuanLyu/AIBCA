import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, FileDown } from "lucide-react";
import { NEWS_TONES, NewsCard } from "@/components/cards/news-card";
import { MeanderStrip } from "@/components/decor/meander-strip";
import { ShareButtons } from "@/components/news/share-buttons";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHeader } from "@/components/ui/page-header";
import { ContentGallery } from "@/components/ui/content-gallery";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  getAdjacentNews,
  getNewsBySlug,
  getRelatedNews,
  newsArticles,
} from "@/data/news";
import { NEWS_CATEGORIES } from "@/lib/labels";
import { site } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import { assetPath } from "@/lib/asset";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) {
    return { title: "新闻未找到" };
  }
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `${site.url}/news/${article.slug}`,
      images: [{ url: article.coverImage, alt: article.coverAlt }],
    },
  };
}

/** 新闻详情页 */
export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) {
    notFound();
  }

  const category = NEWS_CATEGORIES[article.category];
  const tone = NEWS_TONES[article.category];
  const { prev, next } = getAdjacentNews(article.slug);
  const related = getRelatedNews(article, 3);
  const articleUrl = `${site.url}/news/${article.slug}`;

  return (
    <>
      <PageHeader
        eyebrow={`Newsroom · ${category.en}`}
        title={article.title}
        titleEn={article.titleEn}
      />

      <article className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {/* 文章头：返回链接 + 分类与日期、作者等元信息 */}
          <div className="mx-auto max-w-3xl">
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-sm font-medium text-pine-800 transition-colors duration-300 hover:text-gold-dark"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
              返回新闻列表
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-ink-soft">
              <Badge tone={tone}>{category.zh}</Badge>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span aria-hidden="true" className="h-3 w-px bg-ink/15" />
              <span>{article.author}</span>
              {article.source && (
                <>
                  <span aria-hidden="true" className="h-3 w-px bg-ink/15" />
                  <span>{article.source}</span>
                </>
              )}
            </div>
          </div>

          {/* 主图（宽于正文栏，编辑式排版） */}
          <Reveal className="mx-auto mt-10 max-w-5xl md:mt-12">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* TODO(上线前)：替换为正式新闻照片（当前为 Unsplash 占位图，来自 data/news.ts） */}
                <Image
                  src={assetPath(article.coverImage)}
                  alt={article.coverAlt}
                  fill
                  priority
                  sizes="(min-width: 1152px) 1024px, 100vw"
                  className="object-cover"
                />
              </div>
              {article.coverCaption && (
                <figcaption className="mt-3 flex items-center gap-3 text-xs leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="h-px w-6 shrink-0 bg-gold/70" />
                  {article.coverCaption}
                </figcaption>
              )}
            </figure>
          </Reveal>

          {/* 正文（阅读宽度，宽松行距） */}
          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-[15px] leading-loose text-ink md:mt-14 md:text-base">
            {article.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* 活动图集（现场照片） */}
          {article.gallery && article.gallery.length > 0 && (
            <Reveal className="mx-auto max-w-4xl">
              <ContentGallery images={article.gallery} />
            </Reveal>
          )}

          {/* 分享 */}
          <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-between gap-4 border-y border-ink/10 py-5">
            <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-gold-dark">
              <span aria-hidden="true" className="h-px w-8 bg-gold/70" />
              Share · 分享本文
            </p>
            <ShareButtons url={articleUrl} title={article.title} />
          </div>

          {/* 附件下载 */}
          {article.attachments && article.attachments.length > 0 && (
            <div className="mx-auto mt-14 max-w-3xl">
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-gold-dark">
                <span aria-hidden="true" className="h-px w-8 bg-gold/70" />
                Attachments
              </p>
              <h2 className="mt-3 font-serif text-xl text-ink">附件下载</h2>
              <ul className="mt-5 divide-y divide-ink/10 border border-ink/10 bg-white">
                {article.attachments.map((attachment) => (
                  <li key={attachment.label}>
                    {/* TODO(上线前)：附件 href 目前为占位符 "#"，接入 CMS 后替换为真实文件地址 */}
                    <a
                      href={attachment.href}
                      className="group flex items-center justify-between gap-4 px-5 py-4 text-sm text-ink transition-colors duration-300 hover:bg-ivory/60 hover:text-pine-800"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <FileDown
                          className="h-4 w-4 shrink-0 text-gold-dark"
                          aria-hidden="true"
                        />
                        <span className="truncate">{attachment.label}</span>
                      </span>
                      <span className="shrink-0 text-[11px] tracking-[0.22em] text-ink-soft transition-colors duration-300 group-hover:text-gold-dark">
                        下载
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 回纹分隔 */}
          <div className="mx-auto mt-16 flex max-w-3xl justify-center text-gold/40">
            <div className="w-36">
              <MeanderStrip />
            </div>
          </div>

          {/* 上一篇 / 下一篇 */}
          <nav aria-label="相邻新闻" className="mx-auto mt-8 max-w-3xl">
            <div className="grid divide-y divide-ink/10 border border-ink/10 bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {prev ? (
                <Link
                  href={`/news/${prev.slug}`}
                  className="group flex items-center gap-4 p-5 transition-colors duration-300 hover:bg-ivory/60 md:p-6"
                >
                  <ArrowLeft
                    className="h-4 w-4 shrink-0 text-gold-dark transition-transform duration-300 group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                      上一篇
                    </span>
                    <span className="mt-1.5 block truncate text-sm font-medium text-ink transition-colors duration-300 group-hover:text-pine-700">
                      {prev.title}
                    </span>
                  </span>
                </Link>
              ) : (
                <div className="flex items-center p-5 md:p-6">
                  <span className="text-sm text-ink-soft/70">已是最早一篇</span>
                </div>
              )}

              {next ? (
                <Link
                  href={`/news/${next.slug}`}
                  className="group flex items-center justify-end gap-4 p-5 text-right transition-colors duration-300 hover:bg-ivory/60 md:p-6"
                >
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                      下一篇
                    </span>
                    <span className="mt-1.5 block truncate text-sm font-medium text-ink transition-colors duration-300 group-hover:text-pine-700">
                      {next.title}
                    </span>
                  </span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-gold-dark transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              ) : (
                <div className="flex items-center justify-end p-5 md:p-6">
                  <span className="text-sm text-ink-soft/70">已是最新一篇</span>
                </div>
              )}
            </div>
          </nav>
        </div>
      </article>

      {/* 相关新闻 */}
      {related.length > 0 && (
        <section className="border-t border-ink/10 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Related News"
                title="相关新闻"
                titleEn="You May Also Be Interested In"
              />
              <ButtonLink href="/news" variant="link" withArrow className="mb-1">
                查看全部新闻
              </ButtonLink>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.08} className="h-full">
                  <NewsCard article={item} variant="default" className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
