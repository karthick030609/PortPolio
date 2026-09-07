import React, { useState } from "react";
import defaultProjects from "../../json _data/projects.json";
import { showToast } from "../AdminToast";

const LS_KEY = "admin_projects";

function loadData() {
  try {
    const stored = localStorage.getItem(LS_KEY);
    return stored ? JSON.parse(stored) : defaultProjects;
  } catch {
    return defaultProjects;
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
  a.download = "projects.json";
  a.click();
  URL.revokeObjectURL(url);
}

export default function ProjectsTab() {
  const [projects, setProjects] = useState(loadData);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});
  const [showAdd, setShowAdd] = useState(false);
  const [newItem, setNewItem] = useState({ name: "", para: "" });

  function startEdit(idx) {
    setEditId(idx);
    setEditData({ ...projects[idx] });
    setShowAdd(false);
  }

  function cancelEdit() {
    setEditId(null);
    setEditData({});
  }

  function saveEdit(idx) {
    if (!editData.name.trim()) {
      showToast("Project name cannot be empty.", "error");
      return;
    }
    const updated = projects.map((p, i) => (i === idx ? { ...editData } : p));
    setProjects(updated);
    saveData(updated);
    setEditId(null);
    showToast("Project updated successfully!");
  }

  function deleteProject(idx) {
    if (!window.confirm("Delete this project?")) return;
    const updated = projects.filter((_, i) => i !== idx);
    setProjects(updated);
    saveData(updated);
    showToast("Project deleted.");
  }

  function addProject() {
    if (!newItem.name.trim()) {
      showToast("Project name cannot be empty.", "error");
      return;
    }
    const updated = [...projects, { ...newItem }];
    setProjects(updated);
    saveData(updated);
    setNewItem({ name: "", para: "" });
    setShowAdd(false);
    showToast("Project added!");
  }

  function handleSaveAll() {
    saveData(projects);
    showToast("All projects saved!");
  }

  return (
    <div>
      {/* Tab header */}
      <div className="admin-tab-header">
        <h2>📁 Projects</h2>
        <div className="admin-tab-actions">
          <button
            id="admin-projects-export-btn"
            className="admin-btn admin-btn-export admin-btn-sm"
            onClick={() => exportJSON(projects)}
          >
            ⬇ Export JSON
          </button>
          <button
            id="admin-projects-add-btn"
            className="admin-btn admin-btn-secondary admin-btn-sm"
            onClick={() => { setShowAdd(true); setEditId(null); }}
          >
            + Add Project
          </button>
          <button
            id="admin-projects-save-btn"
            className="admin-btn admin-btn-primary admin-btn-sm"
            onClick={handleSaveAll}
          >
            💾 Save All
          </button>
        </div>
      </div>

      {/* Add new form */}
      {showAdd && (
        <div className="admin-card" style={{ borderColor: "var(--admin-accent)", marginBottom: 20 }}>
          <div className="admin-card-header">
            <h3>New Project</h3>
            <button className="admin-btn admin-btn-ghost admin-btn-sm" onClick={() => setShowAdd(false)}>✕ Cancel</button>
          </div>
          <div className="admin-inline-form">
            <div className="admin-field-group">
              <label>Project Name</label>
              <input
                className="admin-input"
                placeholder="e.g. E-commerce Website"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              />
            </div>
            <div className="admin-field-group">
              <label>Description</label>
              <textarea
                className="admin-textarea"
                placeholder="Brief description of the project..."
                value={newItem.para}
                onChange={(e) => setNewItem({ ...newItem, para: e.target.value })}
              />
            </div>
            <button
              id="admin-projects-add-confirm-btn"
              className="admin-btn admin-btn-primary"
              onClick={addProject}
            >
              ✅ Add Project
            </button>
          </div>
        </div>
      )}

      {/* Projects list */}
      {projects.length === 0 ? (
        <div className="admin-empty">
          <div className="admin-empty-icon">📁</div>
          No projects yet. Click "Add Project" to get started.
        </div>
      ) : (
        <div className="admin-item-list">
          {projects.map((project, idx) => (
            <div className="admin-item" key={idx}>
              {editId === idx ? (
                <div className="admin-inline-form">
                  <div className="admin-field-group">
                    <label>Project Name</label>
                    <input
                      className="admin-input"
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    />
                  </div>
                  <div className="admin-field-group">
                    <label>Description</label>
                    <textarea
                      className="admin-textarea"
                      value={editData.para}
                      onChange={(e) => setEditData({ ...editData, para: e.target.value })}
                    />
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button className="admin-btn admin-btn-primary admin-btn-sm" onClick={() => saveEdit(idx)}>
                      💾 Save
                    </button>
                    <button className="admin-btn admin-btn-ghost admin-btn-sm" onClick={cancelEdit}>
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="admin-item-header">
                    <div>
                      <div className="admin-item-title">{project.name}</div>
                      <div className="admin-item-subtitle">{project.para || "No description"}</div>
                    </div>
                    <div className="admin-item-actions">
                      <button
                        className="admin-btn admin-btn-secondary admin-btn-sm"
                        onClick={() => startEdit(idx)}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="admin-btn admin-btn-danger admin-btn-sm"
                        onClick={() => deleteProject(idx)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
