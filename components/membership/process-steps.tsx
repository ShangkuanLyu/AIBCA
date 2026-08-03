import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const STEPS = [
  {
    number: "01",
    title: "提交申请",
    titleEn: "Apply",
    description: "在线填写入会申请表，或将申请材料发送至商会秘书处邮箱。",
  },
  {
    number: "02",
    title: "资格审核",
    titleEn: "Review",
    description: "秘书处对申请资料进行审核，必要时与申请人进一步沟通了解。",
  },
  {
    number: "03",
    title: "缴纳会费",
    titleEn: "Payment",
    description: "审核通过后，按所选会员类别缴纳相应年度会费。",
  },
  {
    number: "04",
    title: "正式入会",
    titleEn: "Welcome",
    description: "颁发会员证书并纳入会员名录，正式享有各项会员权益。",
  },
] as const;

/** 会员服务 · 申请流程（四步横向步骤条，衬线数字 + 金色细线） */
export function ProcessSteps() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="How to Join"
          title="申请流程"
          titleEn="Application Process"
          align="center"
        />
        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {STEPS.map((step, i) => (
            <li key={step.number}>
              <Reveal delay={i * 0.08}>
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="font-serif text-4xl leading-none text-gold-dark"
                  >
                    {step.number}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-px flex-1 bg-gold/40 md:block"
                    />
                  )}
                </div>
                <h3 className="mt-6 font-serif text-xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gold-dark">
                  {step.titleEn}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
