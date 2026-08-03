const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    topic: { type: String, required: true, index: true },
    q: { type: String, required: true },
    options: { type: [String], required: true },
    correct: { type: Number, required: true }, // index into options[]
    explanation: { type: String, default: "" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", QuestionSchema);
