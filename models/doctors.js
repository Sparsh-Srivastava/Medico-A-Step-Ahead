const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  contact: {
    type: String,
    required: true,
  },
  availableTiming: {
    type: String,
    required: true,
  },
  chatOption: {
    type: Boolean,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("doctor", doctorSchema);
