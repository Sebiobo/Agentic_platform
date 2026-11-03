
import { Link } from "react-router-dom";
import "./signIn.css";

export default function SignIn() {
  return (
    <main className="auth-page">
      <section className="auth-container">
        <Link to="/" className="auth-logo">
          Build<span>AI</span>
        </Link>

        <div className="auth-header">
          <h1>Welcome back</h1>
          <p>Sign in to continue building your ideas.</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <div className="password-label">
              <label htmlFor="password">Password</label>
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="auth-submit">
            Sign in
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{" "}
            <Link to="/signup">Create one</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
