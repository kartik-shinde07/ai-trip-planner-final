const Trip = require("../models/Trip");
const Itinerary = require("../models/Itinerary");

const getStats = async (req, res) => {
  try {
    const trips = await Trip.find({
      user: req.user.id,
    });

    const itineraries = await Itinerary.find({
      user: req.user.id,
    });

    const totalTrips = trips.length;

    const totalBudget = trips.reduce(
      (sum, trip) => sum + Number(trip.budget || 0),
      0,
    );

    const savedItineraries = itineraries.length;

    res.json({
      totalTrips,
      totalBudget,
      savedItineraries,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch stats",
    });
  }
};

module.exports = { getStats };
