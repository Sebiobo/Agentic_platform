
import { Link } from "react-router-dom";
import "./signUp.css";

export default function SignUp() {
  return (
    <main className="auth-page">
      <section className="auth-container">
        <Link to="/" className="auth-logo">
          Build<span>AI</span>
        </Link>

        <div className="auth-header">
          <h1>Create your account</h1>
          <p>Start turning your ideas into applications.</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              required
            />
          </div>

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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              minLength={8}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">
              Confirm password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Repeat your password"
              minLength={8}
              required
            />
          </div>

          <button type="submit" className="auth-submit">
            Create account
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
