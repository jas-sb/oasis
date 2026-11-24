import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ type = "button", style, ...props }: ButtonProps) {
  return (
    <button
      type={type}
      style={{
        backgroundColor: "var(--color-action-primary, #1A3D5C)",
        color: "var(--color-text-on-action, #FFFFFF)",
        ...style,
      }}
      {...props}
    />
  );
}
