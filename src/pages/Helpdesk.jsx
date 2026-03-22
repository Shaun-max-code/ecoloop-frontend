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

        {/* RIGHT (Illustration Placeholder) */}
        <div style={heroRight}>
          <div style={illustration}>📞🌿</div>
        </div>

      </div>

      {/* 🔹 GRID SECTION */}
      <div style={grid}>

        {/* 📘 HOW TO USE */}
        <div style={card}>
          <h3>📘 How to Use EcoLoop</h3>
          <ul style={list}>
            <li>Upload waste details in the Upload section</li>
            <li>Earn points based on eco impact</li>
            <li>Track your progress in Dashboard</li>
            <li>Compete in Leaderboard 🌍</li>
          </ul>
        </div>

        {/* ❓ FAQ */}
        <div style={card}>
          <h3>❓ FAQs</h3>
          <ul style={list}>
            <li>How are points calculated?</li>
            <li>How to increase my eco score?</li>
            <li>Why is my upload not updating?</li>
            <li>How to reset my account?</li>
          </ul>
        </div>

        {/* ☎️ HELPLINE */}
        <div style={card}>
          <h3>☎️ Helpline</h3>
          <p>Email: support@ecoloop.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Available: 9 AM - 6 PM</p>
        </div>

        {/* ⚡ QUICK ACTIONS */}
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

/* 🎨 COLOR SYSTEM APPLIED */

/* BACKGROUND */
const container = {
  minHeight: "100vh",
  padding: "40px",
  background: "linear-gradient(135deg, #d9f99d, #6ee7b7, #34d399)",
  fontFamily: "sans-serif",
  color: "#1f2937",
};

/* HERO */
const hero = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "40px",
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(10px)",
  padding: "30px",
  borderRadius: "20px",
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
};

/* BUTTON */
const primaryBtn = {
  padding: "12px 20px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg, #22c55e, #10b981)",
  color: "white",
  cursor: "pointer",
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
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(0,0,0,0.05)",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
};

/* LIST */
const list = {
  marginTop: "10px",
  paddingLeft: "20px",
  lineHeight: "1.8",
};

/* BUTTONS */
const btn = {
  display: "block",
  width: "100%",
  marginTop: "10px",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid rgba(0,0,0,0.1)",
  background: "transparent",
  cursor: "pointer",
};