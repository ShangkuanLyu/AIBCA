import { Quote } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { ImageFrame } from "@/components/ui/image-frame";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * 首页 · 会长寄语。
 * TODO(上线前)：替换正式商务肖像、会长姓名（[会长姓名]）与寄语全文。
 */
export function PresidentMessage() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-4">
          <ImageFrame
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
            alt="商会会长正式商务肖像（占位图）"
            aspect="aspect-[3/4]"
            offset="tl"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="President's Message"
              title="会长寄语"
              titleEn="A Message from the President"
            />
            <div className="relative mt-8 border-l-2 border-gold/50 pl-6 md:pl-8">
              <Quote
                aria-hidden="true"
                className="absolute -left-4 -top-3 h-7 w-7 bg-ivory p-1 text-gold"
                strokeWidth={1.5}
              />
              <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft">
                <p>
                  自 2014
                  年成立以来，商会始终以促进澳大利亚与内蒙古之间的经贸合作与人文交流为使命。十余年间，我们见证了会员企业在两地市场的成长，也见证了一个更加开放、互信的合作网络逐步成形。
                </p>
                <p>
                  面向未来，商会将继续加强自身建设，广泛联系两地政府机构、商协会与企业家朋友，为会员提供更加专业、务实的服务，让我们的友谊与事业更上一个台阶。
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
              <div>
                {/* TODO(上线前)：替换为会长真实姓名（与 data/board.ts 保持一致） */}
                <p className="font-serif text-xl">[会长姓名]</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-gold-dark">
                  President · 澳大利亚内蒙古商会
                </p>
              </div>
              <ButtonLink href="/about#president" variant="outline" withArrow>
                阅读完整寄语
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
