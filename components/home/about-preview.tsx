import { ButtonLink } from "@/components/ui/button-link";
import { ImageFrame } from "@/components/ui/image-frame";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

/** 首页 · 商会简介（左右分栏） */
export function AboutPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="About the Chamber"
            title="连接两地资源，共创长期价值"
            titleEn="Bridging Australia and Inner Mongolia"
          />
          <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-ink-soft">
            <p>
              澳大利亚内蒙古商会致力于搭建澳大利亚与内蒙古之间的经贸、文化及社会交流平台，为会员企业提供资源对接、市场资讯、商务合作与公共关系支持。
            </p>
            <p>
              商会成立于 2014
              年，总部设于墨尔本，会员企业覆盖教育、地产、金融、矿产、医疗与大健康等多个行业，是连接两地政府机构、商协会与企业的重要桥梁。
            </p>
          </div>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink/10 pt-6 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-gold-dark">
                Established
              </dt>
              <dd className="mt-1 font-serif text-lg">成立于 2014 年</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-gold-dark">
                Headquarters
              </dt>
              <dd className="mt-1 font-serif text-lg">澳大利亚 · 墨尔本</dd>
            </div>
          </dl>
          <div className="mt-9">
            <ButtonLink href="/about" variant="outline" withArrow>
              了解更多
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {/* TODO(上线前)：替换为商会正式活动照片 */}
          <ImageFrame
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
            alt="商会成员正式商务会议交流现场"
            aspect="aspect-[4/3]"
          />
        </Reveal>
      </div>
    </section>
  );
}
