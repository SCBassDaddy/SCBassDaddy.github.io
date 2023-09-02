// Setting up text in console
let title = "";
let expression = "";
let comment = "";
let answer = "";

title = "Four-titude";
expression = "Look be4 you";
comment = "5 questions???";
getNewText();

// Check correct answer
let answers = document.getElementsByClassName("quattroAnswer");
let answer0 = 404;
let answer1 = "fortnite";
let answer2 = "forbidden";
let answer3 = 42;
let answer4 = "forbes";

document.getElementById("c9-check").onclick = function() {chechCorrectAnswers()};

function chechCorrectAnswers() {
  let countCorrectAnswers = 0;
  if (answers[0].value.includes(answer0)) {
    countCorrectAnswers++;
    answers[0].style.borderColor = "green";
  } else {
    answers[0].style.borderColor = "red";
  }
  
  if (answers[1].value.toLowerCase().includes(answer1)) {
    countCorrectAnswers++;
    answers[1].style.borderColor = "green";
  } else {
    answers[1].style.borderColor = "red";
  }
  
  if (answers[2].value.toLowerCase().includes(answer2)) {
    countCorrectAnswers++;
    answers[2].style.borderColor = "green";
  } else {
    answers[2].style.borderColor = "red";
  }
  
  if (answers[3].value.includes(answer3)) {
    countCorrectAnswers++;
    answers[3].style.borderColor = "green";
  } else {
    answers[3].style.borderColor = "red";
  }
  
  if (answers[4].value.toLowerCase().includes(answer4)) {
    countCorrectAnswers++;
    answers[4].style.borderColor = "green";
  } else {
    answers[4].style.borderColor = "red";
  }

  checkAnswers(countCorrectAnswers);
  
}

function checkAnswers(num) {
  if (num === 5) {
    document.getElementById("game-wrapper").style.display = "none";
    title = "Nice Work";
    expression = "The Clue is..."
    comment = "";
    getNewText();
    document.getElementById("victory-clue").innerText = "forgiveness";
    document.getElementById("victory-clue").style.display = "block";
  } else {
    setTimeout(() => {
      for (let i = 0; i < answers.length; i++) {
        answers[i].value = null;
        answers[i].style.borderColor = "gray";
      }
      }, 1500);
  }
}

// Updates text in console
function getNewText () {
  document.getElementById("title").innerText = title;
  document.getElementById("bot-expression").innerText = expression;
  document.getElementById("bot-comment").innerText = comment;
}