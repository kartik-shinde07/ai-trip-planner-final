const generateItinerary = async (req, res) => {
  try {
    res.json({
      itinerary: "Day 1: Beach Visit\nDay 2: Fort Visit\nDay 3: Shopping",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  generateItinerary,
};
