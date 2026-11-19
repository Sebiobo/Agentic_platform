import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./AuthLayout.module.css";

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  footer: ReactNode;
  children: ReactNode;
};

export default function AuthLayout({
  title,
  subtitle,
  footer,
  children,
}: AuthLayoutProps) {
  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <Link to="/" className={styles.logo}>
          Build<span>AI</span>
        </Link>

        <header className={styles.header}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </header>

        {children}

        <footer className={styles.footer}>{footer}</footer>
      </section>
    </main>
  );
}
