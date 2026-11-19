import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import UserMenu from "../../features/auth/components/UserMenu";
import { useAuth } from "../../features/auth/useAuth";
import PromptBox from "../../features/chat/components/PromptBox";
import styles from "./PublicPage.module.css";

export default function PublicPage() {
  const [sidebarOpen, setSidebarOpen] = useState(
    () => window.matchMedia("(min-width: 769px)").matches,
  );
  const { user } = useAuth();

  return (
    <div className={styles.layout}>
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((open) => !open)}
        profileName={user?.name ?? user?.email ?? "Guest"}
        profileLabel={user ? user.email : "Not signed in"}
      />

      <div className={`${styles.content} ${sidebarOpen ? styles.shifted : ""}`}>
        <header className={styles.topbar}>
          <UserMenu />
        </header>

        <main className={styles.main}>
          <section className={styles.hero}>
            <h1 className={styles.title}>What are we building today?</h1>
            <p className={styles.subtitle}>
              Describe your idea and let's turn it into an app.
            </p>

            <PromptBox />
          </section>
        </main>
      </div>
    </div>
  );
}
