alert(
  "Welcome! Press 'S' to start ('R' to restart). On mobile? Just tap 'Press S to start' to begin. Enjoy! - Chidera",
);
document.addEventListener("keydown", function (event) {
  if (event.key.toUpperCase() === "R") {
    window.location.reload();
  }
});
let gameButtons = ["Rock", "Paper", "Scissors"];
let generatedValues;
let clickedValues;
let selector = document.querySelector.bind(document);
let level = 1;
let started = false;
let winValue = 1;
let loseValue = 1;
selector("p").addEventListener("click", function () {
  if (!started) {
    started = true;
    computerSequence();
    for (let i = 0; i < gameButtons.length; i++) {
      document
        .querySelectorAll("button.container")
        [i].addEventListener("click", function () {
          let clickedButton = this.innerHTML;
          clickedValues = clickedButton;
          checkAnswer();
        });
    }
  }
});
document.addEventListener("keydown", function (event) {
  if (!started && (event.key === "S" || event.key === "s")) {
    started = true;
    computerSequence();
    for (let i = 0; i < gameButtons.length; i++) {
      document
        .querySelectorAll("button.container")
        [i].addEventListener("click", function () {
          let clickedButton = this.innerHTML;
          clickedValues = clickedButton;
          checkAnswer();
        });
    }
  }
});
function computerSequence() {
  selector("p").textContent = "level " + level;
  selector("p").style.color = "green";
  level++;
  let randomNumber = Math.floor(Math.random() * 3);
  generatedValues = gameButtons[randomNumber];
}
function checkAnswer() {
  if (generatedValues && clickedValues) {
    if (generatedValues === clickedValues) {
      selector("p").textContent = "Draw";
      selector("p").style.color = "#808080";
    } else if (
      (clickedValues === "Rock" && generatedValues === "Scissors") ||
      (clickedValues === "Paper" && generatedValues === "Rock") ||
      (clickedValues === "Scissors" && generatedValues === "Paper")
    ) {
      selector("p").textContent = "You Win 🚩";
      selector("#human-count").value = winValue;
      winValue++;
    } else {
      selector("p").textContent = "You loose ❌";
      selector("#robot-count").value = loseValue;
      loseValue++;
    }
    selector("#robot-pick").value = generatedValues;
    selector("#player-pick").value = clickedValues;
    generatedValues = undefined;
    clickedValues = undefined;
    setTimeout(() => {
      computerSequence();
      selector("#robot-pick").value = "";
      selector("#player-pick").value = "";
    }, 2000);
  }
}
