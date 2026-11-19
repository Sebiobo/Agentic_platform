import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./AuthField.module.css";

type AuthFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  labelAside?: ReactNode;
  children?: ReactNode;
};

export default function AuthField({
  id,
  label,
  labelAside,
  children,
  ...inputProps
}: AuthFieldProps) {
  return (
    <div className={styles.field}>
      <div className={styles.labelRow}>
        <label htmlFor={id}>{label}</label>
        {labelAside}
      </div>

      <input id={id} className={styles.input} {...inputProps} />

      {children}
    </div>
  );
}
