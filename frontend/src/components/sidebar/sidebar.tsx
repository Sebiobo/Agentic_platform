
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {!isOpen && (
        <button
          className="sidebar-toggle"
          onClick={onToggle}
          aria-label="Open sidebar"
          title="Open sidebar"
        >
          ☰
        </button>
      )}

      <aside
        className={`sidebar ${
          isOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo">
            Build<span>AI</span>
          </Link>

          <button
            className="sidebar-close"
            onClick={onToggle}
            aria-label="Close sidebar"
            title="Close sidebar"
          >
            ☰
          </button>
        </div>

        <nav className="sidebar-navigation">
          <NavLink to="/" className="sidebar-link">
            <span>＋</span>
            New Chat
          </NavLink>

          <NavLink to="/signin" className="sidebar-link">
            <span>↪</span>
            Sign In
          </NavLink>

          <NavLink to="/signup" className="sidebar-link">
            <span>＋</span>
            Sign Up
          </NavLink>
        </nav>

        <div className="sidebar-bottom">
          <NavLink to="/settings" className="sidebar-link">
            <span>⚙</span>
            Settings
          </NavLink>

          <div className="sidebar-profile">
            <div className="profile-avatar">G</div>

            <div className="profile-info">
              <span className="profile-name">Guest User</span>
              <span className="profile-status">Free plan</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
