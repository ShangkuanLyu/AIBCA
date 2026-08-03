/**
 * 示例数据：会员企业与个人会员。
 *
 * 本文件为示例数据，部分企业名称基于商会老官网（aibca.com.au）公开内容
 * （历年活动赞助商与合作企业）整理，其余为虚构占位条目。企业信息、简介
 * 与官网链接上线前须逐一核实并替换；Logo 暂缺，由组件以文字标识占位；
 * 接入 CMS 后由 CMS 数据源替代本文件。
 */

import type { Member } from "@/lib/types";

/** 会员名录 */
export const members: Member[] = [
  {
    id: "panorama-investment-group",
    name: "Panorama Investment Group",
    nameEn: "Panorama Investment Group",
    industry: "地产",
    tier: "director",
    description:
      "总部位于墨尔本的综合地产投资与开发企业，业务涵盖住宅开发、商业物业与项目投资。",
  },
  {
    id: "zank-co-fund",
    name: "ZANK & CO 基金",
    nameEn: "ZANK & CO Fund",
    industry: "金融",
    tier: "director",
    description:
      "立足墨尔本的基金管理机构，为投资者提供地产基金及跨境投资管理服务。",
  },
  {
    id: "mornington-australia",
    name: "美宁顿澳大利亚有限公司",
    nameEn: "Mornington Australia Pty Ltd",
    industry: "贸易",
    tier: "director",
    description:
      "从事中澳双边进出口业务的综合贸易企业，代理多类澳大利亚优质产品。",
  },
  {
    id: "puya-culture",
    name: "普亚文化",
    nameEn: "Puya Culture",
    industry: "文化",
    tier: "corporate",
    description:
      "专注于中澳文化艺术交流的文化机构，策划承办各类演出与文化活动。",
  },
  {
    id: "doudou-oat-noodle-village",
    name: "豆豆莜面村",
    nameEn: "Doudou Oat Noodle Village",
    industry: "餐饮",
    tier: "corporate",
    description:
      "以内蒙古莜面及西北风味为特色的餐饮品牌，致力于向澳大利亚食客介绍家乡饮食文化。",
  },
  {
    id: "zinzino",
    name: "ZINZINO",
    nameEn: "ZINZINO",
    industry: "大健康",
    tier: "corporate",
    description:
      "源自北欧的健康营养品牌，在澳大利亚提供个性化营养检测与膳食补充产品。",
    website: "https://www.zinzino.com",
  },
  {
    id: "aoya-international-education",
    name: "澳亚国际教育集团",
    nameEn: "Aus-Asia International Education Group",
    industry: "教育",
    tier: "corporate",
    description:
      "提供留学申请、语言培训与中澳校际交流服务的教育机构。",
  },
  {
    id: "melbourne-mineral-resources",
    name: "墨尔本矿业资源有限公司",
    nameEn: "Melbourne Mineral Resources Pty Ltd",
    industry: "矿产",
    tier: "corporate",
    description:
      "从事矿产资源投资与贸易的企业，关注中澳矿业领域的项目合作机会。",
  },
  {
    id: "kangze-medical-group",
    name: "康泽医疗集团",
    nameEn: "Kangze Medical Group",
    industry: "医疗",
    tier: "corporate",
    description:
      "在墨尔本运营全科诊所与康复服务的医疗机构，长期服务本地华人社区。",
  },
  {
    id: "southern-cross-property",
    name: "南十字星置业",
    nameEn: "Southern Cross Property Group",
    industry: "地产",
    tier: "corporate",
    description:
      "深耕墨尔本市场的置业服务公司，提供住宅买卖、租赁与物业管理服务。",
  },
  {
    id: "grassland-bridge-trading",
    name: "草原之桥国际贸易",
    nameEn: "Grassland Bridge International Trading",
    industry: "贸易",
    tier: "corporate",
    description:
      "专注于内蒙古特色农畜产品出口与澳大利亚健康食品进口的贸易企业。",
  },
  {
    id: "zhang-wei-cpa",
    name: "张伟（注册会计师）",
    nameEn: "Zhang Wei, CPA",
    industry: "金融",
    tier: "individual",
    description:
      "澳大利亚注册会计师，为中小企业及个人提供税务与财务咨询服务。",
  },
  {
    id: "narengaowa",
    name: "娜仁高娃（文化艺术策划人）",
    nameEn: "Narengaowa",
    industry: "文化",
    tier: "individual",
    description:
      "旅澳文化艺术策划人，长期参与中澳民族音乐与艺术交流活动。",
  },
];

/** 去重后的行业列表（由会员名录派生，顺序与首次出现一致） */
export const memberIndustries: string[] = Array.from(
  new Set(members.map((member) => member.industry))
);
