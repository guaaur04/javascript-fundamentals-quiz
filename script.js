//Create an array of questions and answers
questions = [
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
  },
    {
    number: 5,
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
     number: 6,
     question: "Question",
     answer: "Answer",
     options: [
       "Option 1",
       "Option 2",
       "Option 3",
       "Option 4"
    ]
  },
];

//Calling to the elements  
var startButton = document.querySelector(".start-button button");
var infoBox = document.querySelector(".box");
var exitButton = info-box.querySelector(".buttons .quit");
var continueButton = info-box.querySelector(".buttons .restart");
var quizBox = document.querySelector(".quiz-box");
var resultBox = document.querySelector(".result-box");
var optionList = document.querySelector(".choice-list");
var timeLine = document.querySelector("header .time-line");
var timeText= document.querySelector(".timer .timeL-lft");
var timeCount = document.querySelector(".timer .timer-countdown");

//Connect the buttons to functions.
start-btn.onclick = ()=>{
info-box.classList.add("activeInfo"); 

//When player clicks the exit button... 
exit-btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box

// When the user chooses to continue the game...
continue-btn.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); //We hide the rules box
    quiz-box.classList.add("activeQuiz"); //Show quiz box
    showQuestions(0); //calling showQuestions function
    questionCounter(1); //passing 1 parameter to questionCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function


//When start button is clicked, then rules appear on screen. 
if start-button.onclick(){
    then infoBox.classList.add("activeInfo)";
}

//The function to show the questions  
function showQuestions (index){
    var questions= document.querySelector(".questions");


//Continue presenting questions and answers.  When I answer the question, a new question appears. 

   question-tag = '<span>'+ questions[index].number + ". " + questions[index].question +'</span>';
    options_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    
    const option = option_list.querySelectorAll(".option");

//If the answer is correct, timer is unaffected, and user gains 5 points. If the answer is incorrect time is subtracted from the clock. 
if function optionSelected(answer){
  then clearInterval(counter);
  var userAnswer= answer.textContent
  var correctAnswer = questions[question_count].answer;
  allOptions =option_list.children.length;

if (userAnswer === correctAnswer){
  userScore +=5;
  answer.classList.add("Correct");

  console.log("That's a correct answer!");{}
  

else{
  answer.classList.add("Wrong!");

for (i=0; i < allOptions; 1++){
  if(option_list.children[i].textContent === correctAnswer) {
  }
  }

for(i=0; i< allOption, i++){
  option_list.children[i].classList.add("disabled");
}

continueButton.classList.add("show");
}

//WHEN all questions are answered or the timer reaches 0


//THEN the game is over
function showResult(){
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box-classList.add("activeResult");
  var scoreText =
resultBox.querySelector(".score_text");
  
 var scoreTag = 'You got + userScore + out of  questions.length';
}

//WHEN the game is over

console.log("Game over!");

//THEN I can save my initials and score