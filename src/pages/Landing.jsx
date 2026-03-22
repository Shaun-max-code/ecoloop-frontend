import React from "react";

export default function Landing() {
  return (
    <div style={container}>

      {/* 🔹 NAVBAR */}
      <div style={navbar}>
        <h2 style={logo}>EcoLoop 🌱</h2>

        <div style={navLinks}>
          <a style={link}>Home</a>
          <a style={link}>Features</a>
          <a style={link}>Leaderboard</a>
          <a style={link}>Contact</a>
        </div>
      </div>

      {/* 🔹 HERO SECTION */}
      <div style={hero}>

        {/* LEFT CONTENT */}
        <div style={left}>
          <h1 style={title}>
            Smart <br />
            <span style={{ color: "#22c55e" }}>Sustainable Living</span>
          </h1>

          <p style={desc}>
            EcoLoop helps you track your waste, reduce carbon footprint,
            and build a greener future through smart eco actions 🌍
          </p>

          <div style={buttons}>
            <button style={primaryBtn}>Get Started</button>
            <button style={secondaryBtn}>Learn More</button>
          </div>
        </div>

        {/* RIGHT IMAGE DESIGN */}
        <div style={right}>
          <div style={imageWrapper}>
            <img
              src="/eco.jpg"   // 👉 put your 2nd image in public folder as eco.jpg
              alt="eco"
              style={image}
            />
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

/* 🎨 STYLES */

/* BACKGROUND */
const container = {
  minHeight: "100vh",
  padding: "30px 50px",
  background: "linear-gradient(135deg, #d9f99d, #6ee7b7, #34d399)",
  fontFamily: "sans-serif",
  color: "#1f2937",
};

/* NAVBAR */
const navbar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "40px",
};

const logo = {
  fontWeight: "bold",
};

const navLinks = {
  display: "flex",
  gap: "25px",
};

const link = {
  cursor: "pointer",
  fontWeight: "500",
};

/* HERO */
const hero = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "60px",
};

/* LEFT */
const left = {
  maxWidth: "50%",
};

const title = {
  fontSize: "60px",
  fontWeight: "bold",
};

const desc = {
  marginTop: "15px",
  opacity: 0.7,
  lineHeight: "1.6",
};

/* BUTTONS */
const buttons = {
  marginTop: "20px",
  display: "flex",
  gap: "15px",
};

const primaryBtn = {
  padding: "12px 20px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg, #22c55e, #10b981)",
  color: "white",
  cursor: "pointer",
};

const secondaryBtn = {
  padding: "12px 20px",
  borderRadius: "10px",
  border: "1px solid rgba(0,0,0,0.2)",
  background: "white",
  cursor: "pointer",
};

/* RIGHT IMAGE */
const right = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageWrapper = {
  width: "350px",
  height: "350px",
  borderRadius: "50%",
  background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
};

const image = {
  width: "80%",
  borderRadius: "50%",
};

/* FEATURES */
const features = {
  marginTop: "40px",
};

const sectionTitle = {
  fontSize: "28px",
  marginBottom: "20px",
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
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
};