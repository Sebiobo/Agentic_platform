import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../features/auth/api";
import AuthField from "../../features/auth/components/AuthField";
import AuthForm from "../../features/auth/components/AuthForm";
import AuthLayout from "../../features/auth/components/AuthLayout";
import { useAuth } from "../../features/auth/useAuth";
import { saveToken } from "../../lib/token";
import styles from "./SignInPage.module.css";

export default function SignInPage() {
  const navigate = useNavigate();
  const { refreshUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { access_token } = await login(email, password);
      saveToken(access_token);
      await refreshUser();
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue building your ideas."
      footer={
        <>
          Don't have an account? <Link to="/signup">Create one</Link>
        </>
      }
    >
      <AuthForm
        onSubmit={handleSubmit}
        error={error}
        loading={loading}
        submitLabel="Sign in"
        loadingLabel="Signing in..."
      >
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
          labelAside={
            <Link to="/forgot-password" className={styles.forgot}>
              Forgot password?
            </Link>
          }
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </AuthForm>
    </AuthLayout>
  );
}
