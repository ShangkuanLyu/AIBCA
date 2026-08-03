import { HorizonLines } from "@/components/decor/horizon-lines";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/** 首页 · 加入商会 CTA（深墨绿背景） */
export function JoinCta() {
  return (
    <section className="relative overflow-hidden bg-pine-800 text-cream">
      <div aria-hidden="true" className="bg-meander-faint absolute inset-0 opacity-50" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 text-gold">
        <HorizonLines className="h-28 opacity-30" />
      </div>

      <Reveal className="relative mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Membership"
          title="加入澳大利亚内蒙古商会"
          description="连接企业资源，拓展合作机会，参与澳大利亚与内蒙古之间的经贸及文化交流。"
          align="center"
          dark
        />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/membership" variant="dark">
            了解会员权益
          </ButtonLink>
          <ButtonLink href="/membership#apply" variant="gold" withArrow>
            提交入会申请
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
