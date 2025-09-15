const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  topic: { type: String, required: true },
  score: { type: Number, required: true },
  total: { type: Number, required: true },
  badge: { type: String, default: null },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Result", ResultSchema);
