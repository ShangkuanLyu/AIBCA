/**
 * 示例数据：理事会成员。
 *
 * 本文件为示例数据，名单部分基于商会老官网（aibca.com.au）公开内容整理，
 * 即 2024 年 11 月就职的第二届理事会名单。人名、职务、简介与照片均为
 * 占位内容，上线前须逐一核实并替换；接入 CMS 后由 CMS 数据源替代本文件。
 */

import type { BoardMember } from "@/lib/types";

/** 理事会成员（按 order 升序排列） */
export const boardMembers: BoardMember[] = [
  {
    id: "tian-feng",
    name: "田丰",
    nameEn: "Tian Feng",
    role: "名誉会长",
    roleEn: "Honorary President",
    // 暂无合适的肖像占位图，展示首字标识；上线前补充正式肖像
    order: 1,
  },
  {
    id: "hao-jiancai",
    name: "郝建才",
    nameEn: "Hao Jiancai",
    role: "会长",
    roleEn: "President",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1600&q=80",
    bio: "郝建才先生于 2024 年 11 月就任澳大利亚内蒙古商会会长，此前曾任商会名誉会长。就任以来，他提出加强商会自身建设、广泛联系中澳各界、切实做好会员服务的工作方向，带领新一届理事会推进商会各项工作。",
    order: 2,
  },
  {
    id: "sun-guozhao",
    name: "孙国照",
    nameEn: "Sun Guozhao",
    role: "执行会长",
    roleEn: "Executive President",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80",
    bio: "孙国照先生为澳大利亚内蒙古商会创会会长，2014 年在墨尔本发起成立商会，带领商会发展为会员企业逾百家、覆盖教育、地产、金融、矿产、医疗、大健康等行业的侨界商会组织。2023 年，他组织 15 名会员赴呼和浩特出席世界蒙商大会，并被内蒙古自治区人民政府授予“澳大利亚招商大使”称号。现任商会执行会长。",
    order: 3,
  },
  {
    id: "william",
    name: "William",
    nameEn: "William",
    role: "执行会长",
    roleEn: "Executive President",
    order: 4,
  },
  {
    id: "chan-hongwu",
    name: "廛洪武",
    nameEn: "Chan Hongwu",
    role: "常务副会长",
    roleEn: "Senior Vice President",
    order: 5,
  },
  {
    id: "dou-fei",
    name: "窦飞",
    nameEn: "Dou Fei",
    role: "常务副会长",
    roleEn: "Senior Vice President",
    order: 6,
  },
  {
    id: "ren-ye",
    name: "任烨",
    nameEn: "Ren Ye",
    role: "常务副会长",
    roleEn: "Senior Vice President",
    order: 7,
  },
  {
    id: "bai-meigui",
    name: "白玫瑰",
    nameEn: "Bai Meigui",
    role: "常务副会长",
    roleEn: "Senior Vice President",
    order: 8,
  },
  {
    id: "sun-haofeng",
    name: "孙浩峰",
    nameEn: "Sun Haofeng",
    role: "副会长",
    roleEn: "Vice President",
    order: 9,
  },
  {
    id: "helen-huang",
    name: "Helen Huang",
    nameEn: "Helen Huang",
    role: "副会长",
    roleEn: "Vice President",
    order: 10,
  },
  {
    id: "li-xiumei",
    name: "李秀梅",
    nameEn: "Li Xiumei",
    role: "副会长",
    roleEn: "Vice President",
    order: 11,
  },
  {
    id: "guan-mingxing",
    name: "关明星",
    nameEn: "Guan Mingxing",
    role: "副会长",
    roleEn: "Vice President",
    order: 12,
  },
  {
    id: "pan-xuefei",
    name: "潘雪飞",
    nameEn: "Pan Xuefei",
    role: "副会长",
    roleEn: "Vice President",
    order: 13,
  },
  {
    id: "he-tao",
    name: "何涛",
    nameEn: "He Tao",
    role: "副会长",
    roleEn: "Vice President",
    order: 14,
  },
  {
    id: "fan-dandan",
    name: "范丹丹",
    nameEn: "Fan Dandan",
    role: "副会长",
    roleEn: "Vice President",
    order: 15,
  },
  {
    id: "shen-jie",
    name: "申洁",
    nameEn: "Shen Jie",
    role: "副会长",
    roleEn: "Vice President",
    order: 16,
  },
  {
    id: "li-duanyang",
    name: "李端阳",
    nameEn: "Li Duanyang",
    role: "副会长",
    roleEn: "Vice President",
    order: 17,
  },
  {
    id: "huang-hui",
    name: "黄慧",
    nameEn: "Huang Hui",
    role: "常务理事",
    roleEn: "Executive Director",
    order: 18,
  },
  {
    id: "guo-xin",
    name: "郭鑫",
    nameEn: "Guo Xin",
    role: "常务理事",
    roleEn: "Executive Director",
    order: 19,
  },
  {
    id: "rose-chen",
    name: "Rose Chen",
    nameEn: "Rose Chen",
    role: "常务理事",
    roleEn: "Executive Director",
    order: 20,
  },
  {
    id: "zhuo-na",
    name: "卓娜",
    nameEn: "Zhuona",
    role: "副秘书长",
    roleEn: "Deputy Secretary-General",
    order: 21,
  },
];
