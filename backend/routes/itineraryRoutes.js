const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  saveItinerary,
  getItineraries,
  deleteItinerary,
} = require("../controllers/itineraryController");

router.post("/save", protect, saveItinerary);

router.get("/", protect, getItineraries);

router.delete("/:id", protect, deleteItinerary);

module.exports = router;
