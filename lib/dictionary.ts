import type { Locale } from "@/lib/types";

/**
 * 界面文案字典（导航 / 页脚 / 通用按钮）。
 * 「中 / EN」切换目前作用于站点框架文案；正文内容默认中英对照排版，
 * 未来接入 CMS 后可扩展为全站双语内容切换。
 */
export const dictionary = {
  zh: {
    nav: {
      home: "首页",
      about: "关于商会",
      news: "新闻资讯",
      events: "商会活动",
      membership: "会员服务",
      business: "商务合作",
      contact: "联系我们",
    },
    common: {
      readMore: "阅读更多",
      learnMore: "了解更多",
      viewAll: "查看全部",
      viewDetails: "查看详情",
      joinUs: "加入商会",
      backTo: "返回",
      menuOpen: "打开菜单",
      menuClose: "关闭菜单",
      languageSwitch: "切换到英文",
    },
    footer: {
      quickLinks: "快速链接",
      services: "服务与政策",
      contactUs: "联系方式",
      followUs: "关注我们",
      privacy: "隐私政策",
      terms: "网站使用条款",
      membershipApply: "会员申请",
      contact: "联系我们",
      rights: "版权所有",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      news: "News",
      events: "Events",
      membership: "Membership",
      business: "Business",
      contact: "Contact",
    },
    common: {
      readMore: "Read more",
      learnMore: "Learn more",
      viewAll: "View all",
      viewDetails: "View details",
      joinUs: "Join the Chamber",
      backTo: "Back to",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      languageSwitch: "Switch to Chinese",
    },
    footer: {
      quickLinks: "Quick Links",
      services: "Services & Policies",
      contactUs: "Contact",
      followUs: "Follow Us",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      membershipApply: "Membership Application",
      contact: "Contact Us",
      rights: "All rights reserved",
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Locale];
