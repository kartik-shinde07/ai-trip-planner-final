const Itinerary = require("../models/Itinerary");

const saveItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.create(req.body);

    res.status(201).json(itinerary);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to save itinerary",
    });
  }
};

const getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find().sort({
      createdAt: -1,
    });

    res.json(itineraries);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch itineraries",
    });
  }
};

module.exports = {
  saveItinerary,
  getItineraries,
};
