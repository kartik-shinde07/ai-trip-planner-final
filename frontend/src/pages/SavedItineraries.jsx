import { useEffect, useState } from "react";
import api from "../services/api";

function SavedItineraries() {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    fetchItineraries();
  }, []);

  const fetchItineraries = async () => {
    try {
      const response = await api.get(
        "/itinerary"
      );

      setItineraries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Saved Itineraries</h1>

      {itineraries.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "15px 0",
            borderRadius: "10px",
          }}
        >
          <h3>{item.destination}</h3>

          <p>
            Budget: ₹{item.budget}
          </p>

          <p>
            Travelers: {item.travelers}
          </p>

          <p>
            Days: {item.days}
          </p>

          <div
            style={{
              whiteSpace: "pre-wrap",
            }}
          >
            {item.itinerary}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SavedItineraries;