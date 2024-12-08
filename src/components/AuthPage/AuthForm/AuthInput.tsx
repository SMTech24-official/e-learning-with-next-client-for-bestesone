import cn from "@/utils/cn";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  placeholder: string;
  containerClassName?: string;
}

export function AuthInput({
  label,
  id,
  type,
  placeholder,
  containerClassName,
  className,
  ...props
}: InputFieldProps) {
  return (
    <div className={cn("space-y-2 flex flex-col", containerClassName)}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={cn(
          "border border-gray-neutral shadow p-2 rounded",
          className
        )}
        {...props}
      />
    </div>
  );
}
