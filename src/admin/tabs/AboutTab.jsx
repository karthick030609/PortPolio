import React, { useState } from "react";
import defaultAbout from "../../json _data/about.json";
import { showToast } from "../AdminToast";

const LS_KEY = "admin_about";

function loadData() {
  try {
    const stored = localStorage.getItem(LS_KEY);
    return stored ? JSON.parse(stored) : defaultAbout;
  } catch {
    return defaultAbout;
  }
}

function saveData(data) {
  localStorage.setItem(LS_KEY, JSON.stringify(data));
}

function exportJSON(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "about.json";
  a.click();
  URL.revokeObjectURL(url);
}

export default function AboutTab() {
  const [about, setAbout] = useState(loadData);

  function handleChange(field, value) {
    setAbout((prev) => ({ ...prev, [field]: value }));
  }

  function handleSave() {
    if (!about.para?.trim()) {
      showToast("Bio cannot be empty.", "error");
      return;
    }
    saveData(about);
    showToast("About info saved!");
  }

  return (
    <div>
      <div className="admin-tab-header">
        <h2>👤 About</h2>
        <div className="admin-tab-actions">
          <button
            id="admin-about-export-btn"
            className="admin-btn admin-btn-export admin-btn-sm"
            onClick={() => exportJSON(about)}
          >
            ⬇ Export JSON
          </button>
          <button
            id="admin-about-save-btn"
            className="admin-btn admin-btn-primary admin-btn-sm"
            onClick={handleSave}
          >
            💾 Save Changes
          </button>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-about-form">
          <div className="admin-field-group">
            <label>Bio / Description</label>
            <textarea
              id="admin-about-bio"
              className="admin-textarea"
              style={{ minHeight: 130 }}
              placeholder="Tell visitors about yourself..."
              value={about.para || ""}
              onChange={(e) => handleChange("para", e.target.value)}
            />
          </div>

          <div className="admin-form-grid">
            <div className="admin-field-group">
              <label>Email Address</label>
              <input
                id="admin-about-email"
                type="email"
                className="admin-input"
                placeholder="your@email.com"
                value={about.email || ""}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>

            <div className="admin-field-group">
              <label>Location / Place</label>
              <input
                id="admin-about-place"
                className="admin-input"
                placeholder="City, Country"
                value={about.place || ""}
                onChange={(e) => handleChange("place", e.target.value)}
              />
            </div>
          </div>

          <div className="admin-field-group">
            <label>Resume Link</label>
            <input
              id="admin-about-resume"
              type="url"
              className="admin-input"
              placeholder="https://drive.google.com/..."
              value={about.resumeLink || ""}
              onChange={(e) => handleChange("resumeLink", e.target.value)}
            />
          </div>

          <div style={{ paddingTop: 8 }}>
            <button
              className="admin-btn admin-btn-primary"
              onClick={handleSave}
            >
              💾 Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
