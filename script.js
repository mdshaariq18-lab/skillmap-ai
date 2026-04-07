let chart;

function analyze() {

  document.getElementById("loading").classList.remove("hidden");

  setTimeout(() => {

    document.getElementById("loading").classList.add("hidden");

    let role = document.getElementById("role").value;
    let skills = document.getElementById("skills").value.toLowerCase().split(",").map(s => s.trim());
    let exp = parseInt(document.getElementById("experience").value) || 0;
    let resumeLine = document.getElementById("resumeLine").value;

    let roles = {
      "Data Scientist": ["python","sql","machine learning","statistics"],
      "Web Developer": ["html","css","javascript","react"]
    };

    let required = roles[role];

    let matched = required.filter(s => skills.includes(s));
    let missing = required.filter(s => !skills.includes(s));

    let score = (matched.length / required.length) * 100;

    let ats = Math.min(100, score + exp*5);

    let expLevel = exp < 1 ? "Fresher" : exp < 3 ? "Junior" : "Experienced";

    let improved = resumeLine ? resumeLine.replace("worked", "achieved measurable results in") : "Add a resume line";

    let questions = role === "Data Scientist"
      ? ["What is overfitting?", "Explain regression"]
      : ["What is DOM?", "Explain closures"];

    let salary = role === "Data Scientist" ? "₹6–15 LPA" : "₹4–12 LPA";

    document.getElementById("result").innerHTML = `
      <h3>Match Score: ${score.toFixed(0)}%</h3>
      <p><b>ATS Score:</b> ${ats}%</p>
      <p><b>Experience:</b> ${expLevel}</p>

      <p><b>Matched Skills:</b> ${matched.join(", ")}</p>
      <p><b>Missing Skills:</b> ${missing.join(", ")}</p>

      <p><b>Improved Resume:</b><br>${improved}</p>

      <p><b>Interview Questions:</b><br>${questions.join("<br>")}</p>

      <p><b>Estimated Salary:</b> ${salary}</p>
    `;

    // Chart
    if(chart) chart.destroy();

    let ctx = document.getElementById("chart").getContext("2d");

    chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Matched", "Missing"],
        datasets: [{
          data: [matched.length, missing.length]
        }]
      }
    });

  }, 1000);
}

function startQuiz() {
  let ans = prompt("Language for Data Science?");
  if(ans && ans.toLowerCase()=="python") alert("Correct!");
  else alert("Try again!");
}

function downloadReport() {
  let text = document.getElementById("result").innerText;
  let blob = new Blob([text], {type:"text/plain"});
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "report.txt";
  a.click();
}

// particles
particlesJS("particles-js", {
  particles: { number:{value:40}, size:{value:3} }
});
