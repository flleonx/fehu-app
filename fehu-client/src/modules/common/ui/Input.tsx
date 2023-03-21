import { cva, VariantProps } from "class-variance-authority";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

const inputStyles = cva(
  "mt-6 pl-4 font-3xl border-2 rounded focus:ring-2 focus:ring-blue-300",
  {
    variants: {
      height: {
        10: "h-10",
        11: "h-11",
        12: "h-12",
        14: "h-14",
        16: "h-16",
      },
      fullWidth: {
        true: "w-full",
      },
      error: {
        true: "border-red-500 focus:border-red-500",
        false: "border-black focus:border-black",
      },
    },
    defaultVariants: {
      error: false,
      height: 14,
    },
  }
);

interface Props<T extends FieldValues>
  extends VariantProps<typeof inputStyles> {
  register: UseFormRegister<T>;
  name: Path<T>;
  type: "text" | "email" | "password";
  placeholder: string;
  errorMessage?: string;
  helperText?: string;
  className?: string;
}

export const Input = <T extends FieldValues>({
  register,
  name,
  type,
  placeholder,
  fullWidth,
  height,
  error,
  errorMessage,
  helperText,
  className,
}: Props<T>) => {
  return (
    <>
      <input
        className={`${inputStyles({ fullWidth, error, height })} ${className}`}
        {...register(name)}
        type={type}
        placeholder={placeholder}
      />
      <p className="text-sm text-medium-gray-brand pl-2">{helperText}</p>
      <p className="text-sm text-red-500 pl-2">{errorMessage}</p>
    </>
  );
};
