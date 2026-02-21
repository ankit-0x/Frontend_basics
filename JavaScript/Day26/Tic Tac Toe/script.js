const board = document.querySelector(".board");
let winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let board_array = new Array(9).fill("E");

function checkWinner() {
  for (let [index0, index1, index2] of winning) {
    if (
      board_array[index0] != "E" &&
      board_array[index0] === board_array[index1] &&
      board_array[index1] === board_array[index2]
    ) {
      document.getElementById(index0).classList.add('cut');
      document.getElementById(index1).classList.add('cut');
      document.getElementById(index2).classList.add('cut');
      return 1;
    }
  }
  return 0;
}

let turn = "O";
let total_turn = 0;
const picture1 = document.getElementById("p1");
picture1.classList.add("pic");
const picture2 = document.getElementById("p2");

const printer = (event) => {
  const element = event.target;

  if (!element.classList.contains("cell")) return;

  if (board_array[element.id] === "E") {
    total_turn++;

    if (turn === "O") {
      picture2.classList.add("pic");

      picture1.classList.remove("pic");

      element.innerHTML = "O";
      board_array[element.id] = "O";

      if (checkWinner()) {
        document.getElementById("winning_msg").innerText = "O is winner";
        picture1.classList.remove("pic");
        picture2.classList.remove("pic");
        picture1.classList.add("pic");
        board.removeEventListener("click", printer);
        return;
      }

      turn = "X";
    } else {
      picture1.classList.add("pic");
      picture2.classList.remove("pic");
      element.innerHTML = "X";
      board_array[element.id] = "X";

      if (checkWinner()) {
        document.getElementById("winning_msg").innerText = "X is winner";
        picture1.classList.remove("pic");
        picture2.classList.remove("pic");
        picture2.classList.add("pic");
        board.removeEventListener("click", printer);
        return;
      }

      turn = "O";
    }
  }

  if (total_turn === 9) {
    document.getElementById("winning_msg").innerText = "Match is draw";
    picture1.classList.remove("pic");
    picture2.classList.remove("pic");
    board.removeEventListener("click", printer);
    return;
  }
};

board.addEventListener("click", printer);

const restart = document.getElementById("Restart_btn");
restart.addEventListener("click", (event) => {
  const cells = Array.from(document.getElementsByClassName("cell"));

  cells.forEach((value) => {
    value.innerHTML = "";
    value.classList.remove('cut');
  });

  turn = "O";
  total_turn = 0;
  board_array = new Array(9).fill("E");
  board.addEventListener("click", printer);
  picture1.classList.remove("pic");
  picture2.classList.remove("pic");
  picture1.classList.add("pic");
  document.getElementById("winning_msg").innerText = "";
});
