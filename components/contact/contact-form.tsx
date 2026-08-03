"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import {
  SelectField,
  TextAreaField,
  TextField,
} from "@/components/forms/fields";

/** 咨询类型选项 */
const INQUIRY_OPTIONS = [
  { value: "business", label: "商务合作" },
  { value: "media", label: "媒体合作" },
  { value: "membership", label: "入会咨询" },
  { value: "event", label: "活动合作" },
  { value: "other", label: "其他" },
];

interface FormValues {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  phone: "",
  inquiryType: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "请填写您的姓名";
  if (!values.email.trim()) {
    errors.email = "请填写您的邮箱";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "请填写有效的邮箱地址";
  }
  if (!values.message.trim()) errors.message = "请填写留言内容";
  return errors;
}

/**
 * 联系我们 · 在线留言表单。
 * 客户端校验（必填 + 邮箱格式），提交后展示成功状态。
 */
export function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    // TODO(上线前)：接入邮件服务（如 Resend / SendGrid），将表单内容发送至商会秘书处邮箱
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 border border-gold/40 bg-white p-8 md:p-10"
      >
        <span className="flex h-12 w-12 items-center justify-center border border-gold/40 text-gold-dark">
          <CheckCircle2 className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <h3 className="font-serif text-2xl text-ink">留言已提交</h3>
        <p className="text-sm leading-relaxed text-ink-soft">
          感谢您的来信。商会秘书处已收到您的留言，将在 2–3
          个工作日内通过邮件与您联系。如事项紧急，请直接致电商会办公室。
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(INITIAL_VALUES);
            setErrors({});
            setSubmitted(false);
          }}
          className="mt-2 rounded-[2px] border border-ink/25 px-7 py-3 text-sm font-medium tracking-wide text-ink transition-all duration-300 hover:border-gold-dark hover:text-pine-800"
        >
          再次留言
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField
          label="姓名"
          name="name"
          required
          placeholder="请输入您的姓名"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextField
          label="邮箱"
          name="email"
          type="email"
          required
          placeholder="name@example.com"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField
          label="电话"
          name="phone"
          type="tel"
          placeholder="选填，便于我们与您联系"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <SelectField
          label="咨询类型"
          name="inquiryType"
          options={INQUIRY_OPTIONS}
          value={values.inquiryType}
          onChange={handleChange}
          error={errors.inquiryType}
        />
      </div>
      <TextAreaField
        label="留言"
        name="message"
        required
        rows={6}
        placeholder="请简要说明您的咨询事项或合作意向"
        value={values.message}
        onChange={handleChange}
        error={errors.message}
      />
      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-[2px] border border-pine-800 bg-pine-800 px-8 py-3 text-sm font-medium tracking-wide text-cream transition-all duration-300 hover:border-pine-700 hover:bg-pine-700"
        >
          提交留言
        </button>
        <p className="text-xs leading-relaxed text-ink-soft">
          提交即表示您同意商会依据隐私政策处理上述信息。
        </p>
      </div>
    </form>
  );
}
