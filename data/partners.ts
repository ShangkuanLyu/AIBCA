/**
 * 合作机构名录。
 *
 * 数据来源分两类：
 * 1）老站真实机构 —— 鄂尔多斯市总商会（与本会缔结友好商会）、澳大利亚国际
 *    商会与澳中工商委员会（ACBC）维州分会（2016 中国包头—澳大利亚经贸合作
 *    洽谈会的承办与支持单位），以及各级贸促会驻澳大利亚代表处；member 类中
 *    带 Logo 的四家企业为老站「会员企业」栏目独立立页展示的会员。上述机构
 *    暂无 Logo 图片，由组件以文字标识占位。
 * 2）示例数据 —— 其余条目名称多取自老站历年活动的赞助商与合作企业名单，
 *    个别为占位示例（如维多利亚州多元文化类机构）。示例条目的机构名称、类别
 *    与网址上线前须逐一核实并替换。
 *
 * member 类条目与 data/members.ts 中的会员条目保持 id 与名称一致。
 * 接入 CMS 后由 CMS 数据源替代本文件。
 */

import type { Partner, PartnerCategory } from "@/lib/types";

/** 合作机构名录 */
export const partners: Partner[] = [
  /* ---------------------- 战略合作机构 ---------------------- */
  {
    // 老站真实机构：2019 年与本会缔结友好商会
    id: "ordos-chamber-of-commerce",
    name: "鄂尔多斯市总商会",
    nameEn: "Ordos Chamber of Commerce",
    category: "strategic",
  },
  {
    // 老站真实机构：2016 中国包头—澳大利亚经贸合作洽谈会承办单位
    id: "australian-international-chamber-of-commerce",
    name: "澳大利亚国际商会",
    category: "strategic",
  },
  {
    // 老站真实机构：2016 经贸合作洽谈会支持单位
    id: "acbc-victoria",
    name: "澳中工商委员会（ACBC）维州分会",
    nameEn: "Australia China Business Council (Victoria)",
    category: "strategic",
  },
  {
    id: "ccpit-inner-mongolia-australia",
    name: "内蒙古自治区贸促会（澳大利亚代表处）",
    nameEn: "CCPIT Inner Mongolia (Australia Representative Office)",
    category: "strategic",
  },
  {
    id: "inner-mongolia-cic",
    name: "内蒙古自治区国际商会",
    nameEn: "Inner Mongolia Chamber of International Commerce",
    category: "strategic",
  },
  {
    id: "oceania-commerce-industry-committee",
    name: "大洋洲工商业委员会",
    nameEn: "Oceania Commerce and Industry Committee",
    category: "strategic",
  },

  /* ------------------ 政府及社区合作单位 ------------------ */
  {
    id: "ccpit-hohhot-australia",
    name: "呼和浩特市贸促会驻澳大利亚代表处",
    nameEn: "CCPIT Hohhot Representative Office in Australia",
    category: "government",
  },
  {
    id: "ccpit-baotou-australia",
    name: "包头市贸促会驻澳大利亚代表处",
    nameEn: "CCPIT Baotou Representative Office in Australia",
    category: "government",
  },
  {
    id: "ccpit-ordos-australia",
    name: "鄂尔多斯市贸促会驻澳大利亚代表处",
    nameEn: "CCPIT Ordos Representative Office in Australia",
    category: "government",
  },
  {
    id: "ccpit-alxa-australia",
    name: "阿拉善盟贸促会驻澳大利亚代表处",
    nameEn: "CCPIT Alxa League Representative Office in Australia",
    category: "government",
  },
  {
    // 占位条目：维多利亚州多元文化社区类机构，上线前确认具体合作单位
    id: "victorian-multicultural-commission",
    name: "维多利亚州多元文化委员会",
    nameEn: "Victorian Multicultural Commission",
    category: "government",
  },

  /* ------------------------ 赞助机构 ------------------------ */
  {
    id: "panorama-investment-group",
    name: "Panorama Investment Group",
    nameEn: "Panorama Investment Group",
    category: "sponsor",
  },
  {
    id: "zinzino",
    name: "ZINZINO",
    nameEn: "ZINZINO",
    category: "sponsor",
    website: "https://www.zinzino.com",
  },
  {
    id: "zank-co-fund",
    name: "ZANK & CO 基金",
    nameEn: "ZANK & CO Fund",
    category: "sponsor",
  },

  /* ---------------------- 商会会员企业 ---------------------- */
  {
    // 以下四家为老站「会员企业」栏目独立立页展示的真实会员，Logo 取自老站
    id: "dahua-times-media-group",
    name: "大华时代传媒集团",
    nameEn: "Australian Chinese News",
    category: "member",
    logo: "/images/members/1207-00.jpg",
    website: "http://www.acnews.me",
  },
  {
    id: "prince-migration-education",
    name: "普林斯移民留学事务所",
    nameEn: "Prince Migration & Education",
    category: "member",
    logo: "/images/members/1198-00.jpg",
    website: "http://www.princemigration.com",
  },
  {
    id: "fortune-link-group",
    name: "澳世汇集团",
    nameEn: "Fortune Link Group",
    category: "member",
    // 老站提供的是深蓝底宣传横幅而非独立 Logo，故不设 logo（见 data/members.ts 说明）。
    // 老站登记的官网域名亦已注销（DNS 无解析），故不设 website。
    // TODO(上线前)：向该会员索取标准版 Logo 与现用官网后补回。
  },
  {
    id: "anz-health-products",
    name: "澳大利亚新西兰健康产业集团",
    nameEn: "Australia & New Zealand Health Products Ltd",
    category: "member",
    logo: "/images/members/1186-00.jpg",
  },
  {
    id: "puya-culture",
    name: "普亚文化",
    nameEn: "Puya Culture",
    category: "member",
  },
  {
    id: "doudou-oat-noodle-village",
    name: "豆豆莜面村",
    nameEn: "Doudou Oat Noodle Village",
    category: "member",
  },
  {
    id: "mornington-australia",
    name: "美宁顿澳大利亚有限公司",
    nameEn: "Mornington Australia Pty Ltd",
    category: "member",
  },
];

/** 按分类筛选合作机构 */
export function getPartnersByCategory(category: PartnerCategory): Partner[] {
  return partners.filter((partner) => partner.category === category);
}
