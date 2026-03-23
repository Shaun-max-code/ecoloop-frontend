import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div style={container}>

      {/* 🔹 HERO SECTION */}
      <div style={hero}>

        <div style={heroContent}>
          <h1 style={title}>
            Smart <br />
            <span style={{ color: "#22c55e" }}>Sustainable Living</span>
          </h1>

          <p style={desc}>
            EcoLoop helps you track your waste, reduce carbon footprint,
            and build a greener future through smart eco actions 🌍
          </p>

          <div style={buttons}>
            <button style={primaryBtn} onClick={() => navigate("/dashboard")}>
              Get Started
            </button>

            <button style={secondaryBtn} onClick={() => navigate("/helpdesk")}>
              Learn More
            </button>
          </div>
        </div>

      </div>

      {/* 🔹 FEATURES */}
      <div style={features}>
        <h2 style={sectionTitle}>Why EcoLoop?</h2>

        <div style={featureGrid}>
          <div style={card}>
            <h3>♻️ Track Waste</h3>
            <p>Monitor and log your daily waste contributions easily.</p>
          </div>

          <div style={card}>
            <h3>🌍 Reduce CO₂</h3>
            <p>See real-time impact of your eco-friendly actions.</p>
          </div>

          <div style={card}>
            <h3>🏆 Compete</h3>
            <p>Climb the leaderboard and become an eco champion.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

/* 🎨 DARK ECO GLASS THEME */

/* BACKGROUND */
const container = {
  minHeight: "100vh",
  fontFamily: "sans-serif",
  color: "#e2e8f0",
  background: "linear-gradient(135deg, #020617, #022c22, #064e3b)",
};

/* HERO */
const hero = {
  height: "90vh",
  display: "flex",
  alignItems: "center",
  padding: "0 80px",

  backgroundImage: `
    linear-gradient(rgba(2,6,23,0.7), rgba(2,44,34,0.7)),
    url('/eco.jpg')
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

/* CONTENT */
const heroContent = {
  maxWidth: "600px",
  color: "#e2e8f0",
};

/* TEXT */
const title = {
  fontSize: "64px",
  fontWeight: "bold",
  lineHeight: "1.2",
};

const desc = {
  marginTop: "20px",
  opacity: 0.85,
  lineHeight: "1.6",
  color: "#94a3b8",
};

/* BUTTONS */
const buttons = {
  marginTop: "30px",
  display: "flex",
  gap: "15px",
};

const primaryBtn = {
  padding: "12px 22px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 0 15px rgba(34,197,94,0.4)",
};

const secondaryBtn = {
  padding: "12px 22px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "transparent",
  color: "#e2e8f0",
  cursor: "pointer",
};

/* FEATURES */
const features = {
  padding: "60px 50px",
  background: "linear-gradient(135deg, #020617, #022c22, #064e3b)",
};

/* TITLE */
const sectionTitle = {
  fontSize: "28px",
  marginBottom: "30px",
};

/* GRID */
const featureGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "20px",
};

/* CARD */
const card = {
  padding: "20px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#e2e8f0",
};