
const express = require("express");
const app = express();
app.use(express.json());

let scores = [];

// Send questions
app.get("/questions", (req, res) => {
  res.json([
    {
      question: "2 + 2 = ?",
      answers: ["2", "3", "4", "5"],
      correct: 2
    }
  ]);
});

// Save score
app.post("/save-score", (req, res) => {
  scores.push(req.body);
  res.send("Score Saved");
});

app.listen(3000, () => {
  console.log("Backend running at http://localhost:3000");
});
fetch("http://localhost:3000/questions")
.then(res => res.json())
.then(data => {
   console.log(data); // questions from backend
});
fetch("http://localhost:3000/save-score", {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({
    name: username,
    score: score
  })
});
