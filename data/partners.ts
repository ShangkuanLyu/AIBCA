/**
 * 示例数据：合作机构。
 *
 * 本文件为示例数据，部分机构名称基于商会老官网（aibca.com.au）公开内容
 * 整理（如各级贸促会驻澳代表处、历年活动赞助商等），个别条目为占位示例
 * （如维多利亚州多元文化类机构）。机构名称、类别与网址上线前须逐一核实
 * 并替换；Logo 暂缺，由组件以文字标识占位；接入 CMS 后由 CMS 数据源替代
 * 本文件。member 类条目与 data/members.ts 中的会员条目保持 id 与名称一致。
 */

import type { Partner, PartnerCategory } from "@/lib/types";

/** 合作机构名录 */
export const partners: Partner[] = [
  /* ---------------------- 战略合作机构 ---------------------- */
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
