import { Briefcase, Globe, Handshake, Landmark } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const FUNCTIONS = [
  {
    Icon: Handshake,
    title: "经贸合作",
    titleEn: "Trade & Investment",
    description: "促进澳大利亚与内蒙古企业之间的投资、贸易及产业合作。",
  },
  {
    Icon: Briefcase,
    title: "企业服务",
    titleEn: "Member Services",
    description: "为会员提供商业资源、市场信息、政策资讯和合作机会。",
  },
  {
    Icon: Landmark,
    title: "政企交流",
    titleEn: "Government Relations",
    description: "搭建企业与澳大利亚、中国及内蒙古相关机构之间的交流平台。",
  },
  {
    Icon: Globe,
    title: "文化传播",
    titleEn: "Cultural Exchange",
    description: "推动内蒙古文化、教育、旅游及社会交流在澳大利亚的发展。",
  },
] as const;

/** 首页 · 核心职能（四模块细边框卡片） */
export function Functions() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="核心职能"
          titleEn="Our Core Functions"
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FUNCTIONS.map(({ Icon, title, titleEn, description }, i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <article className="group h-full border border-ink/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60">
                <span className="flex h-12 w-12 items-center justify-center border border-gold/40 text-gold-dark transition-colors duration-300 group-hover:bg-gold/10">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-xl">{title}</h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gold-dark">
                  {titleEn}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
