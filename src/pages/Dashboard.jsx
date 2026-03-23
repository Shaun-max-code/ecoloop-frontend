import React from "react";

export default function Dashboard() {
  const points = 1240;
  const waste = 15;
  const co2 = 32.5;

  return (
    <div style={container}>
      
      {/* 🔹 SIDEBAR */}
      <div style={sidebar}>
        <h1 style={{ fontSize: "26px" }}>
          EcoLoop <span style={{ color: "#22c55e" }}>🌱</span>
        </h1>

        <p style={{ marginTop: "10px", opacity: 0.7 }}>
          Smart Waste System
        </p>

        
      </div>

      {/* 🔹 MAIN GRID */}
      <div style={main}>

        {/* 🔥 BIG CARD */}
        <div style={bigCard}>
          <div>
            <p style={{ opacity: 0.6 }}>Total Points</p>
            <h1 style={bigNumber}>{points}</h1>
          </div>

          <div style={circle}></div>
        </div>

        {/* 📊 CO2 CARD */}
        <div style={card}>
          <p style={label}>CO₂ Saved</p>
          <h2 style={value}>{co2} KG</h2>
        </div>

        {/* 🗑️ WASTE CARD */}
        <div style={card}>
          <p style={label}>Waste Entries</p>
          <h2 style={value}>{waste} Logs</h2>
        </div>

        {/* 📈 PROGRESS CARD */}
        <div style={wideCard}>
          <p style={label}>Impact Level</p>

          <div style={progressBg}>
            <div
              style={{
                ...progressFill,
                width: `${Math.min(points / 20, 100)}%`,
              }}
            />
          </div>

          <p style={{ marginTop: "10px", opacity: 0.6 }}>
            Keep contributing to increase impact 🚀
          </p>
        </div>

      </div>
    </div>
  );
}

/* 🎨 DARK ECO GLASS THEME */

/* MAIN CONTAINER */
const container = {
  display: "flex",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #020617, #022c22, #064e3b)",
  color: "#e2e8f0",
  fontFamily: "sans-serif",
};

/* SIDEBAR */
const sidebar = {
  width: "260px",
  padding: "30px",
  background: "rgba(255,255,255,0.03)",
  backdropFilter: "blur(12px)",
  borderRight: "1px solid rgba(255,255,255,0.08)",
};

const menu = {
  marginTop: "30px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const btn = {
  padding: "12px",
  background: "transparent",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#e2e8f0",
  borderRadius: "10px",
  cursor: "pointer",
};

const activeBtn = {
  ...btn,
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "white",
  fontWeight: "bold",
  boxShadow: "0 0 15px rgba(34,197,94,0.4)",
};

/* MAIN GRID */
const main = {
  flex: 1,
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr",
  gap: "20px",
  padding: "30px",
};

/* BIG CARD */
const bigCard = {
  gridColumn: "span 3",
  padding: "30px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.08)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 0 20px rgba(34,197,94,0.2)",
};

const bigNumber = {
  fontSize: "70px",
  fontWeight: "bold",
};

/* ANIMATED CIRCLE */
const circle = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  border: "4px solid #22c55e",
  borderTop: "4px solid transparent",
  animation: "spin 2s linear infinite",
};

/* SMALL CARD */
const card = {
  padding: "20px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
};

/* WIDE CARD */
const wideCard = {
  gridColumn: "span 2",
  padding: "20px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.08)",
};

/* TEXT */
const label = {
  opacity: 0.7,
  color: "#94a3b8",
};

const value = {
  fontSize: "28px",
  marginTop: "5px",
};

/* PROGRESS BAR */
const progressBg = {
  height: "8px",
  background: "#064e3b",
  borderRadius: "10px",
  marginTop: "10px",
};

const progressFill = {
  height: "100%",
  background: "linear-gradient(90deg, #22c55e, #4ade80)",
  borderRadius: "10px",
  boxShadow: "0 0 10px #22c55e",
};

/* 🔥 ANIMATION */
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`, styleSheet.cssRules.length);