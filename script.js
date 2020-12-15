//Create array of questions, answers, and options. 
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
    question: "What is the proper way to link ",
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
    question: "Question",
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
    question: "Question",
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
    question: "Question",
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
    answer: "F",
    options: [
      "Hyper Text mark up language",
      "Option 2",
      "Option 3",
      "Option 4"
    ]
  },
];

//Calling to the elements  
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
var restart = document.getElementById("restart")
var timer = document.getElementById("#timer-countdown")

resultBox.style.display = "none";
quizBox.style.display = "none";


var score = 0;
var countDownDate = new Date(":3:00").getTime();

//Timer function
var timer = setInterval(function () {

  var now = new Date().getTime();
  var timeLeft = countDownDate - now;

  //Calculating the minutes and seconds
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//Allows time to display on screen
document.getElementById("mins").innerHTML = minutes
document.getElementsByTagName("secs").innerHTML = seconds

//Display the message when countdown is over 
if (timeLeft < 0) {
  clearInterval(myFunc);
  document.getElementsByID("mins").innerHTML = ""
  document.getElementsByID("secs").innerHTML = ""
  document.getElementsByID("end").innerHTML = "Time's up!";
}
}, 1000);


//When a user clicks an option button, the option is selected.
option1.addEventListener("click", optionSelected)
option2.addEventListener("click", optionSelected)
option3.addEventListener("click", optionSelected)
option4.addEventListener("click", optionSelected)
restart.addEventListener("click", saveUser)

//This function shows the questions and options. 
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
    showQuestions()
    
  })

function optionSelected() {

    var userAnswer = this.getAttribute("data-value")
    console.log(userAnswer)
    var correctAnswer = questiondb[currentQuestion].answer;

    if (userAnswer === correctAnswer) {
      console.log("That's a correct answer!");
      timer.textContent = "Correct!"
      score.textContent = score;
    }

    else {
      timer = timer -= 5;
      console.log("That's wrong!");
      timer.textContent = "Wrong..."
      score.textContent = score;
    }
    if (currentQuestion < questiondb.length - 1) {
      currentQuestion++
      showQuestions()
    }

    else {
      console.log("Congrats, you've completed the quiz!")
      theEnd()
    }

  }

function theEnd() {
    resultBox.style.display = "block"
    quizBox.style.display = "none"
    scorealert.textContent = score
  }

function saveUser() {
    var user = userName.value
    console.log(user, score)
  }

  localStorage.setItem("user", userName)
  localStorage.setItem("score", score)

