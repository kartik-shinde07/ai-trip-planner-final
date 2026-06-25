import { useState } from "react";
import api from "../services/api";
import "./Itinerary.css";

function Itinerary() {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [travelers, setTravelers] = useState("");
  const [days, setDays] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
 

  const generateItinerary = async () => {
    if (
      !destination ||
      !budget ||
      !travelers ||
      !days
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post(
        "/ai/generate-itinerary",
        {
          destination,
          budget,
          travelers,
          days,
        }
      );

      setItinerary(response.data.itinerary);
    } catch (error) {
      console.log(error);
      alert("Failed to Generate Itinerary");
    } finally {
      setLoading(false);
    }
  };

  const saveItinerary = async () => {
  try {
    await api.post("/itinerary/save", {
      destination,
      budget,
      travelers,
      days,
      itinerary,
    });

   setMessage("Itinerary Saved Successfully!");
  } catch (error) {
    console.log(error);
    alert("Failed to Save Itinerary");
  }
};

 return (
  <div className="itinerary-container">

    <div className="itinerary-card">

      <h1>AI Itinerary Generator</h1>

      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <input
        type="number"
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <input
        type="number"
        placeholder="Travelers"
        value={travelers}
        onChange={(e) => setTravelers(e.target.value)}
      />

      <input
        type="number"
        placeholder="Days"
        value={days}
        onChange={(e) => setDays(e.target.value)}
      />

      <button
        className="generate-btn"
        onClick={generateItinerary}
        disabled={loading}
      >
        {loading
          ? "Generating..."
          : "Generate Itinerary"}
      </button>

      <div className="itinerary-result">
        {itinerary}
      </div>

      {itinerary && (
        <button
          className="save-btn"
          onClick={saveItinerary}
        >
          💾 Save Itinerary
        </button>
      )}

      {message && (
        <p
          style={{
            color: "green",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {message}
        </p>
      )}

    </div>

  </div>
);
}
export default Itinerary;