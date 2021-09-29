// To add:
    // animations for the game with proper timing
    // reset button to reset the game space
    // you can get rid of the winLoseFlag if it proves unnecessary

// get DOM elements
const cpuChoiceOutput = document.getElementById("cpuChoice");
const userChoiceOutput = document.getElementById("userChoice");
const victoryText = document.getElementById("victoryText");

// arr for CPU move choice
const cpuArray = ["Rock", "Paper", "Scissors"];

var winLoseFlag = "";

// Randomly selects move for Computer
function generateMove() {
    return cpuArray[Math.floor(Math.random() * cpuArray.length)];
}

// clear DOM from previous game
function gameStart() {
    victoryText.innerHTML = "";
    cpuChoiceOutput.innerHTML = "";
    userChoiceOutput.innerHTML = "";
}

// sets player choice to Rock, generates CPU move, and runs game logic
function chooseRock() {
    var playerChoice = "Rock";
    var cpuChoice = generateMove();

    if (playerChoice == "Rock" && cpuChoice == "Rock") {
        victoryText.innerHTML = "Draw!";
        cpuChoiceOutput.innerHTML = "Rock";
        userChoiceOutput.innerHTML = "Rock";
        winLoseFlag = "D";
    } else if (playerChoice == "Rock" && cpuChoice == "Paper") {
        victoryText.innerHTML = "You Lose!";
        cpuChoiceOutput.innerHTML = "Paper";
        userChoiceOutput.innerHTML = "Rock";
        winLoseFlag = "L";
    } else if (playerChoice == "Rock" && cpuChoice == "Scissors") {
        victoryText.innerHTML = "You Win!";
        cpuChoiceOutput.innerHTML = "Scissors";
        userChoiceOutput.innerHTML = "Rock";
        winLoseFlag = "W";
    }
}

// sets player choice to Paper, generates CPU move, and runs game logic
function choosePaper() {
    var playerChoice = "Paper";
    var cpuChoice = generateMove();

    if (playerChoice == "Paper" && cpuChoice == "Paper") {
        victoryText.innerHTML = "Draw!";
        cpuChoiceOutput.innerHTML = "Paper";
        userChoiceOutput.innerHTML = "Paper";
        winLoseFlag = "D";
    } else if (playerChoice == "Paper" && cpuChoice == "Scissors") {
        victoryText.innerHTML = "You Lose!";
        cpuChoiceOutput.innerHTML = "Scissors";
        userChoiceOutput.innerHTML = "Paper";
        winLoseFlag = "L";
    } else if (playerChoice == "Paper" && cpuChoice == "Rock") {
        victoryText.innerHTML = "You Win!";
        cpuChoiceOutput.innerHTML = "Rock";
        userChoiceOutput.innerHTML = "Paper";
        winLoseFlag = "W";
    }
}

// sets player choice to Scissors, generates CPU move, and runs game logic
function chooseScissors() {
    var playerChoice = "Scissors";
    var cpuChoice = generateMove();

    if (playerChoice == "Scissors" && cpuChoice == "Scissors") {
        victoryText.innerHTML = "Draw!";
        cpuChoiceOutput.innerHTML = "Scissors";
        userChoiceOutput.innerHTML = "Scissors";
        winLoseFlag = "D";
    } else if (playerChoice == "Scissors" && cpuChoice == "Rock") {
        victoryText.innerHTML = "You Lose!";
        cpuChoiceOutput.innerHTML = "Rock";
        userChoiceOutput.innerHTML = "Scissors";
        winLoseFlag = "L";
    } else if (playerChoice == "Scissors" && cpuChoice == "Paper") {
        victoryText.innerHTML = "You Win!";
        cpuChoiceOutput.innerHTML = "Paper";
        userChoiceOutput.innerHTML = "Scissors";
        winLoseFlag = "W";
    }
}

gameStart();