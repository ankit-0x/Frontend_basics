const choices = document.querySelector(".choices");
const playerIcon = document.querySelector(".player-choosed-icon");
const computerIcon = document.querySelector(".computer-choosed-icon");
const winnerText = document.querySelector(".winner");

const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const gameCountEl = document.querySelector(".count");
const resetBtn = document.querySelector(".res-btn");

let game_count = 0;
let p_win = 0;
let c_win = 0;


function getComputedChoice() {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

choices.addEventListener("click", (event) => {
  const element = event.target.closest("button");
  if (!element) return;

  game_count++;
  gameCountEl.innerText = game_count;

  const player_choice = element.className;
  const computer_choice = getComputedChoice();

 
  playerIcon.innerHTML = `<img src="./${player_choice}.png" alt="${player_choice}">`;
  computerIcon.innerHTML = `<img src="./${computer_choice}.png" alt="${computer_choice}">`;

  if (player_choice === computer_choice) {
    winnerText.innerText = "DRAW";
  } 
  else if (
    (player_choice === "rock" && computer_choice === "scissor") ||
    (player_choice === "paper" && computer_choice === "rock") ||
    (player_choice === "scissor" && computer_choice === "paper")
  ) {
    winnerText.innerText = "YOU WIN 🎉";
    p_win++;
    playerScoreEl.innerText = p_win;
  } 
  else {
    winnerText.innerText = "YOU LOSE";
    c_win++;
    computerScoreEl.innerText = c_win;
  }
});


resetBtn.addEventListener("click", () => {
  game_count = 0;
  p_win = 0;
  c_win = 0;

  gameCountEl.innerText = "0";
  playerScoreEl.innerText = "0";
  computerScoreEl.innerText = "0";
  winnerText.innerText = "";

  playerIcon.innerHTML = "";
  computerIcon.innerHTML = "";
});
