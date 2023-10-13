const mongoose = require("mongoose");

const Event = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter event name "],
    },
    description: {
      type: String,
      required: [true, "Plese enter event description"],
    },
    type: {
      type: String,
      required: [true, "Please enter event type"],
      enum: ["crosspromo", "liveops", "app", "ads"],
    },
    priority: {
      type: Number,
      required: [true, "Please enter event priority"],
      min: 0,
      max: 10,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Events", Event);
