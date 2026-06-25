import { useEffect, useState } from "react";
import api from "../services/api";
import "./Trips.css";

function Trips() {
  const [trips, setTrips] = useState([]);

  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const [travelers, setTravelers] = useState("");

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/trips", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTrips(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTrip = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/trips",
        {
          destination,
          startDate,
          endDate,
          budget,
          travelers,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Trip Created Successfully");

      setDestination("");
      setStartDate("");
      setEndDate("");
      setBudget("");
      setTravelers("");

      fetchTrips();
    } catch (error) {
      console.log(error);
      alert("Trip Creation Failed");
    }
  };
  const deleteTrip = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await api.delete(`/trips/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("Trip Deleted");

    fetchTrips();
  } catch (error) {
    console.log(error);
    alert("Delete Failed");
  }
};

const editTrip = async (trip) => {
  const newBudget = prompt(
    "Enter new budget:",
    trip.budget
  );

  if (!newBudget) return;

  try {
    const token = localStorage.getItem("token");

    await api.put(
      `/trips/${trip._id}`,
      {
        budget: Number(newBudget),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Trip Updated");

    fetchTrips();
  } catch (error) {
    console.log(error);
    alert("Update Failed");
  }
};

 return (
  <div>

    <div className="trip-form-card"></div>
      
      <h1>My Trips</h1>

      <h2>Create Trip</h2>

      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <br /><br />

      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <br /><br />

      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Travelers"
        value={travelers}
        onChange={(e) => setTravelers(e.target.value)}
      />

      <br /><br />

      <button onClick={createTrip}>
  Create Trip
</button>



<hr />

      {trips.length === 0 ? (
        <p>No Trips Found</p>
      ) : (
        trips.map((trip) => (
          <div
  key={trip._id}
  className="trip-card"
>
  <h3>{trip.destination}</h3>
  <p>Budget: ₹{trip.budget}</p>
  <p>Travelers: {trip.travelers}</p>

 <button
  className="edit-btn"
  onClick={() => editTrip(trip)}
></button>

  <button
  className="delete-btn"
  onClick={() => deleteTrip(trip._id)}
></button>
 
 
  <hr />
</div>
        ))
      )}
    </div>
  );
}

export default Trips;