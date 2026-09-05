require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const User = require("./models/User");
const Question = require("./models/Question");
const Lesson = require("./models/Lesson");

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// MongoDB connection
// NOTE: standardized to the "daakle" database (server.js previously pointed at
// "quiz-app" while seedQuestions.js pointed at "daakle" - now consistent).
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ---------- Auth routes ----------

app.post("/api/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({
      message: "Login successful",
      token,
      username: user.username,
      userId: user._id
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------- Question routes ----------

// Get all questions, grouped by topic: { numbers: [...], algebra: [...], ... }
app.get("/api/questions", async (req, res) => {
  try {
    const all = await Question.find({});
    const grouped = {};
    all.forEach((doc) => {
      if (!grouped[doc.topic]) grouped[doc.topic] = [];
      grouped[doc.topic].push({
        _id: doc._id,
        q: doc.q,
        options: doc.options,
        correct: doc.correct,
        explanation: doc.explanation
      });
    });
    res.json(grouped);
  } catch (err) {
    console.error("Get questions error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get questions for a single topic
app.get("/api/questions/:topic", async (req, res) => {
  try {
    const questions = await Question.find({ topic: req.params.topic });
    res.json(
      questions.map((doc) => ({
        _id: doc._id,
        q: doc.q,
        options: doc.options,
        correct: doc.correct,
        explanation: doc.explanation
      }))
    );
  } catch (err) {
    console.error("Get topic questions error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Add a new question (used by the admin panel)
app.post("/api/questions", async (req, res) => {
  const { topic, q, options, correct, explanation } = req.body;

  if (!topic || !q || !Array.isArray(options) || options.length < 2 || typeof correct !== "number") {
    return res.status(400).json({ message: "Missing or invalid question fields" });
  }

  try {
    const question = new Question({ topic, q, options, correct, explanation: explanation || "" });
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    console.error("Add question error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a question by id (used by the admin panel)
app.delete("/api/questions/:id", async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: "Question deleted" });
  } catch (err) {
    console.error("Delete question error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------- Lesson routes ----------

app.get("/api/lessons", async (req, res) => {
  try {
    const lessons = await Lesson.find({});
    res.json(lessons);
  } catch (err) {
    console.error("Get lessons error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/lessons/:topic", async (req, res) => {
  try {
    const lesson = await Lesson.findOne({ topic: req.params.topic });
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });
    res.json(lesson);
  } catch (err) {
    console.error("Get lesson error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------- Default route ----------

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
