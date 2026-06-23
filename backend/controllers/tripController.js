const Trip = require("../models/Trip");

// Create Trip
// This function saves a new trip in MongoDB for the logged-in user.
exports.createTrip = async (req, res) => {
  try {
    const trip = await Trip.create({
      user: req.user.id,
      destination: req.body.destination,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      budget: req.body.budget,
      travelers: req.body.travelers,
      travelStyle: req.body.travelStyle,
    });

    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Trips
// This function fetches all trips created by the logged-in user.
exports.getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Trip
// This function fetches one trip using its ID.
exports.getTripById = async (req, res) => {
  try {
    const trip = await Trip.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Trip
// This function updates an existing trip using its ID.
exports.updateTrip = async (req, res) => {
  try {
    const trip = await Trip.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      req.body,
      { new: true },
    );

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Trip
// This function deletes a trip using its ID.
exports.deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!trip) {
      return res.status(404).json({
        message: "Trip not found",
      });
    }

    res.status(200).json({
      message: "Trip deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
