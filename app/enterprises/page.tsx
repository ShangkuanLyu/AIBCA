import type { Metadata } from "next";
import { EnterpriseCard } from "@/components/enterprises/enterprise-card";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { enterprises } from "@/data/enterprises";

export const metadata: Metadata = {
  title: "商会企业",
  description:
    "澳大利亚内蒙古商会会长团队企业展示：覆盖农牧业、大健康、酒业等行业，呈现商会企业在中澳两地的产业布局与合作机会。",
  alternates: { canonical: "/enterprises" },
};

/** 商会企业列表页：会长团队企业名片墙 */
export default function EnterprisesPage() {
  return (
    <>
      <PageHeader
        eyebrow="CHAMBER ENTERPRISES"
        title="商会企业"
        titleEn="Chamber Enterprises"
        description="商会会长团队成员创办或执掌的企业，覆盖农牧业、大健康、酒业等多个行业，扎根澳大利亚、连接中澳市场。"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Enterprise Directory"
            title="会长团队企业"
            titleEn="Enterprises of the Chamber Leadership"
            description="以下企业资料由各企业提供并经商会秘书处整理。点击卡片查看企业详情。"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {enterprises.map((enterprise, index) => (
              <Reveal key={enterprise.slug} delay={index * 0.08} className="h-full">
                <EnterpriseCard enterprise={enterprise} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 底部 CTA：欢迎更多会员企业展示 */}
      <section className="border-t border-ink/10 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Showcase Your Business"
              title="欢迎更多会员企业入驻展示"
              titleEn="Present Your Enterprise Through the Chamber"
              description="商会为会员企业提供官网展示、资源对接与商务合作支持。如希望展示贵企业，请与商会秘书处联系。"
            />
            <div className="flex shrink-0 flex-wrap gap-4">
              <ButtonLink href="/membership#apply" variant="primary" withArrow>
                加入商会
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                联系秘书处
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
