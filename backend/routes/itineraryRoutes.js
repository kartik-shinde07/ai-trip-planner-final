const express = require("express");

const router = express.Router();

const {
  saveItinerary,
  getItineraries,
} = require("../controllers/itineraryController");

router.post("/save", saveItinerary);

router.get("/", getItineraries);

module.exports = router;
