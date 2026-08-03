import { ButtonLink } from "@/components/ui/button-link";
import type { ChamberEvent } from "@/lib/types";

/**
 * 活动详情 · 报名区块。
 * 按活动状态展示不同引导：
 * open — 立即报名；full — 候补登记；upcoming — 报名即将开放；past — 已结束。
 */
export function RegistrationPanel({ event }: { event: ChamberEvent }) {
  // TODO(上线前)：registrationUrl 目前为占位链接（指向 /contact），
  // 接入正式报名系统后替换为真实报名地址。
  const registrationHref = event.registrationUrl ?? "/contact";
  const isExternal = /^https?:\/\//.test(registrationHref);

  return (
    <div className="border border-ink/10 bg-white p-8 md:p-10">
      <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-gold-dark">
        <span aria-hidden="true" className="h-px w-8 bg-gold/70" />
        Registration
      </p>
      <h2 className="mt-4 font-serif text-2xl text-ink">报名参与</h2>

      {event.status === "open" && (
        <>
          <p className="mt-3 text-[15px] font-medium text-pine-800">
            本场活动现正开放报名
          </p>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            名额有限，请尽早完成报名。报名经商会秘书处确认后，将向参会人员发送参会通知；如有疑问，欢迎与秘书处联系。
          </p>
          <div className="mt-7">
            <ButtonLink
              href={registrationHref}
              variant="primary"
              withArrow
              external={isExternal}
            >
              立即报名
            </ButtonLink>
          </div>
        </>
      )}

      {event.status === "full" && (
        <>
          <p className="mt-3 text-[15px] font-medium text-ink">
            名额已满，可加入候补
          </p>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            本场活动报名名额已满。如仍有意参加，可联系商会秘书处进行候补登记，出现空位时将按登记顺序依次通知。
          </p>
          <div className="mt-7">
            <ButtonLink href="/contact" variant="outline" withArrow>
              联系秘书处候补登记
            </ButtonLink>
          </div>
        </>
      )}

      {event.status === "upcoming" && (
        <>
          <p className="mt-3 text-[15px] font-medium text-ink">报名即将开放</p>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            本场活动的报名安排将由商会秘书处另行公布，敬请留意商会网站及微信公众号通知；如需提前登记意向，可与秘书处联系。
          </p>
          <div className="mt-7">
            <ButtonLink href="/contact" variant="outline" withArrow>
              咨询秘书处
            </ButtonLink>
          </div>
        </>
      )}

      {event.status === "past" && (
        <>
          <p className="mt-3 text-[15px] font-medium text-ink">
            本场活动已结束
          </p>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            感谢各界嘉宾与会员的支持与参与。活动回顾及相关报道，请见商会新闻栏目。
          </p>
          <div className="mt-7">
            <ButtonLink href="/news" variant="outline" withArrow>
              查看活动回顾
            </ButtonLink>
          </div>
        </>
      )}
    </div>
  );
}
