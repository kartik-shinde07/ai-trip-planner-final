const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema(
  {
    destination: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    travelers: {
      type: Number,
      required: true,
    },
    days: {
      type: Number,
      required: true,
    },
    itinerary: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Itinerary", itinerarySchema);
