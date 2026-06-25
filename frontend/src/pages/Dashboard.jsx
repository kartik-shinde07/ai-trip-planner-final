import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();


  const [stats, setStats] = useState({
    totalTrips: 0,
    totalBudget: 0,
    savedItineraries: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/dashboard/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard-container">

      <h1 className="dashboard-title">
        Travel Dashboard
      </h1>

      <div className="stats-grid">

        <div className="stat-card">
          <h2>Total Trips</h2>
          <p>{stats.totalTrips}</p>
        </div>

        <div className="stat-card">
          <h2>Total Budget</h2>
          <p>₹{stats.totalBudget}</p>
        </div>

        <div className="stat-card">
          <h2>Saved Itineraries</h2>
          <p>{stats.savedItineraries}</p>
        </div>

      </div>

      <div
        className="stats-grid"
        style={{ marginTop: "30px" }}
      >

        <div
  className="stat-card"
  onClick={() => navigate("/trips")}
>
  <h2>Create Trip</h2>
  <p>✈️</p>
</div>

        <div
  className="stat-card"
  onClick={() => navigate("/itinerary")}
>
  <h2>Generate AI Plan</h2>
  <p>🤖</p>
</div>

        <div
  className="stat-card"
  onClick={() => navigate("/saved-itineraries")}
>
  <h2>View Saved Trips</h2>
  <p>📋</p>
</div>

      </div>

    </div>
  );
}

export default Dashboard;