# 上线前替换清单

> 全部条目在代码中均有 `TODO(上线前)` 注释或 `[待填写]` 占位可搜索定位。
> 快速定位：`grep -rn "TODO(上线前)\|待填写\|待定\|示例数据" app components data lib`

## 一、品牌与法律信息

- [ ] **正式 Logo**：替换 `components/layout/logo-mark.tsx`（建议提供 SVG 深/浅两版）
- [ ] **英文缩写**：`lib/site.ts` 中 `acronym`（现为 AIMCC，老站曾用 AIBCA）
- [ ] **ABN** 与 **Incorporated Association Number**：`lib/site.ts` → `legal`
- [ ] **正式域名**：`lib/site.ts` → `url`（影响 metadata / sitemap / JSON-LD / 分享链接）
- [ ] **隐私政策**与**网站使用条款**正式文本（`app/privacy/page.tsx`、`app/terms/page.tsx`，需法律顾问出具，符合 Privacy Act 1988）

## 二、联系方式（现沿用老站公开信息，须核实）

- [ ] 办公地址、邮箱、两部电话：`lib/site.ts` → `contact`
- [ ] 三个分类邮箱 business@ / media@ / membership@：`app/contact/page.tsx`
- [ ] 微信公众号名称及二维码（页脚与联系页）
- [ ] LinkedIn / Facebook / Instagram 真实主页链接：`lib/site.ts` → `social`
- [ ] Google Maps 嵌入：`app/contact/page.tsx` 地图占位区块

## 三、人物与组织信息

- [ ] **主席姓名与完整寄语**：`components/home/president-message.tsx`、`components/about/president-message-full.tsx`（现为 `[主席姓名]` 占位）
- [ ] **理事会名单**：`data/board.ts`（基于老站 2024 年第二届名单，须逐一核实职务与拼写，补充正式肖像照）
- [ ] **发展历程**时间线各节点：`components/about/timeline.tsx`
- [ ] **组织架构**层级是否与章程一致：`components/about/org-structure.tsx`

## 四、数据与内容

- [ ] **首页商会数据**（80+/30+/15+/20+ 均为示例）：`components/home/stats.tsx`
- [ ] **新闻**：`data/news.ts` 9 篇均为示例内容（部分基于老站真实活动改写），上线前替换为真实稿件；附件 `href: "#"` 换为真实文件
- [ ] **活动**：`data/events.ts` 7 场为示例；`registrationUrl` 现指向 /contact，接入真实报名系统后替换
- [ ] **会员企业**：`data/members.ts`（含老站出现过的真实企业，需获得展示授权）
- [ ] **合作机构**：`data/partners.ts`（贸促会代表处等表述需商会确认；补充各机构正式 Logo）
- [ ] **会员年费**：`components/membership/tiers.tsx` 中 `[待定]`
- [ ] **合作手册**下载链接：`components/business/business-cta.tsx`

## 五、图片（全部为 Unsplash 占位图）

- [ ] 首页 Hero 大图（现为示例城市天际线，建议替换为墨尔本实拍或商会活动大场面）
- [ ] 各区块配图：搜索 `images.unsplash.com` 逐一替换为商会自有摄影
- [ ] 替换完成后收紧 `next.config.ts` → `images.remotePatterns`

## 六、功能接入

- [ ] 入会申请表 / 联系表单后端（邮件服务或 CRM）：`components/membership/application-form.tsx`、`components/contact/contact-form.tsx`
- [ ] 如需完整双语：为 `data/*.ts` 补齐全部 `...En` 字段，或迁移 CMS 后用 i18n（见 `docs/CMS-INTEGRATION.md`）

## 七、部署

- [ ] 平台建议 Vercel（零配置）；或任意支持 Node 的主机 `npm run build && npm start`
- [ ] 配置正式域名 + HTTPS（老站证书已失效，新站务必配好）
- [ ] 上线后用 Google Search Console 提交 `/sitemap.xml`
