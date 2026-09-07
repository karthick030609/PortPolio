import React, { useState, useEffect } from "react";

let _showToast = null;

export function useToast() {
  const [toasts, setToasts] = useState([]);

  // register global trigger on mount
  useEffect(() => {
    _showToast = (msg, type = "success") => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, msg, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    };
    return () => { _showToast = null; };
  }, []);

  return { toasts };
}

export function showToast(msg, type = "success") {
  if (_showToast) _showToast(msg, type);
}

export default function AdminToast() {
  const { toasts } = useToast();

  return (
    <div className="admin-toast-wrap">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`admin-toast admin-toast-${t.type}`}
        >
          <span className="admin-toast-icon">
            {t.type === "success" ? "✅" : "❌"}
          </span>
          <span className="admin-toast-msg">{t.msg}</span>
        </div>
      ))}
    </div>
  );
}
