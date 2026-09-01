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
- [ ] **商会企业**：`data/enterprises.ts`（资料由各企业提供，见 `docs/商会会长公司简历/`）
      - **XPWine 简介为秘书处代拟的占位文案**（企业仅确认为李小鹏经营、位于
        Docklands 的酒类零售店），全文须经企业确认修订，并补充 Logo 与照片
      - ANG 聚创国际集团、澳醇思慕集团的负责人（商会职务）信息待补充
      - 金地等企业对原文的个别用字修正见 `data/enterprises.ts` 文件头注释，上线前与企业确认
- [ ] **合作机构**：`data/partners.ts`（贸促会代表处等表述需商会确认；补充各机构正式 Logo）
- [ ] **会员年费**：`components/membership/tiers.tsx` 中 `[待定]`
- [ ] **合作手册**下载链接：`components/business/business-cta.tsx`

## 五、图片（全部为 Unsplash 占位图）

> 说明：老站 5 篇真实新闻与 3 场真实活动**已使用商会自有照片**（157 张，存于
> `public/images/`），这部分无需替换。以下仅指仍在使用 Unsplash 占位图的部分。

- [ ] 首页 Hero 大图（现为示例城市天际线，建议替换为墨尔本实拍或商会活动大场面）
- [ ] 仍为示例的区块与文章配图：搜索 `images.unsplash.com` 逐一替换为商会自有摄影
- [ ] 替换完成后收紧 `next.config.ts` → `images.remotePatterns`
- [ ] 澳世汇集团 Logo：老站仅有深蓝底宣传横幅，需向该会员索取标准版 Logo
- [ ] 理事会成员肖像照（`data/board.ts` 现全部留空、以首字标识展示，商会提供后补充）
- [ ] 会长寄语肖像（首页与关于页现为空白占位块 `PortraitPlaceholder`，商会提供后换回 `ImageFrame`）

## 五之二、已从老站迁移的内容（核实即可，无需重写）

- [ ] 核实 5 篇真实新闻的人名、职务、机构名拼写：十周年庆典、2022 鸡尾酒会、
      鄂尔多斯友好商会签约、2016 包头经贸洽谈会、2018 年度理事会
- [ ] **重点核实**：鄂尔多斯友好商会签约的年份。老站原文仅写「3 月 31 日」未注年份，
      现按 2018 年推断（数据文件中已加注释标记）
- [ ] 核实 4 家老站会员企业（大华时代传媒集团、普林斯移民留学事务所、澳世汇集团、
      澳大利亚新西兰健康产业集团）是否仍为在册会员，并取得 Logo 使用授权
- [ ] 已剔除的敏感信息（无需处理，仅供知悉）：老站十周年邀请函中的银行账户与 BSB、
      个人手机号与私人邮箱，均未迁入新站

## 六、功能接入

- [ ] 入会申请表 / 联系表单后端（邮件服务或 CRM）：`components/membership/application-form.tsx`、`components/contact/contact-form.tsx`
- [ ] 如需完整双语：为 `data/*.ts` 补齐全部 `...En` 字段，或迁移 CMS 后用 i18n（见 `docs/CMS-INTEGRATION.md`）

## 七、部署

- [ ] 平台建议 Vercel（零配置）；或任意支持 Node 的主机 `npm run build && npm start`
- [ ] 配置正式域名 + HTTPS（老站证书已失效，新站务必配好）
- [ ] 上线后用 Google Search Console 提交 `/sitemap.xml`
