import { cn } from "@/lib/utils";

/**
 * 共享表单控件（会员申请表 / 联系表单 / 合作需求表单复用）。
 * 纯展示组件，可在客户端表单组件中直接使用。
 */

const inputBase =
  "w-full rounded-[2px] border border-ink/20 bg-white px-4 py-3 text-sm text-ink transition-colors placeholder:text-ink-soft/50 focus:border-gold focus:outline-none";

interface BaseProps {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  className?: string;
}

function FieldShell({
  label,
  name,
  required,
  error,
  className,
  children,
}: BaseProps & { children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-oxblood">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-oxblood">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({
  label,
  name,
  required,
  error,
  className,
  type = "text",
  placeholder,
  value,
  onChange,
}: BaseProps & {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <FieldShell {...{ label, name, required, error, className }}>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={error ? true : undefined}
        className={cn(inputBase, error && "border-oxblood/60")}
      />
    </FieldShell>
  );
}

export function TextAreaField({
  label,
  name,
  required,
  error,
  className,
  placeholder,
  rows = 5,
  value,
  onChange,
}: BaseProps & {
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <FieldShell {...{ label, name, required, error, className }}>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={error ? true : undefined}
        className={cn(inputBase, "resize-y", error && "border-oxblood/60")}
      />
    </FieldShell>
  );
}

export function SelectField({
  label,
  name,
  required,
  error,
  className,
  options,
  value,
  onChange,
}: BaseProps & {
  options: Array<{ value: string; label: string }>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <FieldShell {...{ label, name, required, error, className }}>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        aria-invalid={error ? true : undefined}
        className={cn(inputBase, "cursor-pointer", error && "border-oxblood/60")}
      >
        <option value="">请选择</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}
