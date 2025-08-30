import React from "react";

function AdminDashboard({ setIsAdmin }) {
  const handleLogout = () => {
    setIsAdmin(false);
    alert("👋 Logged out successfully!");
  };

  return (
    <div className="dashboard-card" style={{ background: "linear-gradient(135deg, #0078ff, #00a8ff)" }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Devayani S! 🎉</p>
      <ul style={{ textAlign: "left", marginTop: "20px" }}>
        <li>📊 Analytics Overview</li>
        <li>👥 Manage Users</li>
        <li>⚙️ System Settings</li>
        <li>📂 Reports & Insights</li>
      </ul>
      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          background: "#ff4d4d",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        🚪 Logout
      </button>
    </div>
  );
}

export default AdminDashboard;
