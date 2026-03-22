// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-white/10 backdrop-blur-lg border-r border-white/20 p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-10">
          EcoLoop
        </h1>
        <ul className="space-y-4">
          <li className="hover:translate-x-2 transition-transform cursor-pointer font-medium text-gray-700">Dashboard</li>
          <li className="hover:translate-x-2 transition-transform cursor-pointer font-medium text-gray-700">Leaderboard</li>
          <li className="hover:translate-x-2 transition-transform cursor-pointer font-medium text-gray-700">Profile</li>
        </ul>
      </div>
      <div className="p-4 bg-green-50 rounded-xl">
        <p className="text-xs text-green-800 font-bold">Your Impact</p>
        <p className="text-xl">🌿 1,240kg</p>
      </div>
    </nav>
  );
};

export default Navbar;