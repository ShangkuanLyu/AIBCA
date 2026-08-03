import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "网站使用条款",
  description: `${site.nameZh}网站使用条款。`,
};

/**
 * 网站使用条款占位页。
 * TODO(上线前)：由法律顾问提供正式文本。
 */
export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terms of Use"
        title="网站使用条款"
        titleEn="Terms of Use"
      />
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft">
          <p>
            本页面为网站使用条款占位内容。正式上线前，请由法律顾问出具正式文本，
            说明本网站内容的知识产权归属、允许的使用方式、免责声明及适用法律等条款。
          </p>
          <p>如有疑问，请联系：{site.contact.email}。</p>
        </div>
      </section>
    </>
  );
}
