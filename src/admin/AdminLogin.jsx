import React, { useState } from "react";
import "./admin.css";

const ADMIN_PASSWORD = "karnx";
const AUTH_KEY = "admin_auth";

export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        localStorage.setItem(AUTH_KEY, "true");
        onLogin();
      } else {
        setError("Incorrect password. Please try again.");
      }
      setLoading(false);
    }, 400);
  }

  return (
    <div className="admin-root">
      <div className="admin-login-wrap">
        <div className="admin-login-card">
          <div className="admin-login-logo">
            <div className="admin-login-icon">🔐</div>
            <h1>Admin Panel</h1>
            <p>Enter your password to access the portfolio control panel</p>
          </div>

          <form className="admin-login-form" onSubmit={handleSubmit}>
            <div className="admin-field-group">
              <label htmlFor="admin-password">Password</label>
              <input
                id="admin-password"
                type="password"
                className="admin-input"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                autoComplete="current-password"
                required
              />
            </div>

            {error && <div className="admin-error-msg">⚠️ {error}</div>}

            <button
              id="admin-login-btn"
              type="submit"
              className="admin-btn admin-btn-primary admin-btn-full"
              disabled={loading || !password}
            >
              {loading ? "Verifying..." : "🔓 Login to Admin"}
            </button>
          </form>

          <p style={{ textAlign: "center", fontSize: "0.78rem", color: "var(--admin-muted)" }}>
            Portfolio Admin Panel · Secured Access Only
          </p>
        </div>
      </div>
    </div>
  );
}
