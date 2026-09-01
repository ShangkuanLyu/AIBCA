import { Quote } from "lucide-react";
import { PortraitPlaceholder } from "@/components/ui/portrait-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * 关于页 · 会长寄语（完整版，供首页「阅读完整寄语」跳转）。
 * TODO(上线前)：替换正式商务肖像、会长姓名（[会长姓名]）与寄语全文。
 */
export function PresidentMessageFull() {
  return (
    <section id="president" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-4">
          {/* TODO(上线前)：商会提供会长正式商务肖像后，换回 ImageFrame 展示 */}
          <PortraitPlaceholder />
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
                  尊敬的各位会员、各界朋友：欢迎访问澳大利亚内蒙古商会。自 2014
                  年在墨尔本成立以来，商会始终以促进澳大利亚与内蒙古之间的经贸合作与人文交流为使命，与广大会员企业一道，走过了十余年的发展历程。
                </p>
                <p>
                  十余年间，商会会员企业不断壮大，行业覆盖教育、地产、金融、矿产、医疗与大健康等多个领域。我们见证了会员企业在两地市场的成长，也见证了一个更加开放、互信的合作网络逐步成形。
                </p>
                <p>
                  商会的发展离不开两地政府机构、商协会和社会各界的支持。内蒙古自治区及各盟市贸促会驻澳代表处设于本会，为两地企业的往来提供了更加顺畅的通道。我们深知，每一次合作的达成，都源于长期的信任积累。
                </p>
                <p>
                  面向未来，商会将继续加强自身建设，广泛联系中澳各界，切实做好会员服务，持续搭建专业、务实的交流平台，帮助会员企业把握两地市场机遇，实现共同发展。
                </p>
                <p>
                  我们诚挚欢迎更多认同商会宗旨的企业与个人加入，与我们携手同行，让两地的友谊与事业更上一个台阶。
                </p>
              </div>
            </div>
            <div className="mt-8">
              {/* TODO(上线前)：替换为会长真实姓名 */}
              <p className="font-serif text-xl">[会长姓名]</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-gold-dark">
                President · 澳大利亚内蒙古商会
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
