const mongoose = require("mongoose");
const count = new mongoose.Schema({
  name: {
    type: String,
    default: "abhi170",
  },
  count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Count", count);
