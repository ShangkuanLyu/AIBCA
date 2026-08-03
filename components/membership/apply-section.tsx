import { ApplicationForm } from "@/components/membership/application-form";
import { MeanderStrip } from "@/components/decor/meander-strip";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/** 会员服务 · 入会申请（#apply 锚点区块） */
export function ApplySection() {
  return (
    <section id="apply" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Apply for Membership"
          title="入会申请"
          titleEn="Membership Application"
          description="请填写并提交以下申请表，商会秘书处收到申请后将尽快与您联系。"
          align="center"
        />
        <div aria-hidden="true" className="mx-auto mt-8 w-36 text-gold/60">
          <MeanderStrip />
        </div>
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <ApplicationForm />
        </Reveal>
      </div>
    </section>
  );
}
