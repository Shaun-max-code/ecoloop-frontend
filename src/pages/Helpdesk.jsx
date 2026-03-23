import React from "react";

export default function Helpdesk() {
  return (
    <div style={container}>

      {/* 🔹 HERO SECTION */}
      <div style={hero}>
        
        {/* LEFT */}
        <div style={heroLeft}>
          <h1 style={title}>
            Need Help? <br /> <span style={{ color: "#22c55e" }}>Contact Support</span>
          </h1>

          <p style={desc}>
            Learn how to use EcoLoop, track your impact, and resolve issues quickly.
            Our support team is here to help you build a greener future 🌱
          </p>

          <button style={primaryBtn}>Contact Support</button>
        </div>

        {/* RIGHT */}
        <div style={heroRight}>
          <div style={illustration}>📞🌿</div>
        </div>

      </div>

      {/* 🔹 GRID SECTION */}
      <div style={grid}>

        <div style={card}>
          <h3>📘 How to Use EcoLoop</h3>
          <ul style={list}>
            <li>Upload waste details in the Upload section</li>
            <li>Earn points based on eco impact</li>
            <li>Track your progress in Dashboard</li>
            <li>Compete in Leaderboard 🌍</li>
          </ul>
        </div>

        <div style={card}>
          <h3>❓ FAQs</h3>
          <ul style={list}>
            <li>How are points calculated?</li>
            <li>How to increase my eco score?</li>
            <li>Why is my upload not updating?</li>
            <li>How to reset my account?</li>
          </ul>
        </div>

        <div style={card}>
          <h3>☎️ Helpline</h3>
          <p>Email: support@ecoloop.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Available: 9 AM - 6 PM</p>
        </div>

        <div style={card}>
          <h3>⚡ Quick Actions</h3>
          <button style={btn}>Report Issue</button>
          <button style={btn}>Track Request</button>
          <button style={btn}>Feedback</button>
        </div>

      </div>
    </div>
  );
}

/* 🎨 DARK ECO GLASS THEME */

/* BACKGROUND */
const container = {
  minHeight: "100vh",
  padding: "40px",
  background: "linear-gradient(135deg, #020617, #022c22, #064e3b)",
  fontFamily: "sans-serif",
  color: "#e2e8f0",
};

/* HERO */
const hero = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "40px",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",
  padding: "30px",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.08)",
};

const heroLeft = {
  maxWidth: "50%",
};

const heroRight = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const illustration = {
  fontSize: "80px",
};

/* TEXT */
const title = {
  fontSize: "36px",
  marginBottom: "10px",
};

const desc = {
  opacity: 0.7,
  marginBottom: "20px",
  color: "#94a3b8",
};

/* BUTTON */
const primaryBtn = {
  padding: "12px 20px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "white",
  cursor: "pointer",
  boxShadow: "0 0 15px rgba(34,197,94,0.4)",
};

/* GRID */
const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
};

/* CARD */
const card = {
  padding: "20px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
};

/* LIST */
const list = {
  marginTop: "10px",
  paddingLeft: "20px",
  lineHeight: "1.8",
  color: "#94a3b8",
};

/* BUTTONS */
const btn = {
  display: "block",
  width: "100%",
  marginTop: "10px",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "transparent",
  color: "#e2e8f0",
  cursor: "pointer",
};