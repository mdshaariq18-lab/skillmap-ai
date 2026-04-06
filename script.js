function analyze() {

  // Get user input
  let role = document.getElementById("role").value;
  let userSkills = document.getElementById("skills").value.toLowerCase().split(",");

  // Role-based skill database
  let roles = {
    "Data Scientist": ["python","sql","machine learning","statistics"],
    "Web Developer": ["html","css","javascript","react"]
  };

  let required = roles[role];

  let match = 0;
  let missing = [];

  // Compare skills
  required.forEach(skill => {
    if (userSkills.includes(skill.trim())) {
      match++;
    } else {
      missing.push(skill);
    }
  });

  // Calculate score
  let score = (match / required.length) * 100;

  // Display result
  document.getElementById("result").innerHTML =
    "Match Score: " + score.toFixed(0) + "%<br>" +
    "Missing Skills: " + missing.join(", ");
}