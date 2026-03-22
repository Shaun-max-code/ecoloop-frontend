import React, { useEffect } from "react";

export default function Profile() {
  const user = {
    name: "Shaun Mathew",
    email: "shaun@email.com",
    phone: "+91 98765 43210",
    points: 1240,
    co2: 32.5,
    waste: 15,
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes pulseGlow {
        0% { box-shadow: 0 0 5px #10b981; }
        50% { box-shadow: 0 0 20px #10b981; }
        100% { box-shadow: 0 0 5px #10b981; }
      }

      @keyframes shimmer {
        0% { background-position: -200px 0; }
        100% { background-position: 200px 0; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={container}>
      
      {/* TITLE */}
      <h1 style={title}>
        My Profile
      </h1>

      <div style={grid}>

        {/* 👤 PROFILE CARD */}
        <div style={card}>
          
          <div style={{ textAlign: "center", position: "relative" }}>
            
            <div style={avatarGlow}></div>

            <div style={avatar}>👤</div>

            <h2>{user.name}</h2>
            <p style={muted}>{user.email}</p>

            <button style={editBtn}>Edit Profile</button>
          </div>

          <div style={divider}></div>

          <div style={info}>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Member Since:</b> Jan 2026</p>
            <p><b>Status:</b> <span style={green}>Active 🌱</span></p>
          </div>
        </div>

        {/* 📊 ECO IMPACT */}
        <div style={card}>
          <h3>Eco Impact</h3>

          <div style={statRow}>
            <span>Total Points</span>
            <span style={green}>{user.points}</span>
          </div>

          <div style={statRow}>
            <span>CO₂ Saved</span>
            <span style={green}>{user.co2} KG</span>
          </div>

          <div style={statRow}>
            <span>Waste Logged</span>
            <span style={green}>{user.waste}</span>
          </div>

          <div style={progressBg}>
            <div
              style={{
                ...progressFill,
                width: `${user.points / 20}%`,
              }}
            />
          </div>
        </div>

        {/* 🌱 SUSTAINABILITY */}
        <div style={cardWide}>
          <h3>🌱 Sustainability Insights</h3>

          <p style={muted}>
            You’ve reduced approx <b>{user.co2} kg</b> of CO₂ emissions.
          </p>

          <div style={badges}>
            <span style={badge}>♻️ Recycler</span>
            <span style={badge}>🌍 Eco Warrior</span>
            <span style={badge}>⚡ Active User</span>
          </div>
        </div>

        {/* ⚙️ SETTINGS */}
        <div style={card}>
          <h3>Settings</h3>

          <button style={btn}>Change Password</button>
          <button style={btn}>Notification Settings</button>
          <button style={dangerBtn}>Logout</button>
        </div>

      </div>
    </div>
  );
}

/* 🎨 UPDATED COLOR SYSTEM */

/* BACKGROUND */
const container = {
  minHeight: "100vh",
  padding: "40px",
  background: "linear-gradient(135deg, #d9f99d, #6ee7b7, #34d399)",
  color: "#1f2937",
  fontFamily: "sans-serif",
};

/* TITLE */
const title = {
  fontSize: "32px",
  marginBottom: "30px",
  color: "#065f46",
};

/* GRID */
const grid = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "20px",
};

/* CARD */
const card = {
  padding: "20px",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(0,0,0,0.05)",
};

const cardWide = {
  ...card,
  gridColumn: "span 2",
};

/* AVATAR */
const avatar = {
  fontSize: "60px",
  color: "#22c55e",
};

const avatarGlow = {
  position: "absolute",
  width: "100px",
  height: "100px",
  background: "radial-gradient(circle, rgba(16,185,129,0.3), transparent)",
  filter: "blur(20px)",
  top: "-10px",
  left: "50%",
  transform: "translateX(-50%)",
};

/* BUTTONS */
const editBtn = {
  marginTop: "10px",
  padding: "10px 15px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg, #22c55e, #10b981)",
  color: "white",
};

const btn = {
  display: "block",
  width: "100%",
  marginTop: "10px",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid rgba(0,0,0,0.1)",
  background: "transparent",
  color: "#1f2937",
};

const dangerBtn = {
  ...btn,
  border: "1px solid red",
  color: "red",
  boxShadow: "0 0 12px rgba(255,50,50,0.3)",
};

/* TEXT */
const muted = { opacity: 0.6 };

const info = { marginTop: "15px", lineHeight: "1.8" };

const divider = {
  height: "1px",
  background: "rgba(0,0,0,0.08)",
  margin: "15px 0",
};

const statRow = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
};

const green = {
  color: "#22c55e",
  fontWeight: "bold",
};

/* PROGRESS */
const progressBg = {
  height: "8px",
  background: "#d1fae5",
  borderRadius: "10px",
  marginTop: "15px",
};

const progressFill = {
  height: "100%",
  background: "linear-gradient(90deg, #22c55e, #10b981)",
  borderRadius: "10px",
  animation: "pulseGlow 2s infinite",
};

/* BADGES */
const badges = {
  marginTop: "15px",
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const badge = {
  padding: "6px 12px",
  borderRadius: "20px",
  border: "1px solid #22c55e",
  color: "#065f46",
  background: "rgba(34,197,94,0.1)",
};