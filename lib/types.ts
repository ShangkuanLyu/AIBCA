/**
 * 全站内容类型定义。
 *
 * 所有文案字段均以中文为主（zh），英文字段以 `...En` 结尾、为可选，
 * 便于未来接入 CMS 时做完整的双语内容管理。
 */

export type Locale = "zh" | "en";

/* ------------------------------------------------------------------ */
/* 新闻                                                                */
/* ------------------------------------------------------------------ */

export type NewsCategory =
  | "chamber" // 商会动态
  | "policy" // 政策资讯
  | "business" // 商务资讯
  | "exchange" // 中澳交流
  | "member" // 会员新闻
  | "event-recap"; // 活动回顾

export interface NewsAttachment {
  label: string;
  /** 附件地址，接入 CMS 后替换为真实文件 URL */
  href: string;
}

/** 正文配图 / 活动图集中的单张图片 */
export interface ContentImage {
  /** 图片地址（本站 /images/... 或 CDN 绝对地址） */
  src: string;
  alt: string;
  /** 图片说明，显示在图片下方 */
  caption?: string;
}

export interface NewsArticle {
  slug: string;
  category: NewsCategory;
  title: string;
  titleEn?: string;
  excerpt: string;
  excerptEn?: string;
  /** ISO 日期，例如 "2024-12-19" */
  date: string;
  /** 作者或来源，例如 "商会秘书处" */
  author: string;
  source?: string;
  /** 封面图 URL —— 目前为占位图，接入 CMS 后替换 */
  coverImage: string;
  coverAlt: string;
  coverCaption?: string;
  /** 首页重点新闻 */
  featured?: boolean;
  /** 新闻列表置顶 */
  pinned?: boolean;
  /** 正文段落（简化的富文本，未来由 CMS 富文本替换） */
  body: string[];
  /** 活动图集：正文之后以网格形式展示的现场照片 */
  gallery?: ContentImage[];
  attachments?: NewsAttachment[];
  relatedSlugs?: string[];
}

/* ------------------------------------------------------------------ */
/* 活动                                                                */
/* ------------------------------------------------------------------ */

export type EventStatus =
  | "upcoming" // 即将举行
  | "open" // 开放报名
  | "full" // 名额已满
  | "past"; // 活动回顾

export type EventCategory =
  | "forum" // 商务论坛
  | "networking" // 商务社交
  | "gala" // 庆典晚宴
  | "delegation" // 代表团考察
  | "culture"; // 文化交流

export interface ChamberEvent {
  slug: string;
  title: string;
  titleEn?: string;
  category: EventCategory;
  status: EventStatus;
  /** ISO 日期 */
  date: string;
  endDate?: string;
  /** 展示用时间段，例如 "18:30 – 22:00" */
  time?: string;
  location: string;
  venue?: string;
  /** 封面图 URL —— 目前为占位图，接入 CMS 后替换 */
  coverImage: string;
  coverAlt: string;
  summary: string;
  summaryEn?: string;
  body?: string[];
  /** 往期活动的现场图集 */
  gallery?: ContentImage[];
  capacity?: string;
  price?: string;
  /** 报名链接，未来接入报名系统后替换 */
  registrationUrl?: string;
}

/** 按规范要求导出的别名（避免与 DOM 全局 Event 混淆，组件内建议使用 ChamberEvent） */
export type Event = ChamberEvent;

/* ------------------------------------------------------------------ */
/* 会员 / 合作机构 / 理事会                                            */
/* ------------------------------------------------------------------ */

export type MemberTier = "director" | "corporate" | "individual";

export interface Member {
  id: string;
  name: string;
  nameEn?: string;
  /** 所属行业，例如 "教育" "地产" "金融" */
  industry: string;
  tier: MemberTier;
  /** Logo 图片 URL；暂缺时组件会以文字标识占位 */
  logo?: string;
  description?: string;
  website?: string;
}

export type PartnerCategory =
  | "strategic" // 战略合作机构
  | "government" // 政府及社区合作单位
  | "member" // 商会会员企业
  | "sponsor"; // 赞助机构

export interface Partner {
  id: string;
  name: string;
  nameEn?: string;
  category: PartnerCategory;
  /** Logo 图片 URL；暂缺时组件会以文字标识占位 */
  logo?: string;
  website?: string;
}

export interface BoardMember {
  id: string;
  name: string;
  nameEn?: string;
  /** 职务，例如 "会长" "执行会长" "常务副会长" */
  role: string;
  roleEn?: string;
  /** 肖像照 URL —— 目前为占位图 */
  photo?: string;
  bio?: string;
  /** 排序权重，数字越小越靠前 */
  order: number;
}
