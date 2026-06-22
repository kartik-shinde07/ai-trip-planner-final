import { useEffect, useState } from "react";
import api from "../services/api";

function SavedItineraries() {
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItineraries = async () => {
    try {
      const response = await api.get("/itinerary");

      setItineraries(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteItinerary = async (id) => {
  try {
    await api.delete(`/itinerary/${id}`);

    setItineraries(
      itineraries.filter(
        (item) => item._id !== id
      )
    );
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    fetchItineraries();
  }, []);

  if (loading) {
    return <h2>Loading saved itineraries...</h2>;
  }

  return (
    <div>
      <h1>Saved Itineraries</h1>

      {itineraries.length === 0 && (
        <h3>No Saved Itineraries Found</h3>
      )}

      {itineraries.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{item.destination}</h3>

          <p>
            <strong>Budget:</strong> ₹{item.budget}
          </p>

          <p>
            <strong>Travelers:</strong> {item.travelers}
          </p>

          <p>
            <strong>Days:</strong> {item.days}
          </p>

          <div
            style={{
              whiteSpace: "pre-wrap",
              marginTop: "10px",
            }}
          >
            {item.itinerary}
          </div>

          <button
  onClick={() => deleteItinerary(item._id)}
  style={{
    marginTop: "15px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  }}
>
  Delete
</button>
        </div>
      ))}
    </div>
  );
}

export default SavedItineraries;