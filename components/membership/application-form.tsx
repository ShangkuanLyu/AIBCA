"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import {
  SelectField,
  TextAreaField,
  TextField,
} from "@/components/forms/fields";
import { memberIndustries } from "@/data/members";
import { site } from "@/lib/site";

/** 申请类型选项（与 lib/types.ts 的 MemberTier 对应） */
const TIER_OPTIONS = [
  { value: "director", label: "理事会员 Director" },
  { value: "corporate", label: "企业会员 Corporate" },
  { value: "individual", label: "个人会员 Individual" },
];

const INDUSTRY_OPTIONS = memberIndustries.map((industry) => ({
  value: industry,
  label: industry,
}));

interface FormValues {
  name: string;
  company: string;
  position: string;
  email: string;
  phone: string;
  industry: string;
  tier: string;
  message: string;
}

const INITIAL_VALUES: FormValues = {
  name: "",
  company: "",
  position: "",
  email: "",
  phone: "",
  industry: "",
  tier: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** 允许数字、空格、括号、连字符与前缀 +，且至少含 6 位数字 */
const PHONE_PATTERN = /^\+?[\d\s()-]{6,20}$/;

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};

  if (!values.name.trim()) {
    errors.name = "请填写姓名。";
  }

  if (!values.email.trim()) {
    errors.email = "请填写邮箱地址。";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "邮箱格式不正确，请检查后重新填写。";
  }

  const phone = values.phone.trim();
  if (!phone) {
    errors.phone = "请填写联系电话。";
  } else if (
    !PHONE_PATTERN.test(phone) ||
    phone.replace(/\D/g, "").length < 6
  ) {
    errors.phone = "电话格式不正确，请检查后重新填写。";
  }

  return errors;
}

/** 会员服务 · 入会申请表（客户端校验；提交后显示成功状态） */
export function ApplicationForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormValues) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      // 修改字段时清除对应错误提示
      setErrors((prev) =>
        prev[field] ? { ...prev, [field]: undefined } : prev,
      );
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      return;
    }
    // TODO(上线前)：接入邮件 / CRM 后端，将申请数据提交至商会秘书处
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="border border-gold/40 bg-white p-10 text-center md:p-14"
      >
        <CheckCircle
          className="mx-auto h-12 w-12 text-pine-800"
          strokeWidth={1.25}
          aria-hidden="true"
        />
        <h3 className="mt-6 font-serif text-2xl text-ink">申请已提交</h3>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
          感谢您申请加入{site.nameZh}。我们将在 3 个工作日内与您联系；如有疑问，
          欢迎致函 {site.contact.email}。
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="border border-ink/10 bg-ivory/50 p-6 md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <TextField
          label="姓名"
          name="name"
          required
          placeholder="请输入您的姓名"
          value={values.name}
          onChange={handleChange("name")}
          error={errors.name}
        />
        <TextField
          label="公司名称"
          name="company"
          placeholder="请输入公司名称（个人会员可留空）"
          value={values.company}
          onChange={handleChange("company")}
          error={errors.company}
        />
        <TextField
          label="职位"
          name="position"
          placeholder="请输入您的职位"
          value={values.position}
          onChange={handleChange("position")}
          error={errors.position}
        />
        <TextField
          label="邮箱"
          name="email"
          type="email"
          required
          placeholder="name@example.com"
          value={values.email}
          onChange={handleChange("email")}
          error={errors.email}
        />
        <TextField
          label="电话"
          name="phone"
          type="tel"
          required
          placeholder="+61 4xx xxx xxx"
          value={values.phone}
          onChange={handleChange("phone")}
          error={errors.phone}
        />
        <SelectField
          label="企业行业"
          name="industry"
          options={INDUSTRY_OPTIONS}
          value={values.industry}
          onChange={handleChange("industry")}
          error={errors.industry}
        />
        <SelectField
          label="申请类型"
          name="tier"
          options={TIER_OPTIONS}
          value={values.tier}
          onChange={handleChange("tier")}
          error={errors.tier}
          className="md:col-span-2"
        />
        <TextAreaField
          label="留言"
          name="message"
          placeholder="请简要介绍您的企业或业务，以及希望通过商会获得的支持。"
          value={values.message}
          onChange={handleChange("message")}
          error={errors.message}
          className="md:col-span-2"
        />
      </div>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-xs leading-relaxed text-ink-soft/80">
          提交即表示您同意商会秘书处就入会事宜与您联系。
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-[2px] border border-pine-800 bg-pine-800 px-8 py-3 text-sm font-medium tracking-wide text-cream transition-all duration-300 hover:border-pine-700 hover:bg-pine-700"
        >
          提交申请
        </button>
      </div>
    </form>
  );
}
