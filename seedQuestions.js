const mongoose = require("mongoose");
const Question = require("./models/Question");

mongoose
  .connect("mongodb://127.0.0.1:27017/daakle")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

const seedQuestions = [
  // ---------------- Numbers ----------------
  {
    topic: "numbers",
    q: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correct: 2,
    explanation: "1 is not prime (it has only one factor). 2 is the smallest prime and the only even prime."
  },
  {
    topic: "numbers",
    q: "What is 15 × 3?",
    options: ["30", "35", "45", "50"],
    correct: 2,
    explanation: "15 × 3 = 45."
  },
  {
    topic: "numbers",
    q: "How many prime numbers are there between 1 and 20?",
    options: ["6", "7", "8", "9"],
    correct: 2,
    explanation: "Primes between 1 and 20: 2, 3, 5, 7, 11, 13, 17, 19 — that's 8 numbers."
  },
  {
    topic: "numbers",
    q: "Which of the following is a rational number?",
    options: ["√2", "π", "0.75", "√3"],
    correct: 2,
    explanation: "0.75 = 3/4, which can be written as a fraction of two integers, so it is rational. √2, π, and √3 are irrational."
  },
  {
    topic: "numbers",
    q: "What is the sum of the first 10 prime numbers?",
    options: ["101", "129", "139", "149"],
    correct: 1,
    explanation: "The first 10 primes are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29. Their sum is 129."
  },
  {
    topic: "numbers",
    q: "A number is divisible by 3 if:",
    options: [
      "Its last digit is divisible by 3",
      "The sum of its digits is divisible by 3",
      "It is an even number",
      "It ends in 0 or 5"
    ],
    correct: 1,
    explanation: "Divisibility rule for 3: add up all the digits — if that sum is divisible by 3, so is the original number."
  },
  {
    topic: "numbers",
    q: "What is the value of 7! (7 factorial)?",
    options: ["720", "5040", "40320", "3628800"],
    correct: 1,
    explanation: "7! = 7×6×5×4×3×2×1 = 5040."
  },
  {
    topic: "numbers",
    q: "Which of these numbers is a perfect square?",
    options: ["48", "64", "80", "96"],
    correct: 1,
    explanation: "64 = 8², making it a perfect square. None of the others have an integer square root."
  },
  {
    topic: "numbers",
    q: "What is the remainder when 29 is divided by 6?",
    options: ["1", "2", "3", "5"],
    correct: 3,
    explanation: "29 = 6×4 + 5, so the remainder is 5."
  },
  {
    topic: "numbers",
    q: "How many two-digit numbers are divisible by 7?",
    options: ["12", "13", "14", "15"],
    correct: 1,
    explanation: "Two-digit multiples of 7 run from 14 (7×2) to 98 (7×14), giving 14 − 2 + 1 = 13 numbers."
  },

  // ---------------- LCM & HCF ----------------
  {
    topic: "lcmhcf",
    q: "The LCM of 6 and 8 is?",
    options: ["12", "24", "36", "48"],
    correct: 1,
    explanation: "6 = 2×3, 8 = 2³. LCM takes the highest powers: 2³×3 = 24."
  },
  {
    topic: "lcmhcf",
    q: "The HCF of 18 and 24 is?",
    options: ["2", "6", "8", "12"],
    correct: 1,
    explanation: "18 = 2×3², 24 = 2³×3. HCF takes the lowest powers of common factors: 2×3 = 6."
  },
  {
    topic: "lcmhcf",
    q: "What is the LCM of 12 and 18?",
    options: ["24", "36", "48", "72"],
    correct: 1,
    explanation: "12 = 2²×3, 18 = 2×3². LCM = 2²×3² = 4×9 = 36."
  },
  {
    topic: "lcmhcf",
    q: "If the HCF of two numbers is 4 and their LCM is 48, and one number is 16, what is the other?",
    options: ["8", "12", "16", "24"],
    correct: 1,
    explanation: "Product of two numbers = HCF × LCM = 4×48 = 192. Other number = 192 / 16 = 12."
  },
  {
    topic: "lcmhcf",
    q: "The HCF of two co-prime numbers is always:",
    options: ["0", "1", "Their product", "Their LCM"],
    correct: 1,
    explanation: "Co-prime numbers share no common factors other than 1, so their HCF is always 1."
  },
  {
    topic: "lcmhcf",
    q: "What is the LCM of 5, 10, and 15?",
    options: ["15", "20", "30", "45"],
    correct: 2,
    explanation: "5 = 5, 10 = 2×5, 15 = 3×5. LCM = 2×3×5 = 30."
  },
  {
    topic: "lcmhcf",
    q: "The HCF of 45 and 60 is?",
    options: ["5", "10", "15", "20"],
    correct: 2,
    explanation: "45 = 3²×5, 60 = 2²×3×5. Common lowest powers: 3×5 = 15."
  },
  {
    topic: "lcmhcf",
    q: "Two bells ring at intervals of 20 and 30 minutes. If they ring together at 9:00 AM, when will they next ring together?",
    options: ["9:40 AM", "9:50 AM", "10:00 AM", "10:20 AM"],
    correct: 2,
    explanation: "They ring together every LCM(20, 30) = 60 minutes, so next together at 10:00 AM."
  },
  {
    topic: "lcmhcf",
    q: "The product of two numbers is 900 and their HCF is 5. What is their LCM?",
    options: ["90", "150", "180", "200"],
    correct: 2,
    explanation: "LCM = Product / HCF = 900 / 5 = 180."
  },
  {
    topic: "lcmhcf",
    q: "What is the HCF of 8, 12, and 20?",
    options: ["2", "4", "6", "8"],
    correct: 1,
    explanation: "8 = 2³, 12 = 2²×3, 20 = 2²×5. Lowest common power of 2 is 2² = 4, so HCF = 4."
  },

  // ---------------- Algebra ----------------
  {
    topic: "algebra",
    q: "If 2x + 5 = 15, what is the value of x?",
    options: ["3", "5", "7", "10"],
    correct: 1,
    explanation: "2x + 5 = 15 → 2x = 10 → x = 5."
  },
  {
    topic: "algebra",
    q: "Simplify: (a + b)² − (a − b)²",
    options: ["2ab", "4ab", "2a² + 2b²", "a² + b²"],
    correct: 1,
    explanation: "(a+b)² − (a−b)² = [a²+2ab+b²] − [a²−2ab+b²] = 4ab."
  },
  {
    topic: "algebra",
    q: "If x² − 5x + 6 = 0, what are the roots?",
    options: ["2 and 3", "1 and 6", "-2 and -3", "2 and -3"],
    correct: 0,
    explanation: "Factor: x² − 5x + 6 = (x−2)(x−3) = 0, so x = 2 or x = 3."
  },
  {
    topic: "algebra",
    q: "What is the value of 3(x − 2) when x = 7?",
    options: ["9", "13", "15", "21"],
    correct: 2,
    explanation: "3(7 − 2) = 3 × 5 = 15."
  },
  {
    topic: "algebra",
    q: "If a + b = 10 and ab = 21, what is a² + b²?",
    options: ["58", "79", "100", "121"],
    correct: 0,
    explanation: "a² + b² = (a+b)² − 2ab = 100 − 42 = 58."
  },
  {
    topic: "algebra",
    q: "Solve for y: 3y − 7 = 2y + 5",
    options: ["8", "10", "12", "14"],
    correct: 2,
    explanation: "3y − 7 = 2y + 5 → 3y − 2y = 5 + 7 → y = 12."
  },
  {
    topic: "algebra",
    q: "Expand: (x + 3)(x − 3)",
    options: ["x² − 9", "x² + 9", "x² − 6x + 9", "x² + 6x − 9"],
    correct: 0,
    explanation: "This is a difference-of-squares form: (x+3)(x−3) = x² − 3² = x² − 9."
  },
  {
    topic: "algebra",
    q: "If 5x − 3 = 2x + 12, find x.",
    options: ["3", "4", "5", "6"],
    correct: 2,
    explanation: "5x − 3 = 2x + 12 → 3x = 15 → x = 5."
  },
  {
    topic: "algebra",
    q: "What is the value of x² if x = −4?",
    options: ["-16", "-8", "8", "16"],
    correct: 3,
    explanation: "(−4)² = (−4)×(−4) = 16. A negative number squared is always positive."
  },
  {
    topic: "algebra",
    q: "If 2(x + 3) = 3(x − 1), what is x?",
    options: ["7", "9", "11", "13"],
    correct: 1,
    explanation: "2x + 6 = 3x − 3 → 6 + 3 = 3x − 2x → x = 9."
  },

  // ---------------- Percentage ----------------
  {
    topic: "percentage",
    q: "What is 25% of 200?",
    options: ["25", "50", "75", "100"],
    correct: 1,
    explanation: "25% of 200 = (25/100) × 200 = 50."
  },
  {
    topic: "percentage",
    q: "If 40% of a number is 80, what is the number?",
    options: ["160", "180", "200", "220"],
    correct: 2,
    explanation: "Let the number be N. 0.40 × N = 80 → N = 80 / 0.40 = 200."
  },
  {
    topic: "percentage",
    q: "A price increases from ₹200 to ₹250. What is the percentage increase?",
    options: ["20%", "25%", "30%", "50%"],
    correct: 1,
    explanation: "Increase = 250 − 200 = 50. Percentage increase = (50/200) × 100 = 25%."
  },
  {
    topic: "percentage",
    q: "A student scored 45 out of 60 in a test. What is the percentage score?",
    options: ["65%", "70%", "75%", "80%"],
    correct: 2,
    explanation: "(45/60) × 100 = 75%."
  },
  {
    topic: "percentage",
    q: "If the price of an item is reduced by 20%, by what percentage must the new price be increased to restore the original price?",
    options: ["20%", "22.5%", "25%", "30%"],
    correct: 2,
    explanation: "If original = 100, reduced price = 80. To go from 80 back to 100: (20/80) × 100 = 25%."
  },
  {
    topic: "percentage",
    q: "60% of what number is 90?",
    options: ["120", "135", "150", "180"],
    correct: 2,
    explanation: "0.60 × N = 90 → N = 90 / 0.60 = 150."
  },
  {
    topic: "percentage",
    q: "In an election, a candidate got 65% of votes and won by 6000 votes. What was the total number of votes?",
    options: ["18000", "20000", "22000", "24000"],
    correct: 1,
    explanation: "Winning margin = (65% − 35%) = 30% of total = 6000. Total = 6000 / 0.30 = 20000."
  },
  {
    topic: "percentage",
    q: "A number is first increased by 10% and then decreased by 10%. The net change is:",
    options: ["No change", "1% decrease", "1% increase", "10% decrease"],
    correct: 1,
    explanation: "Net % change for successive changes of +x% and −x% = −(x²)/100 = −1%, i.e. a 1% decrease overall."
  },
  {
    topic: "percentage",
    q: "What percentage of 80 is 20?",
    options: ["20%", "25%", "30%", "40%"],
    correct: 1,
    explanation: "(20/80) × 100 = 25%."
  },
  {
    topic: "percentage",
    q: "A shopkeeper marks up an item by 30% and then gives a 10% discount on the marked price. What is the overall percentage profit?",
    options: ["15%", "17%", "18%", "20%"],
    correct: 1,
    explanation: "Let cost = 100. Marked price = 130. After a 10% discount: 130 × 0.90 = 117. Profit = 117 − 100 = 17."
  },

  // ---------------- Ratio & Proportion ----------------
  {
    topic: "ratio",
    q: "If a:b = 2:3 and b:c = 4:5, what is a:b:c?",
    options: ["8:12:15", "2:3:5", "4:6:5", "6:4:5"],
    correct: 0,
    explanation: "a:b = 2:3 = 8:12 (scaled by 4), b:c = 4:5 = 12:15 (scaled by 3), so a:b:c = 8:12:15."
  },
  {
    topic: "ratio",
    q: "Divide ₹600 between A and B in the ratio 2:3. How much does B get?",
    options: ["₹200", "₹240", "₹300", "₹360"],
    correct: 3,
    explanation: "Total parts = 2+3 = 5. B's share = (3/5) × 600 = ₹360."
  },
  {
    topic: "ratio",
    q: "If x:y = 3:4, what is (2x + y):(x + 2y)?",
    options: ["9:11", "10:11", "10:13", "9:14"],
    correct: 1,
    explanation: "Let x=3, y=4. 2x+y = 6+4 = 10, x+2y = 3+8 = 11. Ratio = 10:11."
  },
  {
    topic: "ratio",
    q: "The ratio of ages of A and B is 3:4. If A is 15 years old, how old is B?",
    options: ["16", "18", "20", "24"],
    correct: 2,
    explanation: "3 parts = 15 → 1 part = 5. B = 4 parts = 4×5 = 20 years."
  },
  {
    topic: "ratio",
    q: "Two numbers are in the ratio 5:7. If their sum is 144, find the larger number.",
    options: ["60", "72", "84", "90"],
    correct: 2,
    explanation: "Total parts = 5+7 = 12. Each part = 144/12 = 12. Larger number = 7×12 = 84."
  },
  {
    topic: "ratio",
    q: "If a:b = 5:6 and b:c = 3:4, what is a:c in its simplest form?",
    options: ["5:8", "15:24", "5:24", "3:8"],
    correct: 0,
    explanation: "Scale so b matches: a:b = 15:18, b:c = 18:24. So a:c = 15:24, which simplifies to 5:8."
  },
  {
    topic: "ratio",
    q: "If 4 men can do a piece of work in the same time as 6 women, what is the ratio of work efficiency of a man to a woman?",
    options: ["2:3", "3:2", "1:2", "2:1"],
    correct: 1,
    explanation: "4 men = 6 women in output, so 1 man does the work of 1.5 women → man:woman efficiency = 3:2."
  },
  {
    topic: "ratio",
    q: "A sum of money is divided among A, B, and C in the ratio 2:3:5. If C gets ₹500 more than A, what is the total sum (to 2 d.p.)?",
    options: ["₹1500.00", "₹1666.67", "₹1800.00", "₹2000.00"],
    correct: 1,
    explanation: "C − A = 5 parts − 2 parts = 3 parts = ₹500, so 1 part = ₹166.67. Total = 10 parts ≈ ₹1666.67."
  },
  {
    topic: "ratio",
    q: "The ratio 0.75 : 1.25 in its simplest whole-number form is:",
    options: ["3:5", "5:3", "3:4", "4:5"],
    correct: 0,
    explanation: "0.75:1.25 = 75:125 = 3:5 after dividing both terms by 25."
  },
  {
    topic: "ratio",
    q: "If the ratio of boys to girls in a class is 4:5 and there are 20 boys, how many girls are there?",
    options: ["16", "20", "25", "30"],
    correct: 2,
    explanation: "4 parts = 20 boys → 1 part = 5. Girls = 5 parts = 5×5 = 25."
  },

  // ---------------- Time & Work ----------------
  {
    topic: "timework",
    q: "A can complete a work in 10 days, B in 15 days. In how many days will they complete it together?",
    options: ["5 days", "6 days", "8 days", "12 days"],
    correct: 1,
    explanation: "A's 1-day work = 1/10, B's 1-day work = 1/15. Together = 1/10 + 1/15 = 1/6, so 6 days."
  },
  {
    topic: "timework",
    q: "A can do a job in 12 days and B can do it in 18 days. If they work together for 4 days, what fraction of the work is completed?",
    options: ["4/9", "5/9", "1/2", "7/9"],
    correct: 1,
    explanation: "Combined rate = 1/12 + 1/18 = 5/36 per day. In 4 days: 4 × 5/36 = 20/36 = 5/9."
  },
  {
    topic: "timework",
    q: "If 6 men can finish a work in 12 days, how many days will 8 men take to finish the same work?",
    options: ["8 days", "9 days", "10 days", "12 days"],
    correct: 1,
    explanation: "Total work = 6×12 = 72 man-days. Time for 8 men = 72/8 = 9 days."
  },
  {
    topic: "timework",
    q: "A and B together can finish a work in 8 days. A alone can finish it in 12 days. In how many days can B alone finish it?",
    options: ["16 days", "20 days", "24 days", "28 days"],
    correct: 2,
    explanation: "B's rate = 1/8 − 1/12 = (3−2)/24 = 1/24, so B alone takes 24 days."
  },
  {
    topic: "timework",
    q: "A pipe can fill a tank in 6 hours. Due to a leak, it takes 8 hours to fill. How long would the leak alone take to empty the full tank?",
    options: ["16 hours", "20 hours", "24 hours", "28 hours"],
    correct: 2,
    explanation: "Fill rate = 1/6, combined (fill+leak) rate = 1/8. Leak rate = 1/6 − 1/8 = 1/24, so the leak alone empties it in 24 hours."
  },
  {
    topic: "timework",
    q: "20 workers can complete a task in 15 days. After 5 days, 5 more workers join. How many total days does it take to finish?",
    options: ["11.5 days", "12.5 days", "13 days", "14 days"],
    correct: 2,
    explanation: "Total work = 20×15 = 300 worker-days. After 5 days, 20 workers complete 100 worker-days, leaving 200. With 25 workers: 200/25 = 8 more days. Total = 5+8 = 13 days."
  },
  {
    topic: "timework",
    q: "A can do a piece of work in 20 days and B in 25 days. They work together but A leaves 5 days before completion. How many total days did the work take?",
    options: ["12 days", "13 days", "14 days", "15 days"],
    correct: 2,
    explanation: "Let total days = d. A works (d−5) days, B works d days: (d−5)/20 + d/25 = 1. Solving gives d = 14 days."
  },
  {
    topic: "timework",
    q: "Three workers A, B, and C can complete a task in 10, 15, and 30 days respectively. How many days will they take together?",
    options: ["4 days", "5 days", "6 days", "8 days"],
    correct: 1,
    explanation: "Combined rate = 1/10 + 1/15 + 1/30 = 3/30 + 2/30 + 1/30 = 6/30 = 1/5, so 5 days."
  },
  {
    topic: "timework",
    q: "A is twice as efficient as B. If B can complete a work in 24 days, how many days will A take?",
    options: ["8 days", "10 days", "12 days", "16 days"],
    correct: 2,
    explanation: "Since A is twice as efficient, A takes half the time: 24/2 = 12 days."
  },
  {
    topic: "timework",
    q: "A tap fills a tank in 4 hours and another empties it in 6 hours. If both taps are opened together, how long will it take to fill the tank?",
    options: ["10 hours", "12 hours", "14 hours", "16 hours"],
    correct: 1,
    explanation: "Net rate = 1/4 − 1/6 = 1/12 per hour, so the tank fills in 12 hours."
  }
];

const seedDB = async () => {
  await Question.deleteMany({});
  await Question.insertMany(seedQuestions);
  const topics = new Set(seedQuestions.map((q) => q.topic));
  console.log(`✅ ${seedQuestions.length} questions seeded across ${topics.size} topics`);
  mongoose.connection.close();
};

seedDB();
