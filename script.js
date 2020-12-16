//Creates array of questions, answers, and options. 
var currentQuestion = 0
var questiondb = [
  {
    number: 1,
    question: "What is CSS?",
    answer: "C",
    options: [
      "Continued Sheet Style",
      "Cascading Style Sample",
      "Cascading Style Sheet",
      "Computer Style Sample"
    ]
  },
  {
    number: 2,
    question: "What is the proper way to link a Javascript file into your HTML file?",
    answer: "B",
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ]
  },
  {
    number: 3,
    question: "What is NaN?",
    answer: "C",
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ]
  },
  {
    number: 4,
    question: "What is the difference between local and session storage?",
    answer: "D",
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ]
  },
  {
    number: 5,
    question: "Where's my dog?",
    answer: "E",
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ]
  },
  {
    number: 6,
    question: "What is HTML?",
    answer: "A",
    options: [
      "Hyper Text mark up language",
      "Option 2",
      "Option 3",
      "Option 4"
    ]
  },
];

//Calling to the elements... 
var startButton = document.querySelector("#start-button");
var resultBox = document.querySelector("#result-box");
var quizBox = document.querySelector("#quiz-box");
var questions = document.querySelector("#questions");
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")
var score = document.getElementById("#score")
var timeline = document.getElementById("#timer")
var userName = document.getElementById("username")
var timer = document.getElementById("#timer-countdown")
var minutes = document.getElementById("mins")
var seconds = document.getElementById("secs")
var scoreChart = document.querySelector("#score-chart")
var saveUsername =document.querySelector("#save-username")

//Hides results and quiz box 
resultBox.style.display = "none";
quizBox.style.display = "none";

var score = 0;
var timeLeft = 0;

//Timer function
function showTimer() {
  timeLeft = 20

  timer = setInterval(function () {
    timeLeft--
    document.getElementById("secs").innerHTML = timeLeft

    //Display the message when countdown is over 
    if (timeLeft < 0) {
      clearInterval(timeLeft);
      document.getElementById("secs").innerHTML = ""
      document.getElementById("end").innerHTML = "Time's up!";
      quizBox.style.display = "none";
      resultBox.style.display = "block";
    }
  }, 1000);

}



//When a user clicks an option button, the option is selected
option1.addEventListener("click", optionSelected)
option2.addEventListener("click", optionSelected)
option3.addEventListener("click", optionSelected)
option4.addEventListener("click", optionSelected)


//This function shows the questions and options
function showQuestions() {
  questions.textContent = questiondb[currentQuestion].question
  option1.textContent = questiondb[currentQuestion].options[0]
  option2.textContent = questiondb[currentQuestion].options[1]
  option3.textContent = questiondb[currentQuestion].options[2]
  option4.textContent = questiondb[currentQuestion].options[3]

}

//Start button function 
startButton.addEventListener("click", function () {
  console.log("Start")
  quizBox.style.display = "block";
  startButton.style.display = "none";
  showTimer()
  showQuestions()
})

//Functions for options selected
function optionSelected() {

  var userAnswer = this.getAttribute("data-value")
  console.log(userAnswer)
  var correctAnswer = questiondb[currentQuestion].answer;

  if (userAnswer === correctAnswer) {
    console.log("That's a correct answer!");
    timer.textContent = "Correct!"
    ++score;
    alert(score);
  }

  else {
  timer--;
    console.log("That's wrong!");
    timer.textContent = "Wrong..."
  }
  if (currentQuestion < questiondb.length - 1) {
    currentQuestion++
    showQuestions()
  }

  else {
    alert("Congrats, you've completed the quiz!")
    theEnd()
  }

}

function theEnd() {
  resultBox.style.display = "block"
  quizBox.style.display = "none"
  document.getElementById('score').innerHTML = score;
}

// function saveUsername() {
//   var user = userName.value
  saveUsername.addEventListener('click', function (
    
  ){


  })
  console.log(user, score)
}

localStorage.setItem("user", userName)
localStorage.setItem("score", score)

//renderScoreBoard doesn't have a function yet 
renderScore();

// set new submission
localStorage.setItem("user", JSON.stringify(user));

