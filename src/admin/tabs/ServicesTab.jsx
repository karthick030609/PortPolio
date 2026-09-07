import React, { useState } from "react";
import defaultServices from "../../json _data/services.json";
import { showToast } from "../AdminToast";

const LS_KEY = "admin_services";

const ICON_OPTIONS = [
  "FaGithub","FaCode","FaReact","FaHtml5","FaCss3Alt","FaJava",
  "FaPython","FaNodeJs","FaDatabase","FaMobile","FaDesktop","FaBug",
  "FaRocket","FaStar","FaGlobe","FaPalette",
];

function loadData() {
  try {
    const stored = localStorage.getItem(LS_KEY);
    return stored ? JSON.parse(stored) : defaultServices;
  } catch {
    return defaultServices;
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
  a.download = "services.json";
  a.click();
  URL.revokeObjectURL(url);
}

const BLANK = { iconName: "FaCode", role: "", para: "" };

export default function ServicesTab() {
  const [services, setServices] = useState(loadData);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});
  const [showAdd, setShowAdd] = useState(false);
  const [newItem, setNewItem] = useState({ ...BLANK });

  function startEdit(idx) {
    setEditId(idx);
    setEditData({ ...services[idx] });
    setShowAdd(false);
  }

  function cancelEdit() {
    setEditId(null);
    setEditData({});
  }

  function saveEdit(idx) {
    if (!editData.role.trim()) {
      showToast("Service role cannot be empty.", "error");
      return;
    }
    const updated = services.map((s, i) => (i === idx ? { ...editData } : s));
    setServices(updated);
    saveData(updated);
    setEditId(null);
    showToast("Service updated!");
  }

  function deleteService(idx) {
    if (!window.confirm("Delete this service?")) return;
    const updated = services.filter((_, i) => i !== idx);
    setServices(updated);
    saveData(updated);
    showToast("Service deleted.");
  }

  function addService() {
    if (!newItem.role.trim()) {
      showToast("Service role cannot be empty.", "error");
      return;
    }
    const updated = [...services, { ...newItem }];
    setServices(updated);
    saveData(updated);
    setNewItem({ ...BLANK });
    setShowAdd(false);
    showToast("Service added!");
  }

  function handleSaveAll() {
    saveData(services);
    showToast("Services saved!");
  }

  const Field = ({ label, children }) => (
    <div className="admin-field-group">{label && <label>{label}</label>}{children}</div>
  );

  const IconSelect = ({ value, onChange }) => (
    <select
      className="admin-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ cursor: "pointer" }}
    >
      {ICON_OPTIONS.map((icon) => (
        <option key={icon} value={icon}>{icon}</option>
      ))}
    </select>
  );

  return (
    <div>
      <div className="admin-tab-header">
        <h2>🛠️ Services</h2>
        <div className="admin-tab-actions">
          <button
            id="admin-services-export-btn"
            className="admin-btn admin-btn-export admin-btn-sm"
            onClick={() => exportJSON(services)}
          >
            ⬇ Export JSON
          </button>
          <button
            id="admin-services-add-btn"
            className="admin-btn admin-btn-secondary admin-btn-sm"
            onClick={() => { setShowAdd(true); setEditId(null); }}
          >
            + Add Service
          </button>
          <button
            id="admin-services-save-btn"
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
            <h3>New Service</h3>
            <button className="admin-btn admin-btn-ghost admin-btn-sm" onClick={() => setShowAdd(false)}>✕ Cancel</button>
          </div>
          <div className="admin-inline-form">
            <div className="admin-form-grid">
              <Field label="Role / Title">
                <input
                  className="admin-input"
                  placeholder="e.g. Web Development"
                  value={newItem.role}
                  onChange={(e) => setNewItem({ ...newItem, role: e.target.value })}
                />
              </Field>
              <Field label="Icon Name">
                <IconSelect value={newItem.iconName} onChange={(v) => setNewItem({ ...newItem, iconName: v })} />
              </Field>
            </div>
            <Field label="Description">
              <textarea
                className="admin-textarea"
                placeholder="Brief description..."
                value={newItem.para}
                onChange={(e) => setNewItem({ ...newItem, para: e.target.value })}
              />
            </Field>
            <button
              id="admin-services-add-confirm-btn"
              className="admin-btn admin-btn-primary"
              onClick={addService}
            >
              ✅ Add Service
            </button>
          </div>
        </div>
      )}

      {services.length === 0 ? (
        <div className="admin-empty">
          <div className="admin-empty-icon">🛠️</div>
          No services yet.
        </div>
      ) : (
        <div className="admin-item-list">
          {services.map((service, idx) => (
            <div className="admin-item" key={idx}>
              {editId === idx ? (
                <div className="admin-inline-form">
                  <div className="admin-form-grid">
                    <Field label="Role / Title">
                      <input
                        className="admin-input"
                        value={editData.role}
                        onChange={(e) => setEditData({ ...editData, role: e.target.value })}
                      />
                    </Field>
                    <Field label="Icon Name">
                      <IconSelect value={editData.iconName} onChange={(v) => setEditData({ ...editData, iconName: v })} />
                    </Field>
                  </div>
                  <Field label="Description">
                    <textarea
                      className="admin-textarea"
                      value={editData.para}
                      onChange={(e) => setEditData({ ...editData, para: e.target.value })}
                    />
                  </Field>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button className="admin-btn admin-btn-primary admin-btn-sm" onClick={() => saveEdit(idx)}>💾 Save</button>
                    <button className="admin-btn admin-btn-ghost admin-btn-sm" onClick={cancelEdit}>Cancel</button>
                  </div>
                </div>
              ) : (
                <div className="admin-item-header">
                  <div>
                    <div className="admin-item-title">{service.role}</div>
                    <div className="admin-item-subtitle">
                      <span className="admin-badge" style={{ marginRight: 8 }}>{service.iconName}</span>
                      {service.para}
                    </div>
                  </div>
                  <div className="admin-item-actions">
                    <button className="admin-btn admin-btn-secondary admin-btn-sm" onClick={() => startEdit(idx)}>✏️ Edit</button>
                    <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => deleteService(idx)}>🗑️ Delete</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
