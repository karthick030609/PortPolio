import React, { useState } from "react";
import AdminLogin from "./AdminLogin";
import AdminLayout from "./AdminLayout";
import AdminToast from "./AdminToast";
import ProjectsTab from "./tabs/ProjectsTab";
import SkillsTab from "./tabs/SkillsTab";
import AboutTab from "./tabs/AboutTab";
import ServicesTab from "./tabs/ServicesTab";
import "./admin.css";

const AUTH_KEY = "admin_auth";

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem(AUTH_KEY) === "true"
  );
  const [activeTab, setActiveTab] = useState("projects");

  function handleLogin() {
    setIsAuthenticated(true);
  }

  function handleLogout() {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  function renderTab() {
    switch (activeTab) {
      case "projects": return <ProjectsTab />;
      case "skills":   return <SkillsTab />;
      case "about":    return <AboutTab />;
      case "services": return <ServicesTab />;
      default:         return <ProjectsTab />;
    }
  }

  return (
    <>
      <AdminLayout
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={handleLogout}
      >
        {renderTab()}
      </AdminLayout>
      <AdminToast />
    </>
  );
}
