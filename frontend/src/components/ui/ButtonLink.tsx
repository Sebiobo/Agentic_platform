import type { ComponentProps } from "react";
import { Link } from "react-router-dom";
import {
  buttonClasses,
  type ButtonSize,
  type ButtonVariant,
} from "./buttonClasses";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export default function ButtonLink({
  variant,
  size,
  fullWidth,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={buttonClasses({ variant, size, fullWidth, className })}
      {...props}
    />
  );
}
