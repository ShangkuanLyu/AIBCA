import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/** 项目对接三步流程 */
const STEPS = [
  {
    number: "01",
    title: "提交需求",
    titleEn: "Submit Your Brief",
    description:
      "通过联系页面或邮件向商会秘书处提交合作意向，说明所在行业、合作标的与期望的合作方式。",
  },
  {
    number: "02",
    title: "商会评估匹配",
    titleEn: "Assessment & Matching",
    description:
      "秘书处对需求进行初步评估，在会员企业与两地合作网络中筛选合适的匹配对象。",
  },
  {
    number: "03",
    title: "对接洽谈",
    titleEn: "Introduction & Negotiation",
    description:
      "商会安排双方对接洽谈，并可协助引荐专业机构；后续合作条件由双方自主商定。",
  },
] as const;

/** 商务合作 · 项目对接（克制的三步流程条） */
export function MatchingProcess() {
  return (
    <section id="process" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Project Matching"
          title="项目对接"
          titleEn="A Simple Three-step Process"
          align="center"
        />

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <li key={step.number} className="h-full">
              <Reveal
                delay={i * 0.1}
                className="relative h-full border-t border-ink/15 pt-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-px w-12 bg-gold"
                />
                <span className="font-serif text-3xl text-gold-dark">
                  {step.number}
                </span>
                <h3 className="mt-4 font-serif text-xl">{step.title}</h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gold-dark">
                  {step.titleEn}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-center text-xs leading-relaxed text-ink-soft">
          商会仅提供信息对接与引荐服务，不参与交易，也不对合作结果作任何承诺；涉及投资与大宗交易的事项，请在专业机构支持下审慎决策。
        </p>
      </div>
    </section>
  );
}
