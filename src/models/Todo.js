const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  descr: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
