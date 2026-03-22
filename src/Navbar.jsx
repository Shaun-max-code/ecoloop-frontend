import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 border-b border-white/10">
      <Link to="/" className="font-bold text-green-400">EcoLoop 🌱</Link>
      <div className="flex gap-6">
        <Link to="/dashboard" className="text-white hover:text-green-400">Dashboard</Link>
        <Link to="/leaderboard" className="text-white hover:text-green-400">Leaderboard</Link>
        <Link to="/profile" className="text-white hover:text-green-400">Profile</Link>
        

<Link to="/helpdesk">Helpdesk</Link>
      </div>
    </nav>
  );
}