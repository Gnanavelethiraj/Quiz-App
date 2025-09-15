const mongoose = require("mongoose");
const Question = require("./models/Question");

mongoose.connect("mongodb://127.0.0.1:27017/daakle")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

const seedQuestions = [
  {
    topic: "Numbers",
    questionText: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answerIndex: 2
  },
  {
    topic: "Numbers",
    questionText: "What is 15 × 3?",
    options: ["30", "35", "45", "50"],
    answerIndex: 2
  },
  {
    topic: "LCM",
    questionText: "The LCM of 6 and 8 is?",
    options: ["12", "24", "36", "48"],
    answerIndex: 1
  },
  {
    topic: "HCF",
    questionText: "The HCF of 18 and 24 is?",
    options: ["2", "6", "8", "12"],
    answerIndex: 1
  }
];

const seedDB = async () => {
  await Question.deleteMany({});
  await Question.insertMany(seedQuestions);
  console.log("✅ Questions Seeded");
  mongoose.connection.close();
};

seedDB();
