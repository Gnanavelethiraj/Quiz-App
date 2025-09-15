const mongoose = require("mongoose");
const Question = require("./models/Question");

mongoose.connect("mongodb://127.0.0.1:27017/daakle", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const questions = [
  {
    topic: "Numbers",
    question: "What is the LCM of 12 and 18?",
    options: ["24", "36", "48", "60"],
    answer: "36"
  },
  {
    topic: "Algebra",
    question: "Solve: 2x + 3 = 7",
    options: ["x=1", "x=2", "x=3", "x=4"],
    answer: "x=2"
  }
];

async function seed() {
  await Question.deleteMany({});
  await Question.insertMany(questions);
  console.log("✅ Questions seeded");
  mongoose.disconnect();
}

seed();
