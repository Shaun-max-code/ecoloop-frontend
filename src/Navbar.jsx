import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">EcoLoop 🌱</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </div>
    </div>
  );
}