const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  saveItinerary,
  getItineraries,
  deleteItinerary,
  updateItinerary,
} = require("../controllers/itineraryController");

router.post("/save", protect, saveItinerary);

router.get("/", protect, getItineraries);

router.delete("/:id", protect, deleteItinerary);

router.put("/:id", protect, updateItinerary);

module.exports = router;
