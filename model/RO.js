const mongoose = require("mongoose");
const ROClient = new mongoose.Schema({
  service: {
    type: String,
    default: null,
  },
  username: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("RO", ROClient);
