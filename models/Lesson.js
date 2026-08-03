const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema(
  {
    topic: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    icon: { type: String, default: "fa-book" },
    summary: { type: String, default: "" },
    sections: [
      {
        heading: { type: String, required: true },
        content: { type: String, required: true }
      }
    ],
    examples: [
      {
        problem: { type: String, required: true },
        solution: { type: String, required: true }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lesson", LessonSchema);
