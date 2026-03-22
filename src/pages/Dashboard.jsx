import React from 'react';

export default function Dashboard({ stats }) { // <--- MUST have { stats } here
  return (
    <div className="home__container animate-fade-up">
      <div className="home__header text-left">
        <span className="tag">Live System Data</span>
        <h1 className="home__title mt-4 italic">Impact <span className="neon-text">Nexus</span></h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main Stats Card */}
        <div className="glass-card p-8 col-span-1 md:col-span-2 flex justify-between items-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--green-muted)] blur-[60px] opacity-20" />
           <div>
             <p className="form-label">Total Points Earned</p>
             <h2 className="text-6xl font-black neon-text mt-2">{stats.points}</h2>
           </div>
           <div className="hidden md:block w-20 h-20 rounded-full border-b-2 border-r-2 border-[var(--green-neon)] animate-spin-slow" />
        </div>

        {/* Secondary Stats */}
        <div className="glass-card p-8 hover:border-[var(--green-neon)] transition-colors">
          <p className="form-label">CO₂ Diversion</p>
          <h3 className="text-3xl font-bold mt-2 italic">{stats.co2.toFixed(1)} KG</h3>
        </div>

        <div className="glass-card p-8 hover:border-[var(--green-neon)] transition-colors">
          <p className="form-label">Waste Entries</p>
          <h3 className="text-3xl font-bold mt-2 italic">{stats.waste} LOGS</h3>
        </div>
      </div>
    </div>
  );
}