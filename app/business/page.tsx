import type { Metadata } from "next";
import { BusinessCta } from "@/components/business/business-cta";
import { CooperationServices } from "@/components/business/cooperation-services";
import { InvestmentSectors } from "@/components/business/investment-sectors";
import { MarketInsights } from "@/components/business/market-insights";
import { MatchingProcess } from "@/components/business/matching-process";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "商务合作",
  description:
    "澳大利亚内蒙古商会商务合作：介绍内蒙古重点产业投资机会、商会的企业合作促成服务与项目对接流程，汇集两地市场资讯，欢迎企业发布投资、采购与合作需求。",
};

/** 商务合作页 */
export default function BusinessPage() {
  return (
    <>
      <PageHeader
        eyebrow="BUSINESS COOPERATION"
        title="商务合作"
        titleEn="Business Cooperation"
        description="商会发挥连接澳大利亚与内蒙古的桥梁作用，为两地企业提供投资机会信息、合作促成服务与项目对接渠道，推动务实合作落地。"
      />
      <InvestmentSectors />
      <CooperationServices />
      <MatchingProcess />
      <MarketInsights />
      <BusinessCta />
    </>
  );
}
