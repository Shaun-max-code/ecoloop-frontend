import { useEffect, useState } from "react";
import axios from "axios";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/leaderboard/")
      .then(res => setUsers(res.data.users));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>Leaderboard</h2>

        {users.map((u, i) => (
          <div key={i}>
            {i + 1}. {u.user__username} — {u.total_points}
          </div>
        ))}
      </div>
    </div>
  );
}