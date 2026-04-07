// 📚 Course Links
const courses = {
  "python": "https://www.coursera.org/learn/python",
  "sql": "https://www.w3schools.com/sql/",
  "machine learning": "https://www.coursera.org/learn/machine-learning",
  "statistics": "https://www.khanacademy.org/math/statistics-probability",
  "html": "https://www.w3schools.com/html/",
  "css": "https://www.w3schools.com/css/",
  "javascript": "https://www.javascript.info/",
  "react": "https://react.dev/learn"
};

// 🚀 MAIN FUNCTION
function analyze() {

  let role = document.getElementById("role").value;
  let userSkills = document.getElementById("skills").value
                      .toLowerCase()
                      .split(",")
                      .map(skill => skill.trim());

  let roles = {
    "Data Scientist": ["python","sql","machine learning","statistics"],
    "Web Developer": ["html","css","javascript","react"]
  };

  let required = roles[role];

  let match = 0;
  let missing = [];
  let matchedSkills = [];

  required.forEach(skill => {
    if (userSkills.includes(skill)) {
      match++;
      matchedSkills.push(skill);
    } else {
      missing.push(skill);
    }
  });

  let score = (match / required.length) * 100;

  // 🎯 LEVEL
  let level = score < 40 ? "Beginner" :
              score < 75 ? "Intermediate" :
              "Advanced";

  // 🤖 CONFIDENCE SCORE
  let confidence = Math.min(100, (score + Math.random() * 10)).toFixed(0);

  // 📚 COURSE LINKS
  let suggestions = missing.length
    ? missing.map(skill => {
        let link = courses[skill] || "#";
        return `<a href="${link}" target="_blank">📘 Learn ${skill}</a>`;
      }).join("<br>")
    : "🎉 No missing skills! Great job!";

  // 🧭 ROADMAP
  let roadmap = role === "Data Scientist" ? `
    Month 1-2: Python & Data Analysis<br>
    Month 3-4: Machine Learning<br>
    Month 5-6: Projects + Apply
  ` : `
    Month 1-2: HTML & CSS<br>
    Month 3-4: JavaScript & React<br>
    Month 5-6: Build Portfolio
  `;

  // 💡 AI INSIGHT
  let insight = score < 40
    ? "You are at an early stage. Focus on strong fundamentals."
    : score < 75
    ? "You are close to job-ready. Improve missing skills."
    : "You are job-ready! Start applying confidently.";

  // 🎯 ROLE RECOMMENDATION
  let recommendation = score < 40
    ? "Start with internships or beginner roles."
    : score < 75
    ? "Apply for junior roles after improving skills."
    : "Apply for full-time roles confidently.";

  // 🚀 CAREER SIMULATION (UNIQUE FEATURE)
  let simulation = `
    Based on your current progress, you can become a <strong>${role}</strong> in 
    <strong>${
      score < 40 ? "6–8 months" :
      score < 75 ? "3–6 months" :
      "1–2 months"
    }</strong> with consistent effort.
  `;

  // 🧾 OUTPUT
  let resultBox = document.getElementById("result");

  resultBox.innerHTML = `
    <h3>Match Score: ${score.toFixed(0)}%</h3>

    <div class="progress-bar">
      <div class="progress" style="width:${score}%"></div>
    </div>

    <p><strong>Level:</strong> ${level}</p>
    <p><strong>Confidence Score:</strong> ${confidence}%</p>

    <p><strong>Matched Skills:</strong><br>${matchedSkills.join(", ") || "None"}</p>

    <p><strong>Missing Skills:</strong><br>${missing.join(", ") || "None"}</p>

    <p><strong>📚 Learn These Skills:</strong><br>${suggestions}</p>

    <p><strong>🧭 Career Roadmap:</strong><br>${roadmap}</p>

    <p><strong>💡 AI Insight:</strong><br>${insight}</p>

    <p><strong>🎯 Recommendation:</strong><br>${recommendation}</p>

    <p><strong>🚀 Career Simulation:</strong><br>${simulation}</p>
  `;

  // 🎨 ANIMATION TRIGGER
  resultBox.classList.remove("slide-up");
  void resultBox.offsetWidth; // reset animation
  resultBox.classList.add("slide-up");
}

// 🎯 QUIZ FUNCTION (UPGRADED)
function startQuiz() {

  let questions = [
    {
      q: "Which language is mainly used for Data Science?",
      options: ["HTML", "Python", "CSS"],
      answer: "python"
    },
    {
      q: "Which is used for styling web pages?",
      options: ["CSS", "Python", "SQL"],
      answer: "css"
    }
  ];

  let randomQ = questions[Math.floor(Math.random() * questions.length)];

  let userAnswer = prompt(
    randomQ.q + "\nOptions: " + randomQ.options.join(", ")
  );

  if (!userAnswer) return;

  if (userAnswer.toLowerCase() === randomQ.answer) {
    alert("🎉 Correct! You're on the right track!");
  } else {
    alert("❌ Not quite. Keep learning—you’ll get there!");
  }
}
