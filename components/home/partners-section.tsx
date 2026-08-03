import { PartnerTile } from "@/components/cards/partner-tile";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPartnersByCategory } from "@/data/partners";

/** 首页 · 合作机构与会员（灰度 Logo 墙，悬停恢复） */
export function PartnersSection() {
  const strategic = getPartnersByCategory("strategic");
  const government = getPartnersByCategory("government");
  const tiles = [...strategic, ...government].slice(0, 8);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our Network"
          title="合作机构与会员"
          titleEn="Partners & Members"
          description="商会与两地政府机构、商协会及行业组织保持长期合作，共同服务于中澳企业。"
          align="center"
        />
        <Reveal className="mt-14">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {tiles.map((partner) => (
              <PartnerTile key={partner.id} partner={partner} />
            ))}
          </div>
        </Reveal>
        <div className="mt-12 text-center">
          <ButtonLink href="/membership#members" variant="link" withArrow>
            查看会员企业
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
