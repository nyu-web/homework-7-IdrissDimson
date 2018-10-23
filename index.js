const daGameBoard = document.getElementById("gameBoard");

let playBoard = document.createElement("div");
let playerOne = true;

function playGame() {
	// body...
	if (event.target.textContent === "") {
		if (playerOne === true) {
			event.target.textContent = "X";
		} else {
			event.target.textContent = "O";
		}
		playerOne = !playerOne;
	} else {
		console.log("Someone marked this spot!");
	}
}

function createPlayBoard() {
	for (var i = 0; i < 9; i++) {
		playBoard = document.createElement("div");
		playBoard.classList.add("griddie");
		daGameBoard.appendChild(playBoard);
	}
	daGameBoard.addEventListener('click', playGame);
}

createPlayBoard();