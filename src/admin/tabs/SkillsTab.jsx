import React, { useState } from "react";
import defaultSkills from "../../json _data/skills.json";
import { showToast } from "../AdminToast";

const LS_KEY = "admin_skills";

function loadData() {
  try {
    const stored = localStorage.getItem(LS_KEY);
    return stored ? JSON.parse(stored) : defaultSkills;
  } catch {
    return defaultSkills;
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
  a.download = "skills.json";
  a.click();
  URL.revokeObjectURL(url);
}

export default function SkillsTab() {
  const [skills, setSkills] = useState(loadData);
  const [newSkill, setNewSkill] = useState({ skillName: "", skillPercentage: "" });
  const [showAdd, setShowAdd] = useState(false);

  function handleChange(idx, field, value) {
    const updated = skills.map((s, i) => (i === idx ? { ...s, [field]: value } : s));
    setSkills(updated);
  }

  function deleteSkill(idx) {
    if (!window.confirm("Delete this skill?")) return;
    const updated = skills.filter((_, i) => i !== idx);
    setSkills(updated);
    saveData(updated);
    showToast("Skill deleted.");
  }

  function addSkill() {
    if (!newSkill.skillName.trim()) {
      showToast("Skill name cannot be empty.", "error");
      return;
    }
    const updated = [...skills, { ...newSkill }];
    setSkills(updated);
    saveData(updated);
    setNewSkill({ skillName: "", skillPercentage: "" });
    setShowAdd(false);
    showToast("Skill added!");
  }

  function handleSaveAll() {
    saveData(skills);
    showToast("Skills saved!");
  }

  return (
    <div>
      <div className="admin-tab-header">
        <h2>⚡ Skills</h2>
        <div className="admin-tab-actions">
          <button
            id="admin-skills-export-btn"
            className="admin-btn admin-btn-export admin-btn-sm"
            onClick={() => exportJSON(skills)}
          >
            ⬇ Export JSON
          </button>
          <button
            id="admin-skills-add-btn"
            className="admin-btn admin-btn-secondary admin-btn-sm"
            onClick={() => setShowAdd((v) => !v)}
          >
            + Add Skill
          </button>
          <button
            id="admin-skills-save-btn"
            className="admin-btn admin-btn-primary admin-btn-sm"
            onClick={handleSaveAll}
          >
            💾 Save All
          </button>
        </div>
      </div>

      {showAdd && (
        <div className="admin-card" style={{ borderColor: "var(--admin-accent)", marginBottom: 20 }}>
          <div className="admin-card-header">
            <h3>New Skill</h3>
            <button className="admin-btn admin-btn-ghost admin-btn-sm" onClick={() => setShowAdd(false)}>✕ Cancel</button>
          </div>
          <div className="admin-skill-row" style={{ background: "transparent", border: "none", padding: 0 }}>
            <input
              className="admin-input"
              placeholder="Skill name (e.g. React JS)"
              value={newSkill.skillName}
              onChange={(e) => setNewSkill({ ...newSkill, skillName: e.target.value })}
            />
            <input
              className="admin-input admin-skill-pct"
              placeholder="e.g. 85%"
              value={newSkill.skillPercentage}
              onChange={(e) => setNewSkill({ ...newSkill, skillPercentage: e.target.value })}
            />
            <button
              id="admin-skills-add-confirm-btn"
              className="admin-btn admin-btn-primary admin-btn-sm"
              onClick={addSkill}
            >
              ✅ Add
            </button>
          </div>
        </div>
      )}

      <div className="admin-card">
        <div style={{ fontSize: "0.78rem", color: "var(--admin-muted)", marginBottom: 14 }}>
          Edit skill names and percentages inline, then click <strong>Save All</strong>.
        </div>

        {skills.length === 0 ? (
          <div className="admin-empty">
            <div className="admin-empty-icon">⚡</div>
            No skills yet.
          </div>
        ) : (
          <div className="admin-skills-list">
            {skills.map((skill, idx) => (
              <div className="admin-skill-row" key={idx}>
                <input
                  className="admin-input"
                  value={skill.skillName}
                  placeholder="Skill name"
                  onChange={(e) => handleChange(idx, "skillName", e.target.value)}
                />
                <input
                  className="admin-input admin-skill-pct"
                  value={skill.skillPercentage}
                  placeholder="e.g. 80%"
                  onChange={(e) => handleChange(idx, "skillPercentage", e.target.value)}
                />
                <button
                  className="admin-btn admin-btn-danger admin-btn-sm"
                  onClick={() => deleteSkill(idx)}
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
