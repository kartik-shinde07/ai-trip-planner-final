import { useState } from "react";
import api from "../services/api";

function Itinerary() {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [travelers, setTravelers] = useState("");
  const [days, setDays] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [loading, setLoading] = useState(false);

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

    alert("Itinerary Saved Successfully");
  } catch (error) {
    console.log(error);
    alert("Failed to Save Itinerary");
  }
};

  return (
    <div>
      <h1>AI Itinerary Generator</h1>

      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Travelers"
        value={travelers}
        onChange={(e) => setTravelers(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Days"
        value={days}
        onChange={(e) => setDays(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={generateItinerary}
        disabled={loading}
      >
        {loading
          ? "Generating..."
          : "Generate Itinerary"}
      </button>

      <hr />

      <div
        style={{
          whiteSpace: "pre-wrap",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          backgroundColor: "#f8f8f8",
        }}
      >
        {itinerary}
      </div>
      {
  itinerary && (
    <button onClick={saveItinerary}>
      💾 Save Itinerary
    </button>
  )
}
    </div>
  );
}

export default Itinerary;