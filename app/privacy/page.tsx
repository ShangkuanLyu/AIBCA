import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "隐私政策",
  description: `${site.nameZh}网站隐私政策。`,
};

/**
 * 隐私政策占位页。
 * TODO(上线前)：由法律顾问提供符合澳大利亚 Privacy Act 1988 的正式文本。
 */
export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy Policy"
        title="隐私政策"
        titleEn="Privacy Policy"
      />
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft">
          <p>
            本页面为隐私政策占位内容。正式上线前，请由法律顾问依据澳大利亚《Privacy
            Act 1988》及相关法规出具正式文本，说明本会如何收集、使用、储存及保护
            个人信息（包括会员申请、活动报名与网站表单所提交的信息）。
          </p>
          <p>
            如对个人信息处理有任何疑问，请联系：{site.contact.email}。
          </p>
        </div>
      </section>
    </>
  );
}
