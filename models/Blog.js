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
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
