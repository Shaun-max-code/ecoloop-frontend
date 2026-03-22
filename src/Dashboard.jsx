import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/dashboard-data/")
      .then(res => setData(res.data));
  }, []);

  return (
    <div className="container">
      <div className="card dashboard">
        <h2>Dashboard</h2>

        <div className="stats">
          <div>Total Weight: {data.total_weight}</div>
          <div>Points: {data.total_points}</div>
          <div>Uploads: {data.total_submissions}</div>
        </div>
      </div>
    </div>
  );
}