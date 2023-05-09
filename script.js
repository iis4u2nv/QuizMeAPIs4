// variables to refeence DOM elements
// Selectors
var questionsEL = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initalsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var startScreenEl = document.querySelector(".start-container");
var quizScreenEl = document.querySelector(".quiz-container");
var timeEl = document.getElementById("timer");
var choices1 = document.getElementById("choice1")
var choices2 = document.getElementById("choice2")
var choices3 = document.getElementById("choice3")
var choices4 = document.getElementById("choice4")


// variable to keep track of quiz ....

var timer = 75;
var myQuestionsInterval = 0;

var questions = [
    { "question": "For HTML a ___________ always starts on a new line, and is usually a block of text.", "choices": [{ "choice1": "number", "valid": "incorrect" }, { "choice2": "array", "valid": "incorrect" }, { "choice2": "function", "valid": "incorrect" }, { "choice2": "paragraph", "valid": "correct" }] },
    { "question": "A JavaScript ___________ is a block of code designed to perform a particular task.", "choices": [{ "choice1": "element", "valid": "incorrect" }, { "choice2": "function", "valid": "correct" }, { "choice2": "array", "valid": "incorrect" }, { "choice2": "number", "valid": "correct" }] },
    { "question": "What is the HTML DOM? The HTML DOM is a ____________ object model and programming interface for HTML.", "choices": [{ "choice1": "document", "valid": "incorrect" }, { "choice2": "standard", "valid": "correct" }, { "choice2": "method", "valid": "incorrect" }, { "choice2": "event", "valid": "incorrect" }] },
    { "question": "A ___________ is a value that you can get or set (like changing the content of an HTML element).", "choices": [{ "choice1": "method", "valid": "incorrect" }, { "choice2": "object", "valid": "incorrect" }, { "choice2": "property", "valid": "correct" }, { "choice2": "element", "valid": "incorrect" }] },
    { "question": "A method is an __________ you can do (like add or deleting an HTML element).", "choices": [{ "choice1": "object", "valid": "incorrect" }, { "choice2": "array", "valid": "incorrect" }, { "choice2": "addition", "valid": "incorrect" }, { "choice2": "action", "valid": "correct" }] }
];
// questions[0].choices[0]
// questions[0].question




function renderQuestions() {
    questionsEL.textContent = questions[myQuestionsInterval].question
    choices1.innerHTML = "";
    choices2.innerHTML = "";
    choices3.innerHTML = "";
    choices4.innerHTML = "";

var pTag1=document.createElement("p");
var pTag2=document.createElement("p");
var pTag3=document.createElement("p");
var pTag4=document.createElement("p");

pTag1.setAttribute('data-answer', questions[myQuestionsInterval].choices[0].valid);
pTag2.setAttribute('data-answer', questions[myQuestionsInterval].choices[1].valid);
pTag3.setAttribute('data-answer', questions[myQuestionsInterval].choices[2].valid);
pTag4.setAttribute('data-answer', questions[myQuestionsInterval].choices[3].valid);

pTag1.textContent = questions[myQuestionsInterval].choices[0].choice1;
pTag2.textContent = questions[myQuestionsInterval].choices[1].choice2;
pTag3.textContent = questions[myQuestionsInterval].choices[2].choice2;
pTag4.textContent = questions[myQuestionsInterval].choices[3].choice2;
pTag1.addEventListener("click", renderNextQuestion);
pTag2.addEventListener("click", renderNextQuestion);
pTag3.addEventListener("click", renderNextQuestion);
pTag4.addEventListener("click", renderNextQuestion);
choices1.appendChild(pTag1);
choices2.appendChild(pTag2);
choices3.appendChild(pTag3);
choices4.appendChild(pTag4);
}






function setTime() {
    setInterval(function () {
        console.log(timer, 'timer')
        timeEl.textContent = timer
        timer -= 1;
        if (timer < 0) {
            clearInterval('myInterval');
            message();
        }
    }, 1000)

}

function renderNextQuestion(e) {
    myQuestionsInterval ++;
    var element = e.target
    var answer = element.getAttribute('data-answer');
    console.log(answer)
    
if (myQuestionsInterval > 4) {
    
} else {
    renderQuestions();
}
}


// var currentQuestionIndex = 0;
// var timeEl = questions.length * 15;
//var counter = 0;
//var timerId;



// sound effects
// var sfxRight = new Audio("assets/sfx/correct.wav");
// var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
    //hide start screen
    
    startScreenEl.setAttribute("class", "hide");
    // un-hide questions section
    quizScreenEl.removeAttribute("class", "hide");


   

    // start timer
    setTime()
    renderQuestions()

    //show starting time
    // timerEl.textContent = time;

    // getQuestion();
}

startBtn.addEventListener("click", startQuiz)