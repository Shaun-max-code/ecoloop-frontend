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

/* 🎨 UPDATED LAYOUT STYLES */

/* BACKGROUND */
const container = {
  minHeight: "100vh",
  fontFamily: "sans-serif",
  color: "#1f2937",
};

/* NAVBAR */
const navbar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 50px",
  position: "absolute",
  width: "100%",
  zIndex: 10,
  color: "white",
};

const logo = {
  fontWeight: "bold",
};

const navLinks = {
  display: "flex",
  gap: "25px",
};

const link = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};

/* HERO */
const hero = {
  height: "90vh",
  display: "flex",
  alignItems: "center",
  padding: "0 80px",

  /* 🔥 BACKGROUND IMAGE */
  backgroundImage: `
    linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
    url('/eco.jpg')
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

/* CONTENT */
const heroContent = {
  maxWidth: "600px",
  color: "white",
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
  background: "linear-gradient(135deg, #22c55e, #10b981)",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};

const secondaryBtn = {
  padding: "12px 22px",
  borderRadius: "10px",
  border: "1px solid white",
  background: "transparent",
  color: "white",
  cursor: "pointer",
};

/* FEATURES */
const features = {
  padding: "60px 50px",
  background: "linear-gradient(135deg, #d9f99d, #6ee7b7, #34d399)",
};

const sectionTitle = {
  fontSize: "28px",
  marginBottom: "30px",
};

const featureGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "20px",
};

const card = {
  padding: "20px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(10px)",
};