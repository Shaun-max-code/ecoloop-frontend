import React, { useEffect } from "react";

export default function Leaderboard({ userPoints }) {
  const players = [
    { name: "SHAUN_MATHEW", pts: userPoints, self: true },
    { name: "ALEX_V_09", pts: 4200 },
    { name: "PRIYA_TRACER", pts: 3850 },
    { name: "DAVID_X", pts: 3000 },
    { name: "NEHA_DEV", pts: 2700 },
  ].sort((a, b) => b.pts - a.pts);

  const maxPoints = players[0].pts;
  const top3 = players.slice(0, 3);
  const rest = players.slice(3);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>
        Leader<span style={{ color: "#22c55e" }}>Board</span>
      </h1>

      {/* 🏆 TOP 3 (CENTERED #1) */}
      <div style={top3Wrapper}>
        
        {/* 2nd */}
        {top3[1] && (
          <div style={cardStyle(1, top3[1].self)}>
            <div style={rankBadgeStyle(2)}>2</div>
            <div style={avatarStyle(top3[1].self)}>👤</div>
            <h3>{top3[1].name}</h3>
            <XPBar pts={top3[1].pts} max={maxPoints} />
          </div>
        )}

        {/* 1st */}
        {top3[0] && (
          <div style={cardStyle(0, top3[0].self)}>
            <div style={rankBadgeStyle(1)}>1</div>
            <div style={{ ...avatarStyle(top3[0].self), fontSize: "50px" }}>👤</div>
            <h2>{top3[0].name}</h2>
            <XPBar pts={top3[0].pts} max={maxPoints} />
          </div>
        )}

        {/* 3rd */}
        {top3[2] && (
          <div style={cardStyle(2, top3[2].self)}>
            <div style={rankBadgeStyle(3)}>3</div>
            <div style={avatarStyle(top3[2].self)}>👤</div>
            <h3>{top3[2].name}</h3>
            <XPBar pts={top3[2].pts} max={maxPoints} />
          </div>
        )}
      </div>

      {/* 📊 OTHER PLAYERS */}
      <div style={{ maxWidth: "650px", margin: "auto" }}>
        {rest.map((p, i) => (
          <div key={i} style={listItemStyle(p.self)}>
            
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ color: "#22c55e" }}>#{i + 4}</span>
              <div style={smallAvatar(p.self)}>👤</div>
              <span>{p.name}</span>
            </div>

            <div style={{ width: "40%" }}>
              <XPBar pts={p.pts} max={maxPoints} small />
            </div>

            <span style={pointsText}>{p.pts} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 🎮 XP BAR */
function XPBar({ pts, max, small }) {
  const width = (pts / max) * 100;

  return (
    <div style={{ width: "100%", marginTop: "8px" }}>
      <div style={xpBg}>
        <div style={{ ...xpFill, width: `${width}%` }} />
      </div>
      {!small && (
        <p style={{ fontSize: "12px", marginTop: "4px", color: "#1f2937" }}>
          {pts} pts
        </p>
      )}
    </div>
  );
}

/* 🎨 UPDATED COLORS */

/* BACKGROUND */
const containerStyle = {
  minHeight: "100vh",
  padding: "40px 20px",
  background: "linear-gradient(135deg, #d9f99d, #6ee7b7, #34d399)",
  color: "#1f2937",
  fontFamily: "sans-serif",
};

const titleStyle = {
  textAlign: "center",
  fontSize: "2.6rem",
  marginBottom: "50px",
  color: "#065f46",
};

const top3Wrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "30px",
  marginBottom: "60px",
};

/* 🏆 CARD */
const cardStyle = (position, isSelf) => {
  const scale =
    position === 0 ? 1.25 :
    position === 1 ? 1 :
    0.9;

  return {
    transform: `scale(${scale})`,
    textAlign: "center",
    padding: "22px",
    borderRadius: "18px",
    width: "140px",
    position: "relative",
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",
    border: isSelf ? "2px solid #22c55e" : "1px solid rgba(0,0,0,0.05)",
    boxShadow: isSelf
      ? "0 0 20px #10b98155"
      : "0 5px 15px rgba(0,0,0,0.05)",
  };
};

/* 🔢 BADGE */
const rankBadgeStyle = (rank) => ({
  position: "absolute",
  top: "-12px",
  left: "50%",
  transform: "translateX(-50%)",
  background:
    rank === 1
      ? "#22c55e"
      : rank === 2
      ? "#94a3b8"
      : "#10b981",
  color: "white",
  fontWeight: "bold",
  borderRadius: "50%",
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

/* 👤 AVATAR */
const avatarStyle = (isSelf) => ({
  fontSize: "45px",
  marginTop: "10px",
  color: isSelf ? "#22c55e" : "#6b7280",
});

const smallAvatar = (isSelf) => ({
  fontSize: "20px",
  color: isSelf ? "#22c55e" : "#6b7280",
});

/* 📊 LIST */
const listItemStyle = (isSelf) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  marginBottom: "12px",
  borderRadius: "14px",
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(10px)",
  border: isSelf ? "1px solid #22c55e" : "1px solid rgba(0,0,0,0.05)",
  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
});

/* XP */
const xpBg = {
  height: "6px",
  background: "#d1fae5",
  borderRadius: "10px",
  overflow: "hidden",
};

const xpFill = {
  height: "100%",
  background: "linear-gradient(90deg, #22c55e, #10b981)",
  boxShadow: "0 0 8px #10b981",
  transition: "width 0.6s ease",
};

const pointsText = {
  color: "#22c55e",
  fontWeight: "bold",
};