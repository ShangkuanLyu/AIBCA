import { HorizonLines } from "@/components/decor/horizon-lines";
import { MeanderStrip } from "@/components/decor/meander-strip";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/** 新闻列表页 · 底部订阅 / 联系 CTA（深墨绿小区块，引导至联系页） */
export function NewsCta() {
  return (
    <section className="relative overflow-hidden bg-pine-800 text-cream">
      <div
        aria-hidden="true"
        className="bg-meander-faint absolute inset-0 opacity-50"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 text-gold/40">
        <MeanderStrip />
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 text-gold">
        <HorizonLines className="h-28 opacity-30" />
      </div>

      <Reveal className="relative mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28">
        <SectionHeading
          eyebrow="Stay Informed"
          title="订阅商会资讯"
          description="如需定期获取商会新闻、活动通知与市场资讯，欢迎联系秘书处加入会员通讯名单，或关注商会微信公众号。"
          align="center"
          dark
        />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/contact" variant="gold" withArrow>
            联系秘书处
          </ButtonLink>
          <ButtonLink href="/events" variant="dark">
            查看近期活动
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
