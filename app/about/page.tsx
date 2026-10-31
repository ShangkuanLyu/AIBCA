import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { AboutIntro } from "@/components/about/intro";
import { MissionVision } from "@/components/about/mission-vision";
import { CoreValues } from "@/components/about/core-values";
import { Timeline } from "@/components/about/timeline";
import { BoardSection } from "@/components/about/board-section";
import { OrgStructure } from "@/components/about/org-structure";
import { PresidentMessageFull } from "@/components/about/president-message-full";

export const metadata: Metadata = {
  title: "关于商会",
  description:
    "澳大利亚内蒙古商会成立于 2014 年，总部设于墨尔本，是在澳大利亚注册的非营利性社团组织。了解商会的使命愿景、核心价值、发展历程、理事会成员与组织架构。",
  alternates: { canonical: "/about" },
};

/** 关于商会 */
export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT THE CHAMBER"
        title="关于商会"
        titleEn="About the Chamber"
        description="搭建澳大利亚与内蒙古之间的经贸、文化及社会交流平台，为会员企业提供资源对接、市场资讯、商务合作与公共关系支持。"
      />
      <AboutIntro />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <BoardSection />
      <OrgStructure />
      <PresidentMessageFull />
    </>
  );
}
