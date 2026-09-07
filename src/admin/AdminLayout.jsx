import React from "react";
import "./admin.css";

const NAV_ITEMS = [
  { id: "projects",  icon: "📁", label: "Projects"  },
  { id: "skills",    icon: "⚡", label: "Skills"    },
  { id: "about",     icon: "👤", label: "About"     },
  { id: "services",  icon: "🛠️", label: "Services"  },
];

export default function AdminLayout({ activeTab, onTabChange, onLogout, children }) {
  return (
    <div className="admin-root">
      {/* ─── Sidebar ─────────────────────────────── */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <div className="admin-sidebar-logo-icon">⚙️</div>
          <span><em>Admin</em> Panel</span>
        </div>

        <nav className="admin-sidebar-nav">
          <div className="admin-nav-label">Content</div>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              id={`admin-nav-${item.id}`}
              className={`admin-nav-btn${activeTab === item.id ? " active" : ""}`}
              onClick={() => onTabChange(item.id)}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <a
            href="/"
            className="admin-btn admin-btn-ghost admin-btn-full"
            style={{ marginBottom: 8, textDecoration: "none", display: "flex" }}
            id="admin-view-portfolio-btn"
          >
            🌐 View Portfolio
          </a>
          <button
            id="admin-logout-btn"
            className="admin-btn admin-btn-danger admin-btn-full"
            onClick={onLogout}
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* ─── Main ─────────────────────────────────── */}
      <div className="admin-layout">
        <header className="admin-header">
          <div className="admin-header-left">
            <h2>
              {NAV_ITEMS.find((n) => n.id === activeTab)?.icon}{" "}
              {NAV_ITEMS.find((n) => n.id === activeTab)?.label}
            </h2>
            <p>Manage your portfolio content</p>
          </div>
          <div className="admin-header-right">
            <span className="admin-badge">🟢 Live</span>
            <button
              className="admin-btn admin-btn-danger admin-btn-sm"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        </header>

        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}
