
const questions = [

    {
        question: "What is the full form of HTML?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "Hyper Transfer Markup Language", correct: false },
            { text: "HyperText Markdown Language", correct: false },
            { text: "Home Tool Markup Language", correct: false }
        ]
    },
    {
        question: "Which language is used for styling web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "JQuery", correct: false },
            { text: "CSS", correct: true },
            { text: "XML", correct: false }
        ]
    },
    {
        question: "Which is not a JavaScript framework?",
        answers: [
            { text: "Python Script", correct: true },
            { text: "JQuery", correct: false },
            { text: "React", correct: false },
            { text: "Angular", correct: false }
        ]
    },
    {
    question: "Which CSS property is used to change the text color of an element?",
    answers: [
        { text: "color", correct: true },
        { text: "font-color", correct: false },
        { text: "text-color", correct: false },
        { text: "foreground-color", correct: false }
    ]
},

    {
  "question": "Which tag is used to add the title and meta information of an HTML page?",
  "answers": [
    { "text": "head", "correct": true },
    { "text": "header", "correct": false },
    { "text": "body", "correct": false },
    { "text": "title", "correct": false }
  ]
},


    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Netscape", correct: true },
            { text: "Sun Microsystems", correct: false },
            { text: "Oracle", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
            { text: "Creative Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false }
        ]
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        answers: [
            { text: "class", correct: false },
            { text: "style", correct: true },
            { text: "font", correct: false },
            { text: "styles", correct: false }
        ]
    },
    {
        question: "Which property is used to change the background color in CSS?",
        answers: [
            { text: "color", correct: false },
            { text: "bgcolor", correct: false },
            { text: "background-color", correct: true },
            { text: "background", correct: false }
        ]
    },
    {
    question: "Which keyword is used to declare a constant in JavaScript?",
    answers: [
        { text: "const", correct: true },
        { text: "var", correct: false },
        { text: "let", correct: false },
        { text: "constant", correct: false }
    ]
}

];
function login() {
    const username = document.getElementById("username").value;
    if (username.trim() !== "") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("quiz-app").style.display = "block";
        startQuiz(); // Start the quiz after login
    } else {
        alert("Please enter your name to continue.");
    }
}

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score= 0;
 
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    

    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;

    }
    button.addEventListener("click", selectAnswer);
    
});  
}

 function resetState(){
 nextButton.style.display = "none";
 while(answerButtons.firstChild){
  answerButtons.removeChild(answerButtons.firstChild);
  }
  }

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    } );
    nextButton.style.display = "block";


}
function showScore() {
  resetState();

  const scorePercent = (score / questions.length) * 10;

  let compliment = "";
  if (scorePercent === 10) {
    compliment = "🎉 Excellent!";
  } else if (scorePercent >= 9.8) {
    compliment = "👏 Very Good!";
  } else if (scorePercent >= 5) {
    compliment = "👍 Good!";
  } else {
    compliment = "😢 Better luck next time!";
  }

  questionElement.innerHTML = `You scored ${score} out of ${questions.length}. ${compliment}`;
  nextButton.innerHTML = "🔁 Play Again";
  nextButton.style.display = "block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
       showQuestion(); 
    }else{
        showScore();
    }
}
 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
       handleNextButton(); 
    }else{
        startQuiz();
    }
 });  

    
  
startQuiz();  
