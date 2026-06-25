const Itinerary = require("../models/Itinerary");

const saveItinerary = async (req, res) => {
  try {
    const { destination, budget, travelers, days, itinerary } = req.body;

    if (!destination || !budget || !travelers || !days || !itinerary) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const savedItinerary = await Itinerary.create({
      destination,
      budget,
      travelers,
      days,
      itinerary,
      user: req.user.id,
    });

    res.status(201).json(savedItinerary);
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

const updateItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);

    if (!itinerary) {
      return res.status(404).json({
        message: "Itinerary not found",
      });
    }

    const updatedItinerary = await Itinerary.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );

    res.status(200).json(updatedItinerary);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Update failed",
    });
  }
};

module.exports = {
  saveItinerary,
  getItineraries,
  deleteItinerary,
  updateItinerary,
};
