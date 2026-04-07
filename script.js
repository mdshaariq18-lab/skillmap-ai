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

let chart;

function analyze() {

  document.getElementById("loading").classList.remove("hidden");

  setTimeout(() => {

    document.getElementById("loading").classList.add("hidden");

    let role = document.getElementById("role").value;
    let userSkills = document.getElementById("skills").value.toLowerCase().split(",").map(s => s.trim());

    let roles = {
      "Data Scientist": ["python","sql","machine learning","statistics"],
      "Web Developer": ["html","css","javascript","react"]
    };

    let required = roles[role];

    let match = required.filter(skill => userSkills.includes(skill)).length;
    let missing = required.filter(skill => !userSkills.includes(skill));

    let score = (match / required.length) * 100;

    let suggestions = missing.map(skill => {
      let link = courses[skill] || "#";
      return `<a href="${link}" target="_blank">📘 Learn ${skill}</a>`;
    }).join("<br>");

    document.getElementById("result").innerHTML = `
      <h3>Match Score: ${score.toFixed(0)}%</h3>
      <p>Missing Skills: ${missing.join(", ")}</p>
      <p>${suggestions}</p>
    `;

    // 📊 Chart
    if (chart) chart.destroy();

    let ctx = document.getElementById("chart").getContext("2d");

    chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Matched", "Missing"],
        datasets: [{
          data: [match, missing.length]
        }]
      }
    });

  }, 1000);
}

// 📄 Download Report
function downloadReport() {
  let content = document.getElementById("result").innerText;

  let blob = new Blob([content], { type: "text/plain" });

  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "SkillMap_Report.txt";
  a.click();
}

// 🎯 Quiz
function startQuiz() {
  let answer = prompt("Which language is used for Data Science? (Python / HTML / CSS)");

  if (!answer) return;

  if (answer.toLowerCase() === "python") {
    alert("🎉 Correct!");
  } else {
    alert("❌ Try again!");
  }
}

// 🌌 Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 40 },
    size: { value: 3 },
    move: { speed: 1 }
  }
});
