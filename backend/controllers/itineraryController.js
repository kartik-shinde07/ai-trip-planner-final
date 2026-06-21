const Itinerary = require("../models/Itinerary");

const saveItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.create({
      ...req.body,
      user: req.user.id,
    });

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
    const itineraries = await Itinerary.find({
      user: req.user.id,
    }).sort({
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

const deleteItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);

    if (!itinerary) {
      return res.status(404).json({
        message: "Itinerary not found",
      });
    }

    await Itinerary.findByIdAndDelete(req.params.id);

    res.json({
      message: "Itinerary deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Delete failed",
    });
  }
};

module.exports = {
  saveItinerary,
  getItineraries,
  deleteItinerary,
};
