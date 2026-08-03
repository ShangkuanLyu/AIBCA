import { Award, Handshake, ShieldCheck, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const VALUES = [
  {
    Icon: ShieldCheck,
    title: "诚信",
    titleEn: "Integrity",
    description: "以诚立会，恪守承诺，坚持合规透明的运作方式。",
  },
  {
    Icon: Award,
    title: "专业",
    titleEn: "Professionalism",
    description: "以专业的知识与经验，为会员提供切实可靠的服务。",
  },
  {
    Icon: Handshake,
    title: "合作",
    titleEn: "Collaboration",
    description: "联合两地政府机构、商协会与企业，构建开放的合作网络。",
  },
  {
    Icon: TrendingUp,
    title: "共赢",
    titleEn: "Mutual Success",
    description: "与会员和合作伙伴共享机遇，实现长期共同发展。",
  },
] as const;

/** 关于页 · 核心价值（四项细边框卡片） */
export function CoreValues() {
  return (
    <section id="values" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Core Values"
          title="核心价值"
          titleEn="What We Stand For"
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ Icon, title, titleEn, description }, i) => (
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
