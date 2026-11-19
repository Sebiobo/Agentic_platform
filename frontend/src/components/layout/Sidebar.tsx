import { Link } from "react-router-dom";
import { MenuIcon, PlusIcon } from "../ui/icons";
import styles from "./Sidebar.module.css";

type SidebarProps = {
  isOpen: boolean;
  onToggle: () => void;
  profileName: string;
  profileLabel: string;
};

export default function Sidebar({
  isOpen,
  onToggle,
  profileName,
  profileLabel,
}: SidebarProps) {
  return (
    <>
      {!isOpen && (
        <button
          type="button"
          className={styles.openButton}
          onClick={onToggle}
          aria-label="Open sidebar"
        >
          <MenuIcon />
        </button>
      )}

      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""}`}
        onClick={onToggle}
        aria-hidden="true"
      />

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
        aria-label="Sidebar"
        inert={!isOpen}
      >
        <div className={styles.header}>
          <Link to="/" className={styles.logo}>
            Build<span>AI</span>
          </Link>

          <button
            type="button"
            className={styles.iconButton}
            onClick={onToggle}
            aria-label="Close sidebar"
          >
            <MenuIcon />
          </button>
        </div>

        <nav className={styles.navigation}>
          <Link to="/" className={styles.navLink}>
            <PlusIcon />
            New chat
          </Link>
        </nav>

        <div className={styles.profile}>
          <div className={styles.avatar}>
            {profileName.charAt(0).toUpperCase()}
          </div>

          <div className={styles.profileInfo}>
            <span className={styles.profileName}>{profileName}</span>
            <span className={styles.profileLabel}>{profileLabel}</span>
          </div>
        </div>
      </aside>
    </>
  );
}
