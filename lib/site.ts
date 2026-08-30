/**
 * 站点全局配置：名称、联系方式、导航、社交媒体。
 * 上线前请核对并替换所有标注 [待确认] / [待填写] 的内容。
 */

export const site = {
  nameZh: "澳大利亚内蒙古商会",
  nameEn: "Australian Inner Mongolia Chamber of Commerce",
  /** 英文缩写，用于 Logo 占位与紧凑场景。正式 Logo 确定后替换 */
  acronym: "AIMCC",
  tagline: "连接澳大利亚与内蒙古的商业、文化与机遇",
  taglineEn:
    "Connecting Business, Culture and Opportunity between Australia and Inner Mongolia",
  description:
    "澳大利亚内蒙古商会致力于搭建澳大利亚与内蒙古之间的经贸、文化及社会交流平台，为会员企业提供资源对接、市场资讯、商务合作与公共关系支持。",
  descriptionEn:
    "The Australian Inner Mongolia Chamber of Commerce builds bridges for trade, culture and community between Australia and Inner Mongolia, supporting members with connections, market insight and business opportunities.",
  /** 正式域名确认后替换（用于 metadata / sitemap / JSON-LD） */
  url: "https://www.aibca.com.au",

  contact: {
    // 以下信息沿用商会现有公开信息，上线前请再次核实
    addressZh: "Level 8, 167–169 Queen Street, Melbourne VIC 3000",
    addressEn: "Level 8, 167–169 Queen Street, Melbourne VIC 3000, Australia",
    email: "info@aibca.com.au",
    phone: "+61 3 9640 0566",
    phoneSecondary: "+61 3 9600 0699",
    /** 微信公众号名称占位 */
    wechat: "澳大利亚内蒙古商会",
  },

  legal: {
    abn: "[待填写]",
    incorporationNumber: "[待填写]",
  },

  social: {
    // 上线前替换为真实主页链接
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
} as const;

export interface NavItem {
  href: string;
  key:
    | "home"
    | "about"
    | "news"
    | "events"
    | "membership"
    | "enterprises"
    | "business"
    | "contact";
}

export const navItems: NavItem[] = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/news", key: "news" },
  { href: "/events", key: "events" },
  { href: "/membership", key: "membership" },
  { href: "/enterprises", key: "enterprises" },
  { href: "/business", key: "business" },
  { href: "/contact", key: "contact" },
];
