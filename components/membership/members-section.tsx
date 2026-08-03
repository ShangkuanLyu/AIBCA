import { MemberDirectory } from "@/components/membership/member-directory";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { memberIndustries, members } from "@/data/members";

/** 会员服务 · 会员企业展示（#members 锚点区块） */
export function MembersSection() {
  return (
    <section id="members" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Member Directory"
          title="会员企业展示"
          titleEn="Our Members"
          description="以下为部分会员企业与个人会员，涵盖地产、金融、贸易、教育、文化等多个行业。"
          align="center"
        />
        <Reveal className="mt-12">
          <MemberDirectory members={members} industries={memberIndustries} />
        </Reveal>
        <p className="mt-10 text-center text-xs text-ink-soft/70">
          会员名录持续更新中；如需调整展示信息，请联系商会秘书处。
        </p>
      </div>
    </section>
  );
}
