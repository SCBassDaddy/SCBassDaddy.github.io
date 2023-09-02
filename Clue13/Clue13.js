// Setting up text in console
let title = "";
let expression = "";
let comment = "";
let answer = "";

title = "The Last Form";
expression = "So-do-cold numbers!";
comment = "Fix the table to reveal a clue";
answer = "count dracula";
getNewText();

// Check answer
document.getElementById("answer-submit").onclick = function() {checkSvar()}

let checkSvar = () => {
  if (document.getElementById("answer").value.toLowerCase().includes(answer)) {
      document.getElementById("game-wrapper").style.display = "none";
      title = "Nice Work";
      expression = "The Clue is..."
      comment = "";
      document.getElementById("victory-clue").innerText = "victory";
      document.getElementById("victory-clue").style.display = "block";
      getNewText()
    } else {
      document.getElementById("answer-submit").style.borderBlockColor = "red"
      setTimeout(() => {
        document.getElementById("answer-submit").style.borderBlockColor = "gray";
        document.getElementById("answer").value = null;
        }, 1000);
    }
}

let gridInputs = document.getElementsByClassName("grid-input");

setInterval(function() {
  for(let i = 0; i < gridInputs.length; i++) {
    if (gridInputs[i].value !== "1" &&
        gridInputs[i].value !== "2" &&
        gridInputs[i].value !== "3" &&
        gridInputs[i].value !== "4" &&
        gridInputs[i].value !== "5" &&
        gridInputs[i].value !== "6" &&
        gridInputs[i].value !== "7" &&
        gridInputs[i].value !== "8" &&
        gridInputs[i].value !== "9"
        ) {
          gridInputs[i].value = null;
    }
    }
  }, 3000);

// Check soduko
document.getElementById("check-submit").onclick = function() {checkSoduko()}

function checkSoduko() {
  let finalSum = 0;

  for(let i = 0; i < gridInputs.length; i++) {
    if (parseInt(gridInputs[i].value) > 0)
    finalSum += parseInt(gridInputs[i].value);
  }

  if (finalSum === 98 &&
      document.getElementById("check-1").value === "2" &&
      document.getElementById("check-2").value === "9" &&
      document.getElementById("check-3").value === "7") {
    let clue13 = document.getElementsByClassName("clue-13");
    for (let i = 0; i < clue13.length; i++) {
      clue13[i].style.display = "block";
    }
    let redCells = document.getElementsByClassName("red");
    for (let i = 0; i < redCells.length; i++) {
      redCells[i].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
    let darkCells = document.getElementsByClassName("dark");
    for (let i = 0; i < darkCells.length; i++) {
      darkCells[i].style.color = "rgb(56, 0, 0)";
    }
  } else {
    document.getElementById("check-submit").style.backgroundColor = "red"
      setTimeout(() => {
        document.getElementById("check-submit").style.backgroundColor = "";
        }, 1000);
  }
}

// Updates text in console
function getNewText () {
  document.getElementById("title").innerText = title;
  document.getElementById("bot-expression").innerText = expression;
  document.getElementById("bot-comment").innerText = comment;
}
