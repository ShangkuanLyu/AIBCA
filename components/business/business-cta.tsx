import { HorizonLines } from "@/components/decor/horizon-lines";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/** 商务合作 · 发布合作需求 CTA（深墨绿背景） */
export function BusinessCta() {
  return (
    <section
      id="publish"
      className="relative scroll-mt-24 overflow-hidden bg-pine-800 text-cream"
    >
      <div
        aria-hidden="true"
        className="bg-meander-faint absolute inset-0 opacity-50"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 text-gold">
        <HorizonLines className="h-28 opacity-30" />
      </div>

      <Reveal className="relative mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Post Your Opportunity"
          title="发布合作需求"
          description="企业可向商会秘书处发布投资、采购与合作需求。经初步核实后，商会将在会员网络及两地合作渠道中协助匹配与推介。"
          align="center"
          dark
        />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/contact" variant="dark" withArrow>
            联系商务团队
          </ButtonLink>
          {/* TODO(上线前)：替换为真实合作手册文件地址 */}
          <ButtonLink href="#" variant="gold">
            下载合作手册
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
