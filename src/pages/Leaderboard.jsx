import React from 'react';

export default function Leaderboard({ userPoints }) {
  const players = [
    { name: "SHAUN_MATHEW", pts: userPoints, rank: "01", self: true },
    { name: "ALEX_V_09", pts: 4200, rank: "02" },
    { name: "PRIYA_TRACER", pts: 3850, rank: "03" },
  ].sort((a, b) => b.pts - a.pts);

  return (
    <div className="home__container animate-fade-up">
      <h1 className="home__title text-center mb-12">Global <span className="neon-text">Grid</span></h1>
      <div className="space-y-4">
        {players.map((p, i) => (
          <div key={i} className={`glass-card p-6 flex justify-between items-center ${p.self ? 'border-[var(--green-neon)] shadow-glow' : 'opacity-70'}`}>
            <span className="font-bold">{p.rank} {p.name}</span>
            <span className="neon-text font-mono">{p.pts} PTS</span>
          </div>
        ))}
      </div>
    </div>
  );
}