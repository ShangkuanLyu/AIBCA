import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

interface Tier {
  key: string;
  name: string;
  nameEn: string;
  positioning: string;
  audience: string;
  highlights: string[];
  /** 深墨绿底强调卡 */
  featured?: boolean;
}

const TIERS: Tier[] = [
  {
    key: "director",
    name: "理事会员",
    nameEn: "Director",
    positioning:
      "商会核心治理成员，深度参与商会决策、重大活动与对外合作事务。",
    audience: "具有行业代表性、愿意投入资源支持商会发展的企业负责人及机构。",
    highlights: [
      "出席理事会，参与商会重大事务决策",
      "重大活动优先冠名、赞助与致辞权益",
      "专属资源对接与两地高层交流机会",
    ],
  },
  {
    key: "corporate",
    name: "企业会员",
    nameEn: "Corporate",
    positioning:
      "面向企业的标准会员类别，全面享有商会资源对接、资讯与活动服务。",
    audience: "在澳大利亚或内蒙古开展业务、有意拓展中澳市场的各类企业。",
    highlights: [
      "会员企业名录展示与品牌推广",
      "商会各类活动会员席位与专属价格",
      "商务资讯与合作机会定向推送",
    ],
    featured: true,
  },
  {
    key: "individual",
    name: "个人会员",
    nameEn: "Individual",
    positioning:
      "面向专业人士与创业者的个人类别，共享商会网络与资讯服务。",
    audience: "律师、会计师、创业者等关注中澳经贸与文化交流的专业人士。",
    highlights: [
      "参与商会活动，融入会员社交网络",
      "获取行业资讯与两地政策动态",
      "对接会员企业与专业服务资源",
    ],
  },
];

/** 会员服务 · 会员类型（三张对比卡，中间企业会员深墨绿强调） */
export function Tiers() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Membership Types"
          title="会员类型"
          titleEn="Choose Your Membership"
          description="商会设理事会员、企业会员与个人会员三类，欢迎根据自身情况选择合适的会员类别。"
          align="center"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.key} delay={i * 0.08} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col border p-8 transition-all duration-300 hover:-translate-y-1",
                  tier.featured
                    ? "border-pine-800 bg-pine-800 text-cream"
                    : "border-ink/10 bg-white hover:border-gold/60",
                )}
              >
                <div>
                  <Badge tone={tier.featured ? "cream" : "gold"}>
                    {tier.nameEn}
                  </Badge>
                </div>
                <h3 className="mt-5 font-serif text-2xl">{tier.name}</h3>
                <p
                  className={cn(
                    "mt-4 text-sm leading-relaxed",
                    tier.featured ? "text-cream/75" : "text-ink-soft",
                  )}
                >
                  {tier.positioning}
                </p>

                <div
                  className={cn(
                    "mt-6 border-t pt-6",
                    tier.featured ? "border-cream/15" : "border-ink/10",
                  )}
                >
                  <p
                    className={cn(
                      "text-[11px] font-medium uppercase tracking-[0.2em]",
                      tier.featured ? "text-gold-light" : "text-gold-dark",
                    )}
                  >
                    适合对象
                  </p>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed",
                      tier.featured ? "text-cream/75" : "text-ink-soft",
                    )}
                  >
                    {tier.audience}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {tier.highlights.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          tier.featured ? "text-gold-light" : "text-gold-dark",
                        )}
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <span
                        className={tier.featured ? "text-cream/85" : "text-ink"}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className={cn(
                    "mt-auto border-t pt-6",
                    tier.featured ? "border-cream/15" : "border-ink/10",
                  )}
                >
                  {/* TODO(上线前)：确认并替换各类会员年费标准 */}
                  <p
                    className={cn(
                      "text-sm",
                      tier.featured ? "text-cream/70" : "text-ink-soft",
                    )}
                  >
                    年费
                    <span
                      className={cn(
                        "ml-2 font-serif text-2xl",
                        tier.featured ? "text-cream" : "text-ink",
                      )}
                    >
                      [待定]
                    </span>
                  </p>
                  <ButtonLink
                    href="#apply"
                    variant={tier.featured ? "gold" : "outline"}
                    className="mt-5 w-full"
                  >
                    申请此类会员
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
