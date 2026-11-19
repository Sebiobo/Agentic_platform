import type { FormEventHandler, ReactNode } from "react";
import Button from "../../../components/ui/Button";
import styles from "./AuthForm.module.css";

type AuthFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  error: string | null;
  loading: boolean;
  submitLabel: string;
  loadingLabel: string;
  children: ReactNode;
};

export default function AuthForm({
  onSubmit,
  error,
  loading,
  submitLabel,
  loadingLabel,
  children,
}: AuthFormProps) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}

      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}

      <Button type="submit" fullWidth disabled={loading}>
        {loading ? loadingLabel : submitLabel}
      </Button>
    </form>
  );
}
