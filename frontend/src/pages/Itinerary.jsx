import { useState } from "react";
import api from "../services/api";

function Itinerary() {
  const [itinerary, setItinerary] = useState("");

  const generateItinerary = async () => {
    try {
      const response = await api.post(
        "/ai/generate-itinerary"
      );

      setItinerary(response.data.itinerary);
    } catch (error) {
      console.log(error);
      alert("Failed to Generate Itinerary");
    }
  };

  return (
    <div>
      <h1>AI Itinerary Generator</h1>

      <button onClick={generateItinerary}>
        Generate Itinerary
      </button>

      <pre>{itinerary}</pre>
    </div>
  );
}

export default Itinerary;