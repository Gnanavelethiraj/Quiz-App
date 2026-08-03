const mongoose = require("mongoose");
const Lesson = require("./models/Lesson");

mongoose
  .connect("mongodb://127.0.0.1:27017/daakle")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

const seedLessons = [
  {
    topic: "numbers",
    title: "Numbers",
    icon: "fa-calculator",
    summary: "Number systems, primes, divisibility rules, and factors — the foundation every other aptitude topic builds on.",
    sections: [
      {
        heading: "Types of numbers",
        content:
          "Natural numbers (1, 2, 3, ...) count things. Whole numbers add 0. Integers include negatives. Rational numbers can be written as a fraction p/q (q ≠ 0), like 0.75 = 3/4. Irrational numbers cannot, like √2 or π. Every rational and irrational number together makes up the real numbers."
      },
      {
        heading: "Prime and composite numbers",
        content:
          "A prime number has exactly two factors: 1 and itself (2, 3, 5, 7, 11, ...). 2 is the only even prime. A composite number has more than two factors (4, 6, 8, 9, ...). 1 is neither prime nor composite. To check if a number n is prime, test divisibility only up to √n."
      },
      {
        heading: "Divisibility rules",
        content:
          "By 2: last digit is even. By 3: digit sum divisible by 3. By 4: last two digits divisible by 4. By 5: ends in 0 or 5. By 6: divisible by both 2 and 3. By 9: digit sum divisible by 9. By 11: alternating digit sum (difference between sum of odd-position and even-position digits) is divisible by 11. These rules let you skip long division in exams."
      },
      {
        heading: "Factorials",
        content:
          "n! (n factorial) is the product of all positive integers up to n: n! = n × (n−1) × (n−2) × ... × 1. By definition, 0! = 1. Factorials grow extremely fast and show up in permutation/combination problems."
      }
    ],
    examples: [
      {
        problem: "Is 91 a prime number?",
        solution:
          "√91 ≈ 9.5, so check primes up to 9: 2, 3, 5, 7. 91 is odd (not div by 2), digit sum 10 (not div by 3), doesn't end in 0/5 (not div by 5). Check 7: 91 ÷ 7 = 13 exactly. So 91 = 7 × 13 — it is composite, not prime."
      },
      {
        problem: "Find the remainder when 47 is divided by 6.",
        solution: "47 = 6 × 7 + 5. Since 6×7 = 42 and 47 − 42 = 5, the remainder is 5."
      },
      {
        problem: "Check whether 4,928 is divisible by 11.",
        solution:
          "Digits from right: 8, 2, 9, 4. Sum of odd positions (1st, 3rd from right) = 8 + 9 = 17. Sum of even positions (2nd, 4th) = 2 + 4 = 6. Difference = 17 − 6 = 11, which is divisible by 11 — so 4,928 is divisible by 11."
      }
    ]
  },
  {
    topic: "lcmhcf",
    title: "LCM & HCF",
    icon: "fa-divide",
    summary: "Least Common Multiple and Highest Common Factor — how to compute them and use them in real-world timing and grouping problems.",
    sections: [
      {
        heading: "What HCF and LCM mean",
        content:
          "The HCF (Highest Common Factor, also called GCD) of two or more numbers is the largest number that divides all of them exactly. The LCM (Least Common Multiple) is the smallest number that all of them divide into exactly. HCF is always ≤ the smallest number; LCM is always ≥ the largest number."
      },
      {
        heading: "Prime factorization method",
        content:
          "Break each number into prime factors. HCF = product of the lowest power of each common prime factor. LCM = product of the highest power of every prime factor that appears in any number. Example: 12 = 2²×3, 18 = 2×3² → HCF = 2×3 = 6, LCM = 2²×3² = 36."
      },
      {
        heading: "The product shortcut",
        content:
          "For any two numbers a and b: HCF(a, b) × LCM(a, b) = a × b. This is extremely useful when you know three of the four values (a, b, HCF, LCM) and need the fourth — no factorization required."
      },
      {
        heading: "Real-world use: repeating events",
        content:
          "Whenever something happens 'every X units' and something else happens 'every Y units', and you're asked when they coincide again, the answer is LCM(X, Y). This applies to bells ringing, traffic lights syncing, or people lapping a track."
      }
    ],
    examples: [
      {
        problem: "Find the HCF and LCM of 24 and 36.",
        solution:
          "24 = 2³×3, 36 = 2²×3². HCF = 2²×3 = 12 (lowest powers). LCM = 2³×3² = 72 (highest powers). Check: HCF×LCM = 12×72 = 864 = 24×36 ✓."
      },
      {
        problem: "The HCF of two numbers is 6 and their LCM is 90. If one number is 18, find the other.",
        solution: "Product of numbers = HCF × LCM = 6 × 90 = 540. Other number = 540 ÷ 18 = 30."
      },
      {
        problem: "Three runners complete a lap in 8, 12, and 16 minutes. If they start together, after how many minutes will they meet again at the start?",
        solution:
          "They meet again after LCM(8, 12, 16) minutes. 8=2³, 12=2²×3, 16=2⁴. LCM = 2⁴×3 = 48. They'll meet again after 48 minutes."
      }
    ]
  },
  {
    topic: "algebra",
    title: "Algebra",
    icon: "fa-square-root-variable",
    summary: "Linear equations, quadratic factoring, and algebraic identities — the tools for solving for unknowns quickly.",
    sections: [
      {
        heading: "Solving linear equations",
        content:
          "Isolate the variable by doing the same operation to both sides. Move all variable terms to one side and constants to the other: e.g., 3x − 7 = 2x + 5 → 3x − 2x = 5 + 7 → x = 12. Always double-check by substituting back into the original equation."
      },
      {
        heading: "Key algebraic identities",
        content:
          "(a+b)² = a² + 2ab + b². (a−b)² = a² − 2ab + b². (a+b)(a−b) = a² − b² (difference of squares). (a+b)² − (a−b)² = 4ab. (a+b)² + (a−b)² = 2(a²+b²). Recognizing these instantly saves time versus expanding manually."
      },
      {
        heading: "Factoring quadratics",
        content:
          "For x² + bx + c = 0, find two numbers that multiply to c and add to b. Example: x² − 5x + 6 → need two numbers multiplying to 6, adding to −5: that's −2 and −3. So (x−2)(x−3) = 0, giving roots x = 2 and x = 3."
      },
      {
        heading: "Using a+b and ab together",
        content:
          "If you know a+b and ab, you can find a²+b² without knowing a and b individually: a² + b² = (a+b)² − 2ab. This trick appears constantly in aptitude tests."
      }
    ],
    examples: [
      {
        problem: "Solve for x: 5(x − 3) = 2x + 6",
        solution: "5x − 15 = 2x + 6 → 5x − 2x = 6 + 15 → 3x = 21 → x = 7."
      },
      {
        problem: "If a + b = 12 and ab = 32, find a² + b².",
        solution: "a² + b² = (a+b)² − 2ab = 144 − 64 = 80."
      },
      {
        problem: "Factor and solve: x² + x − 12 = 0",
        solution:
          "Need two numbers multiplying to −12, adding to 1: that's 4 and −3. So (x+4)(x−3) = 0, giving x = −4 or x = 3."
      }
    ]
  },
  {
    topic: "percentage",
    title: "Percentage",
    icon: "fa-percent",
    summary: "Converting between fractions and percentages, and handling increase/decrease and successive-change problems.",
    sections: [
      {
        heading: "The basic formula",
        content:
          "'X% of Y' means (X/100) × Y. To find what percentage A is of B, compute (A/B) × 100. To find the number when a percentage of it is known: if X% of N = A, then N = A ÷ (X/100)."
      },
      {
        heading: "Percentage increase and decrease",
        content:
          "% change = [(New value − Old value) / Old value] × 100. A positive result is an increase, a negative result is a decrease. To reverse a percentage change and get back to the original, the required percentage is NOT simply the same number — e.g., a 20% decrease needs a 25% increase to undo it, because the base changed."
      },
      {
        heading: "Successive percentage changes",
        content:
          "For two successive changes of x% and y% (with sign, e.g., −10% for a decrease), the net percentage change is: x + y + (xy/100). This single formula replaces having to compute two steps separately — e.g., +10% then −10% gives net = 10 − 10 + (10×−10)/100 = −1%."
      },
      {
        heading: "Profit/loss with markup and discount",
        content:
          "If cost price is marked up by m% and then discounted by d% on the marked price, the net effect on cost price follows the same successive-change formula: net % = m − d + (m×(−d))/100. A positive result means net profit; negative means net loss."
      }
    ],
    examples: [
      {
        problem: "A shirt originally costs ₹800. Its price is increased by 15%. What is the new price?",
        solution: "New price = 800 + 15% of 800 = 800 + 120 = ₹920."
      },
      {
        problem: "A number is increased by 20% and then decreased by 20%. What is the net percentage change?",
        solution:
          "Using net % = x + y + xy/100 with x=20, y=−20: net = 20 − 20 + (20×−20)/100 = 0 − 4 = −4%. So there is a net 4% decrease (not zero, because the base changed after the first step)."
      },
      {
        problem: "In a school, 30% of students play cricket and 20% play football, with no overlap. If 150 students play neither sport, and this represents the remaining 50%, how many students are there in total?",
        solution: "50% of total = 150 → total = 150 ÷ 0.50 = 300 students."
      }
    ]
  },
  {
    topic: "ratio",
    title: "Ratio & Proportion",
    icon: "fa-scale-balanced",
    summary: "Comparing quantities, combining ratios, and dividing amounts proportionally.",
    sections: [
      {
        heading: "What a ratio represents",
        content:
          "A ratio a:b compares two quantities of the same kind. It's really a fraction a/b, simplified to lowest terms. Ratios have no units — 4:6 simplifies to 2:3 just like the fraction 4/6 simplifies to 2/3."
      },
      {
        heading: "Combining two ratios",
        content:
          "To combine a:b and b:c into a single a:b:c, make the 'b' value match in both by scaling. Example: a:b = 2:3 and b:c = 4:5. Scale a:b by 4 → 8:12, scale b:c by 3 → 12:15. Now b matches (12), so a:b:c = 8:12:15."
      },
      {
        heading: "Dividing a quantity in a given ratio",
        content:
          "To split a total T in ratio m:n, add the parts (m+n) to find the value of one part: T/(m+n). Then each share is that many parts times the 'per part' value. Example: split ₹500 in ratio 2:3 → 5 parts total, 1 part = ₹100, so shares are ₹200 and ₹300."
      },
      {
        heading: "Proportion",
        content:
          "A proportion states that two ratios are equal: a:b = c:d, also written a/b = c/d. Cross-multiplying gives a×d = b×c — this is the key tool for solving for an unknown term in a proportion."
      }
    ],
    examples: [
      {
        problem: "If a:b = 4:5 and b:c = 3:7, find a:b:c.",
        solution:
          "Scale a:b by 3 → 12:15. Scale b:c by 5 → 15:35. Now b matches at 15, so a:b:c = 12:15:35."
      },
      {
        problem: "Divide ₹910 among A, B, and C in the ratio 3:4:6.",
        solution:
          "Total parts = 3+4+6 = 13. One part = 910/13 = ₹70. A = 3×70 = ₹210, B = 4×70 = ₹280, C = 6×70 = ₹420."
      },
      {
        problem: "If 3:x = 12:20, find x.",
        solution: "Cross-multiply: 3 × 20 = 12 × x → 60 = 12x → x = 5."
      }
    ]
  },
  {
    topic: "timework",
    title: "Time & Work",
    icon: "fa-clock",
    summary: "Work-rate reasoning for people, machines, and pipes working alone, together, or against each other.",
    sections: [
      {
        heading: "The core idea: work as a rate",
        content:
          "If a person can complete a job in n days, their work rate is 1/n of the job per day. This is the single idea behind every time-and-work problem: convert 'time to finish' into 'fraction of work per unit time', then add or subtract rates as needed."
      },
      {
        heading: "Working together",
        content:
          "If A takes a days and B takes b days alone, their combined rate is 1/a + 1/b per day. The time taken together is the reciprocal of that combined rate. This generalizes to any number of workers — just add all their individual rates."
      },
      {
        heading: "Using man-days",
        content:
          "Total work can be measured in 'man-days' (or worker-days): if m workers take d days, total work = m×d man-days. This stays constant for a fixed job, so if the number of workers changes partway through, you can track work done vs. work remaining in man-days."
      },
      {
        heading: "Pipes and leaks (negative rates)",
        content:
          "A pipe filling a tank has a positive rate (+1/n per hour). A leak or outlet draining it has a negative rate (−1/n per hour). When both act together, add the rates algebraically — a leak effectively slows down filling, and the net rate can even become negative (tank never fills)."
      }
    ],
    examples: [
      {
        problem: "A can finish a job in 15 days and B in 10 days. How long will they take working together?",
        solution:
          "Combined rate = 1/15 + 1/10 = 2/30 + 3/30 = 5/30 = 1/6 per day. Time together = 1 ÷ (1/6) = 6 days."
      },
      {
        problem: "12 workers can complete a wall in 18 days. After 6 days, 4 workers leave. How many total days will the wall take?",
        solution:
          "Total work = 12×18 = 216 worker-days. In 6 days, 12 workers do 72 worker-days, leaving 144. With 8 workers remaining: 144/8 = 18 more days. Total = 6 + 18 = 24 days."
      },
      {
        problem: "A tank is filled by pipe A in 5 hours. A leak can empty the full tank in 20 hours. If both are open together, how long will it take to fill the tank?",
        solution:
          "Net rate = 1/5 − 1/20 = 4/20 − 1/20 = 3/20 per hour. Time to fill = 1 ÷ (3/20) = 20/3 ≈ 6.67 hours."
      }
    ]
  }
];

const seedDB = async () => {
  await Lesson.deleteMany({});
  await Lesson.insertMany(seedLessons);
  console.log(`✅ ${seedLessons.length} lessons seeded`);
  mongoose.connection.close();
};

seedDB();
