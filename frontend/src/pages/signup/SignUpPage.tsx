import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../features/auth/api";
import AuthField from "../../features/auth/components/AuthField";
import AuthForm from "../../features/auth/components/AuthForm";
import AuthLayout from "../../features/auth/components/AuthLayout";
import styles from "./SignUpPage.module.css";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await register({ email, password, name: name.trim() || undefined });
      navigate("/signin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start turning your ideas into applications."
      footer={
        <>
          Already have an account? <Link to="/signin">Sign in</Link>
        </>
      }
    >
      <AuthForm
        onSubmit={handleSubmit}
        error={error}
        loading={loading}
        submitLabel="Create account"
        loadingLabel="Creating account..."
      >
        <AuthField
          id="name"
          label="Full name"
          type="text"
          placeholder="John Doe"
          autoComplete="name"
          maxLength={100}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <AuthField
          id="email"
          label="Email address"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <AuthField
          id="password"
          label="Password"
          type="password"
          placeholder="Create a password"
          autoComplete="new-password"
          minLength={8}
          maxLength={128}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        >
          <p className={styles.hint}>At least 8 characters.</p>
        </AuthField>

        <AuthField
          id="confirm-password"
          label="Confirm password"
          type="password"
          placeholder="Repeat your password"
          autoComplete="new-password"
          minLength={8}
          maxLength={128}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </AuthForm>
    </AuthLayout>
  );
}
