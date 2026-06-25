import { useEffect, useState } from "react";
import api from "../services/api";
import "./SavedItineraries.css";

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
  <div className="saved-container">

    <h1 className="saved-title">
      Saved Itineraries
    </h1>

    {itineraries.length === 0 && (
      <p className="empty-state">
        No Saved Itineraries Found
      </p>
    )}

    {itineraries.map((item) => (
      <div
        key={item._id}
        className="saved-card"
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
          className="delete-btn"
          onClick={() => deleteItinerary(item._id)}
        >
          Delete
        </button>

      </div>
    ))}

  </div>
);}

export default SavedItineraries;