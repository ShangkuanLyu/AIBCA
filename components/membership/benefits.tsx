import {
  CalendarCheck,
  Landmark,
  Megaphone,
  Network,
  Newspaper,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const BENEFITS = [
  {
    Icon: Network,
    title: "资源对接",
    titleEn: "Business Connections",
    description:
      "对接澳大利亚与内蒙古两地的企业、机构与专业服务资源，促成会员之间的业务合作。",
  },
  {
    Icon: Newspaper,
    title: "市场资讯",
    titleEn: "Market Insight",
    description:
      "定期获取中澳经贸政策、行业动态与市场信息，为商业决策提供参考。",
  },
  {
    Icon: CalendarCheck,
    title: "活动优先",
    titleEn: "Priority Access",
    description:
      "优先受邀出席商会论坛、晚宴、代表团考察等各类活动，并享有会员专属席位与价格。",
  },
  {
    Icon: Landmark,
    title: "政企渠道",
    titleEn: "Government Relations",
    description:
      "借助商会平台，与两地政府部门、商协会及行业组织建立稳定的沟通渠道。",
  },
  {
    Icon: Megaphone,
    title: "品牌展示",
    titleEn: "Brand Exposure",
    description:
      "通过商会官网、活动现场及媒体渠道展示会员企业品牌，提升行业影响力。",
  },
  {
    Icon: ShieldCheck,
    title: "专业支持",
    titleEn: "Professional Support",
    description:
      "对接法律、会计、移民等专业服务机构，为会员在澳发展提供可信赖的支持。",
  },
] as const;

/** 会员服务 · 会员权益（六项细边框卡片） */
export function Benefits() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Member Benefits"
          title="会员权益"
          titleEn="Why Join Us"
          description="商会立足会员需求，围绕资源、资讯、活动与专业服务，为会员提供持续、务实的支持。"
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ Icon, title, titleEn, description }, i) => (
            <Reveal key={title} delay={i * 0.06} className="h-full">
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
