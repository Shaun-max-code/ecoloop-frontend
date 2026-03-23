import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <div style={navContainer}>
      
      {/* 🔹 LOGO */}
      <h1 style={logo}>
        EcoLoop 🌱
      </h1>

      {/* 🔹 NAV ITEMS */}
      <div style={navItems}>
        
        <NavItem to="/" label="Home" icon="🏠" active={location.pathname === "/"} />
        <NavItem to="/dashboard" label="Dashboard" icon="📊" active={location.pathname === "/dashboard"} />
        <NavItem to="/upload" label="Upload" icon="➕" active={location.pathname === "/upload"} />
        <NavItem to="/leaderboard" label="Leaderboard" icon="🏆" active={location.pathname === "/leaderboard"} />
        <NavItem to="/profile" label="Profile" icon="👤" active={location.pathname === "/profile"} />
        <NavItem to="/helpdesk" label="Help" icon="📞" active={location.pathname === "/helpdesk"} />

      </div>
    </div>
  );
}

/* 🔹 NAV ITEM COMPONENT */
function NavItem({ to, label, icon, active }) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <div style={navItem(active)}>
        <span style={iconStyle}>{icon}</span>
        <span style={labelStyle}>{label}</span>
      </div>
    </Link>
  );
}

/* 🎨 STYLES */

/* CONTAINER */
const navContainer = {
  position: "sticky",
  top: 0,
  zIndex: 100,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 40px",
  background: "rgba(255,255,255,0.8)",
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid rgba(0,0,0,0.05)",
};

/* LOGO */
const logo = {
  fontSize: "28px",
  fontWeight: "800",
  fontFamily: "Poppins, sans-serif",
  color: "#065f46",
  letterSpacing: "1px",
};

/* NAV ITEMS */
const navItems = {
  display: "flex",
  gap: "25px",
};

/* NAV ITEM */
const navItem = (active) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "8px 12px",
  borderRadius: "10px",
  background: active ? "rgba(34,197,94,0.15)" : "transparent",
  transition: "0.3s",
  cursor: "pointer",
});

/* ICON */
const iconStyle = {
  fontSize: "20px",
};

/* LABEL */
const labelStyle = {
  fontSize: "12px",
  marginTop: "3px",
  color: "#1f2937",
};