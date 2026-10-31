import type { Metadata } from "next";
import { ApplySection } from "@/components/membership/apply-section";
import { Benefits } from "@/components/membership/benefits";
import { MembersSection } from "@/components/membership/members-section";
import { ProcessSteps } from "@/components/membership/process-steps";
import { Tiers } from "@/components/membership/tiers";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "会员服务",
  description:
    "了解澳大利亚内蒙古商会的会员权益、会员类型与入会流程，浏览会员企业名录，并在线提交入会申请。",
  alternates: { canonical: "/membership" },
};

/** 会员服务页 */
export default function MembershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="MEMBERSHIP"
        title="会员服务"
        titleEn="Membership"
        description="商会为各类会员提供资源对接、市场资讯与商务合作支持。欢迎认同商会宗旨的企业与个人加入，共同参与澳大利亚与内蒙古之间的经贸与文化交流。"
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="#apply" variant="gold" withArrow>
            提交入会申请
          </ButtonLink>
          <ButtonLink href="#members" variant="dark">
            查看会员企业
          </ButtonLink>
        </div>
      </PageHeader>

      <Benefits />
      <Tiers />
      <ProcessSteps />
      <MembersSection />
      <ApplySection />
    </>
  );
}
