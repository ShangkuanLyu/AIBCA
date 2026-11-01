import type { Metadata } from "next";
import {
  Inter,
  Libre_Baskerville,
  Noto_Sans_SC,
  Noto_Serif_SC,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/language-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { site } from "@/lib/site";

/* 英文正文 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* 英文标题（衬线） */
const baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-baskerville",
  display: "swap",
});

/* 中文正文 */
const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  display: "swap",
  preload: false,
});

/* 中文标题（衬线） */
const notoSerifSC = Noto_Serif_SC({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif-sc",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nameZh} | ${site.nameEn}`,
    template: `%s | ${site.nameZh}`,
  },
  description: site.description,
  keywords: [
    "澳大利亚内蒙古商会",
    "Australian Inner Mongolia Chamber of Commerce",
    "中澳经贸",
    "内蒙古",
    "墨尔本 商会",
    "Australia China trade",
  ],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_AU",
    siteName: site.nameZh,
    title: `${site.nameZh} | ${site.nameEn}`,
    description: site.description,
  },
  robots: { index: site.indexable, follow: site.indexable },
};

/** 结构化数据：机构信息（SEO） */
function OrganizationJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.nameEn,
    alternateName: site.nameZh,
    url: site.url,
    email: site.contact.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Level 8, 167-169 Queen Street",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "3000",
      addressCountry: "AU",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${baskerville.variable} ${notoSansSC.variable} ${notoSerifSC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <LanguageProvider>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
