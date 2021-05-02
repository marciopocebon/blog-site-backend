const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },
  story: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
  },
  name: {
    type: "string",
  },
  userImage: {
    type: "string",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
