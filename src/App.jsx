import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';           // Must have /pages/
import Dashboard from './pages/Dashboard'; // Must have /pages/
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Helpdesk from "./pages/Helpdesk";
import Landing from "./pages/Landing";

function App() {
  const [stats, setStats] = useState({
    points: 1240, waste: 15, co2: 32.5
  });

  const handleUpload = (weight) => {
    setStats(prev => ({
      points: prev.points + Math.round(weight * 12),
      waste: prev.waste + 1,
      co2: prev.co2 + (weight * 0.82)
    }));
  };

  return (
    <Router>
      <div className="page-wrapper min-h-screen bg-[#030a06]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home onUpload={handleUpload} />} />
          <Route path="/dashboard" element={<Dashboard stats={stats} />} />
          <Route path="/leaderboard" element={<Leaderboard userPoints={stats.points} />} />
          <Route path="/profile" element={<Profile stats={stats} />} />
          <Route path="/helpdesk" element={<Helpdesk />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;