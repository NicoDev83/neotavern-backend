const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name: String,
  description: String,
  date: Date,
  hour: String,
  likes: { type: Number, default: 0 },
  categories: [String],
  photo: String,
  infosTags: {
    food: [String],
    drinks: [String],
    price: String,
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "places",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const Event = mongoose.model("events", eventSchema);

module.exports = Event;
