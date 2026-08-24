/**
 * 会员企业与个人会员名录。
 *
 * 数据来源分两类：
 * 1）老站真实会员企业 —— 商会老官网（aibca.com.au）「会员企业」栏目独立
 *    立页展示的四家企业：大华时代传媒集团、普林斯移民留学事务所、澳世汇
 *    集团、澳大利亚新西兰健康产业集团。名称、行业、简介与官网均据老站原文
 *    整理（去除推广性表述），Logo 为老站原图。
 * 2）示例数据 —— 其余条目。其中部分企业名称取自老站历年活动的赞助商与合作
 *    企业名单（如 Panorama Investment Group、ZINZINO、豆豆莜面村、ZANK & CO
 *    基金、普亚文化、美宁顿澳大利亚有限公司），简介为占位描述；其余企业条目
 *    与全部个人会员条目为虚构占位。示例条目的企业信息、简介与官网链接上线前
 *    须逐一核实并替换；Logo 暂缺，由组件以文字标识占位。
 *
 * 接入 CMS 后由 CMS 数据源替代本文件。
 */

import type { Member } from "@/lib/types";

/** 会员名录 */
export const members: Member[] = [
  /* ------------- 老站真实会员企业（aibca.com.au 会员企业栏目） ------------- */
  {
    id: "dahua-times-media-group",
    name: "大华时代传媒集团",
    nameEn: "Australian Chinese News",
    industry: "传媒",
    tier: "director",
    logo: "/images/members/1207-00.jpg",
    description:
      "成立于 1995 年的澳大利亚中文媒体机构，每周出版《大华时代》《大华周末》《大华地产》三份报纸，并运营中文新闻网站 acnews.me 及微博、微信官方账号。业务范围还包括企业视频拍摄与制作。",
    website: "http://www.acnews.me",
  },
  {
    id: "prince-migration-education",
    name: "普林斯移民留学事务所",
    nameEn: "Prince Migration & Education",
    industry: "移民留学",
    tier: "corporate",
    logo: "/images/members/1198-00.jpg",
    description:
      "位于墨尔本中央商务区柯林斯街 303 号的移民留学机构，由持牌移民代理与咨询顾问团队组成，提供澳大利亚签证、留学与投资咨询服务，并为赴澳定居客户提供资产配置、子女教育与安居生活方面的配套咨询。",
    website: "http://www.princemigration.com",
  },
  {
    id: "fortune-link-group",
    name: "澳世汇集团",
    nameEn: "Fortune Link Group",
    industry: "地产",
    // 老站该会员页提供的是深蓝底宣传横幅（public/images/members/1190-00.jpg），
    // 并非可置于白色卡片的独立 Logo，故此处不设 logo，由组件以文字标识展示。
    // TODO(上线前)：向该会员索取标准版 Logo（透明或白底）后启用。
    tier: "corporate",
    description:
      "持牌房地产代理机构，业务遍及墨尔本，提供房屋与土地套餐、楼花及现房销售、物业管理与住宅项目开发服务。同时协助客户处理房屋转让与按揭方面的咨询。",
    // 老站登记的官网 www.fortunelinkgroup.com.au 域名已注销（DNS 无解析），
    // 故此处留空。TODO(上线前)：向该会员核实现用官网后补回。
  },
  {
    id: "anz-health-products",
    name: "澳大利亚新西兰健康产业集团",
    nameEn: "Australia & New Zealand Health Products Ltd",
    industry: "大健康",
    tier: "corporate",
    logo: "/images/members/1186-00.jpg",
    description:
      "建设澳大利亚与新西兰保健品及食品的线上线下分销渠道网络，为零售门店提供一站式库存与配套服务，产品涵盖奶粉与婴幼儿配方、维生素、化妆护肤品、蜂蜜、食品、葡萄酒及羊毛制品等。集团由中外团队组成，并在中国设有运营团队。",
  },

  /* ---------------------------- 示例数据（占位） ---------------------------- */
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

/**
 * 去重后的行业列表（由会员名录派生，顺序与首次出现一致）。
 * 新增会员企业带来的新行业（传媒、移民留学等）会自动并入。
 */
export const memberIndustries: string[] = Array.from(
  new Set(members.map((member) => member.industry))
);
