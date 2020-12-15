//Create array of questions, answers, and options. 
var currentQuestion=0
var questiondb = [
  {
    number: 1,
    question: "Question",
    answer: "Answer",
    options: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ]
  },
  {
    number: 2,
    question: "Question",
    answer: "Answer",
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
    answer: "Answer",
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
    answer: "Answer",
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
    answer: "B",
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

//Calling to the elements  
var startButton = document.querySelector("#start-button");
var resultBox = document.querySelector("#result-box");
var quizBox = document.querySelector("#quiz-box");
var questions = document.querySelector("#questions");
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")
resultBox.style.display =" none";
quizBox.style.display="none";


// var infoBox = document.querySelector(".info-box");
// var exitButton = info-box.querySelector(".buttons .quit");
// var continueButton = info-box.querySelector(".buttons .restart");


// var optionList = document.querySelector(".choices-list");
// var timeLine = document.querySelector("header .time-line");
// var timeText = document.querySelector(".timer .time-left");
// var timeCount = document.querySelector(".timer .timer-countdown");

  //The function to show the questions  
  function showQuestions() {
    questions.textContent = questiondb[currentQuestion].question
    option1.textContent = questiondb[currentQuestion].options[0]
    option2.textContent = questiondb[currentQuestion].options[1]
    option3.textContent = questiondb[currentQuestion].options[2]
    option4.textContent = questiondb[currentQuestion].options[3]

  }
// //Start button function 
startButton.addEventListener("click", function(){
    console.log("Start")
    quizBox.style.display="block";
    startButton.style.display="none";
    showQuestions()
})

// //
// //exitButton.onclick() {
//   // infoBox.classList.remove("activeInfo"); 
// //}

// continueButton.onclick() {
//   infoBox.classList.remove("activeInfo"); //We hide the rules box
//   quizBox.classList.add("activeQuiz"); //Show quiz box
//   showQuestions(0); //calling showQuestions function
//   questionCounter(1); //passing 1 parameter to questionCounter
//   startTimer(15); //calling start Timer function
//   startTimerLine(0); //calling startTimerLine function
// }

// timeValue = 300;
// questionCounter= 0;
// questionNumber = 1;
// userScore = 0;
// counter=0;
// counterLine;
// widthValue=0;

// var restartQuiz = result-box.querySelector(".buttons .restart");
// var quitQuiz = result-box.querySelector(".buttons .quit");

// // if restartQuiz button clicked
// restart_quiz.onclick (){
//     quizBox.classList.add("activeQuiz"); //show quiz box
//     resultBox.classList.remove("activeResult"); //hide result box
//     timeValue = 15; 
//     questionCounter = 0;
//     questionNumber = 1;
//     userScore = 0;
//     widthValue = 0;
//     showQuestions(questionCounter); 
//     questionCounter(questionNumber); 
//     clearInterval(counter); //clear counter
//     clearInterval(counterLine);
//     startTimer(timeValue); //calling startTimer function
//     startTimerLine(widthValue); //calling startTimerLine function
//     timeText.textContent = "Time Left"; //change the text of timeText to Time Left
//     continueButton.classList.remove("show"); //hide the next button
// }

// // if quitQuiz button clicked
// quit_quiz.onclick(){
//     window.location.reload(); //reload the current window
// }

// var nextButton = document.querySelector(".footer .next-btn");
// var bottomQuestionCounter = document.querySelector(".footer .score-alert");

// // if Next Question button clicked
// nextButton.onclick(){
//     if(questionCounter < questions.length - 1){ 
//         questionCounter++; 
//         questionNumber++; 
//         showQuestions(questionCounter);
//         questionCounter(questionCounter); //passing q number value to questionCounter
//         clearInterval(counter); //clear counter
//         clearInterval(counterLine); 
//         startTimer(timeValue); //calling startTimer function
//         startTimerLine(widthValue); //calling startTimerLine function
//         timeText.textContent = "Time Left"; //change the timeText to Time Left
//         next_btn.classList.remove("show"); //hide the next button
//     }else{
//         clearInterval(counter); //clear counter
//         clearInterval(counterLine); //clear counterLine
//         showResult(); //calling showResult function
//     }
// }

//   //The questions layout as they appear on screen  

//   question - tag === '<span>' + questions[index].number + ". " + questions[index].question + '</span>';
//   options_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
//     + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
//     + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
//     + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';

//   var option = optionList.querySelectorAll(".option");

//   //If the answer is correct, timer is unaffected, and user gains 5 points. If the answer is incorrect time is subtracted from the clock. 

//   function optionSelected(answer) {
//     clearInterval(counter);
//     var userAnswer = answer.textContent;
//     var correctAnswer = questions[questionsCounter].answer;
//     allOptions = optionList.children.length;


//     if (userAnswer === correctAnswer) {
//       userScore += 5;
//       answer.classList.add("Correct");
//       console.log("That's a correct answer!");
//     }

//     else {
//       userScore - 5; 
//       answer.classList.add("Wrong");
//       console.log ("That's wrong!");

//       for (i = 0; i < allOptions; i++) {
//         (optionList.children[i].textContent === correctAnswer) 
//         }
//       }
//     }

//     for (i = 0; i < allOptions, i++) {
//       optionList.children[i].classList.add("disabled");

//     continueButton.classList.add("show");
//   }

//   //THEN the game is over
//   function showResult() {
//     infoBox.classList.remove("activeInfo");
//     quizBox.classList.remove("activeQuiz");
//     resultBox - classList.add("activeResult");
   
//     var scoreText = resultBox.querySelector(".score-alert");
//     var scoreTag = "You got" userScore + "out of" questions.length;
    

//   }

//   //WHEN the game is over

//   console.log("Game over!");

// //THEN I can save my initials and score; 
