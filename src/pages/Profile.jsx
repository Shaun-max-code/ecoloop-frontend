import React from 'react';

export default function Profile({ stats }) {
  return (
    <div className="home__container animate-fade-up text-center">
      <div className="w-24 h-24 bg-[var(--green-muted)] rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-[var(--green-neon)]">
        <span className="text-4xl">👤</span>
      </div>
      <h1 className="home__title">Shaun Mathew</h1>
      <p className="tag">Level 4 Eco-Guardian</p>
      
      <div className="mt-12 glass-card p-8 max-w-sm mx-auto">
        <p className="form-label">Your Lifetime Impact</p>
        <h2 className="text-4xl font-black neon-text mt-2">{stats.points} XP</h2>
      </div>
    </div>
  );
}