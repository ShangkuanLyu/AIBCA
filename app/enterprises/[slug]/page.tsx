import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { EnterpriseCard } from "@/components/enterprises/enterprise-card";
import { MeanderStrip } from "@/components/decor/meander-strip";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { ContentGallery } from "@/components/ui/content-gallery";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { enterprises, enterprisesWithDetail, getEnterpriseBySlug } from "@/data/enterprises";
import { assetPath } from "@/lib/asset";
import { site } from "@/lib/site";

interface EnterpriseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return enterprisesWithDetail.map((enterprise) => ({ slug: enterprise.slug }));
}

export async function generateMetadata({
  params,
}: EnterpriseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const enterprise = getEnterpriseBySlug(slug);
  if (!enterprise) {
    return { title: "企业未找到" };
  }
  return {
    title: enterprise.name,
    description: enterprise.summary,
    openGraph: {
      title: enterprise.name,
      description: enterprise.summary,
      type: "article",
      url: `${site.url}/enterprises/${enterprise.slug}`,
    },
  };
}

/** 商会企业详情页：企业简介 + 负责人 + 核心团队 + 发展战略 + 图集 */
export default async function EnterpriseDetailPage({
  params,
}: EnterpriseDetailPageProps) {
  const { slug } = await params;
  const enterprise = getEnterpriseBySlug(slug);
  if (!enterprise) {
    notFound();
  }

  const { leader } = enterprise;
  const others = enterprises.filter(
    (item) => item.slug !== enterprise.slug && item.body.length > 0
  );

  return (
    <>
      <PageHeader
        eyebrow="CHAMBER ENTERPRISES"
        title={enterprise.name}
        titleEn={enterprise.nameEn}
        description={enterprise.summary}
      />

      <article className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Link
            href="/enterprises"
            className="group inline-flex items-center gap-2 text-sm font-medium text-pine-800 transition-colors duration-300 hover:text-gold-dark"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            返回商会企业
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
            {/* 主栏：简介正文 + 核心团队 + 发展战略 + 图集 */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-ink-soft">
                <Badge tone="pine">{enterprise.industry}</Badge>
                {enterprise.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-gold-dark" aria-hidden="true" />
                    {enterprise.location}
                  </span>
                )}
                {enterprise.website && (
                  <a
                    href={enterprise.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-medium text-pine-800 transition-colors duration-300 hover:text-gold-dark"
                  >
                    访问官网
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>

              <div className="mt-8 space-y-6 text-[15px] leading-loose text-ink md:text-base">
                {enterprise.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* 核心团队 */}
              {enterprise.team && enterprise.team.length > 0 && (
                <Reveal className="mt-16">
                  <div className="flex items-center gap-4">
                    <h2 className="shrink-0 font-serif text-xl text-ink">
                      核心团队
                      <span className="ml-3 text-[11px] uppercase tracking-[0.22em] text-gold-dark">
                        Key People
                      </span>
                    </h2>
                    <span aria-hidden="true" className="h-px flex-1 bg-ink/10" />
                  </div>
                  <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                    {enterprise.team.map((member) => (
                      <li
                        key={member.name}
                        className="border border-ink/10 bg-white p-6 transition-colors duration-300 hover:border-gold/60"
                      >
                        <p className="font-serif text-lg text-ink">{member.name}</p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-gold-dark">
                          {member.role}
                        </p>
                        {member.bio && (
                          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                            {member.bio}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {/* 发展战略 */}
              {enterprise.strategies && enterprise.strategies.length > 0 && (
                <Reveal className="mt-16">
                  <div className="flex items-center gap-4">
                    <h2 className="shrink-0 font-serif text-xl text-ink">
                      发展战略
                      <span className="ml-3 text-[11px] uppercase tracking-[0.22em] text-gold-dark">
                        Strategy
                      </span>
                    </h2>
                    <span aria-hidden="true" className="h-px flex-1 bg-ink/10" />
                  </div>
                  <ol className="mt-8 space-y-4">
                    {enterprise.strategies.map((strategy, index) => (
                      <li
                        key={index}
                        className="flex gap-5 border border-ink/10 bg-white p-6"
                      >
                        <span
                          aria-hidden="true"
                          className="font-serif text-2xl leading-none text-gold-dark"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm leading-relaxed text-ink md:text-[15px]">
                          {strategy}
                        </p>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              )}

              {/* 企业图集 */}
              {enterprise.gallery && enterprise.gallery.length > 0 && (
                <Reveal>
                  <ContentGallery
                    images={enterprise.gallery}
                    title="企业图集"
                    titleEn="Gallery"
                  />
                </Reveal>
              )}
            </div>

            {/* 侧栏：Logo + 负责人 */}
            <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
              {enterprise.logo && (
                <div className="flex items-center justify-center border border-ink/10 bg-white px-8 py-10">
                  <Image
                    src={assetPath(enterprise.logo)}
                    alt={`${enterprise.name} Logo`}
                    width={280}
                    height={160}
                    className="max-h-32 w-auto object-contain"
                  />
                </div>
              )}

              {leader && (
                <div className="border border-ink/10 bg-white p-7">
                  <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-gold-dark">
                    <span aria-hidden="true" className="h-px w-8 bg-gold/70" />
                    Leadership
                  </p>
                  <div className="mt-6 flex items-start gap-5">
                    {leader.photo && (
                      <div className="relative aspect-[3/4] w-24 shrink-0 overflow-hidden border border-ink/10">
                        <Image
                          src={assetPath(leader.photo)}
                          alt={`${leader.name}肖像照`}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="font-serif text-xl text-ink">{leader.name}</p>
                      {leader.nameEn && leader.nameEn !== leader.name && (
                        <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-gold-dark">
                          {leader.nameEn}
                        </p>
                      )}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {leader.chamberRole && (
                          <Badge tone="gold">商会{leader.chamberRole}</Badge>
                        )}
                        {leader.companyRole && (
                          <Badge tone="pine">{leader.companyRole}</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  {leader.bio && (
                    <p className="mt-5 border-t border-ink/10 pt-5 text-sm leading-relaxed text-ink-soft">
                      {leader.bio}
                    </p>
                  )}
                </div>
              )}

              <div className="border border-ink/10 bg-white p-7 text-sm">
                <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-gold-dark">
                  <span aria-hidden="true" className="h-px w-8 bg-gold/70" />
                  Contact
                </p>
                <p className="mt-5 leading-relaxed text-ink-soft">
                  如希望与该企业开展业务合作，欢迎通过商会秘书处对接。
                </p>
                <ButtonLink
                  href="/contact"
                  variant="outline"
                  withArrow
                  className="mt-5 w-full"
                >
                  联系秘书处
                </ButtonLink>
              </div>
            </aside>
          </div>

          {/* 回纹分隔 */}
          <div className="mt-20 flex justify-center text-gold/40">
            <div className="w-36">
              <MeanderStrip />
            </div>
          </div>
        </div>
      </article>

      {/* 其他商会企业 */}
      {others.length > 0 && (
        <section className="border-t border-ink/10 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="More Enterprises"
                title="其他商会企业"
                titleEn="More from the Chamber"
              />
              <ButtonLink href="/enterprises" variant="link" withArrow className="mb-1">
                查看全部
              </ButtonLink>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {others.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.08} className="h-full">
                  <EnterpriseCard enterprise={item} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
