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

// 🚀 Main Function
function analyze() {
  let role = document.getElementById("role").value;
  let userSkills = document.getElementById("skills").value.toLowerCase().split(",");

  let roles = {
    "Data Scientist": ["python","sql","machine learning","statistics"],
    "Web Developer": ["html","css","javascript","react"]
  };

  let required = roles[role];
  let match = 0;
  let missing = [];
  let matchedSkills = [];

  required.forEach(skill => {
    if (userSkills.includes(skill.trim())) {
      match++;
      matchedSkills.push(skill);
    } else {
      missing.push(skill);
    }
  });

  let score = (match / required.length) * 100;
  let level = score < 40 ? "Beginner" : score < 75 ? "Intermediate" : "Advanced";
  let confidence = (score + Math.random()*10).toFixed(0);

  let suggestions = missing.map(skill => {
    let link = courses[skill] || "#";
    return `<a href="${link}" target="_blank">📘 Learn ${skill}</a>`;
  }).join("<br>");

  let roadmap = role === "Data Scientist" ? `
    Month 1-2: Python & Data Analysis<br>
    Month 3-4: Machine Learning<br>
    Month 5-6: Projects + Apply
  ` : `
    Month 1-2: HTML & CSS<br>
    Month 3-4: JavaScript & React<br>
    Month 5-6: Build Portfolio
  `;

  let insight = score < 40
    ? "Focus on fundamentals first."
    : score < 75
    ? "You're close! Improve missing skills."
    : "You're job-ready! Start applying.";

  let recommendation = score < 40
    ? "Start with beginner-level roles or internships."
    : score < 75
    ? "Apply for junior roles after improvement."
    : "Apply confidently for full-time roles.";

  let simulation = `
    If you complete the roadmap, you can become a ${role} in approximately 
    ${score < 40 ? "6-8 months" : score < 75 ? "3-6 months" : "1-2 months"}.
  `;

  document.getElementById("result").innerHTML = `
    <h3>Match Score: ${score.toFixed(0)}%</h3>
    <div class="progress-bar">
      <div class="progress" style="width:${score}%"></div>
    </div>
    <p><strong>Level:</strong> ${level}</p>
    <p><strong>Confidence:</strong> ${confidence}%</p>
    <p><strong>Matched Skills:</strong><br>${matchedSkills.join(", ")}</p>
    <p><strong>Missing Skills:</strong><br>${missing.join(", ")}</p>
    <p><strong>📚 Learn:</strong><br>${suggestions}</p>
    <p><strong>🧭 Roadmap:</strong><br>${roadmap}</p>
    <p><strong>💡 Insight:</strong><br>${insight}</p>
    <p><strong>🎯 Recommendation:</strong><br>${recommendation}</p>
    <p><strong>🚀 Career Simulation:</strong><br>${simulation}</p>
  `;

  renderChart(matchedSkills, missing);
}

// 🎯 Quiz FeatureHere’s the **full upgraded codebase** for your SkillMap AI project, file by file. You can copy each into its respective file in your project folder.

---

## 📂 Project Structure
