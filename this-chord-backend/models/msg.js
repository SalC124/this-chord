// require dotenv
require("dotenv").config();
// require mongoose
const mongoose = require("mongoose");
// require config
const config = require("../utils/config");

// create msg schema
const msgSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  time: { type: Number, required: true },
});

// configure toJSON method
msgSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

// create mongoose model
const Msg = mongoose.model("Msg", msgSchema);

module.exports = Msg;
