const Trip = require("../models/Trip");

const getStats = async (req, res) => {
  try {
    const trips = await Trip.find({
      user: req.user.id,
    });

    const totalTrips = trips.length;

    const totalBudget = trips.reduce(
      (sum, trip) => sum + Number(trip.budget || 0),
      0,
    );

    res.json({
      totalTrips,
      totalBudget,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch stats",
    });
  }
};

module.exports = { getStats };
