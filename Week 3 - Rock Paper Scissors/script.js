// get DOM elements
const victoryText = document.getElementById("victoryText");
const playerCard = document.getElementById("playerCard");
const cpuCard = document.getElementById("cpuCard");

// clear DOM from previous game
function resetGame() {
    resetAnimation(playerCard);
    resetAnimation(cpuCard);
    resetAnimation(victoryText);
    victoryText.innerHTML = "";
}

// Randomly select move for Computer
function generateMove() {
    const cpuArray = ["Rock", "Paper", "Scissors"];
    return cpuArray[Math.floor(Math.random() * cpuArray.length)];
}

// sets player choice to Rock, generates CPU move, and runs game logic
function chooseRock() {
    // Reset game state and generate moves
    resetGame();
    var playerChoice = "Rock";
    var cpuChoice = generateMove();

    // add images and apply spin animation (adding css class)
    playerCard.src = "Images/rock.png";
    cpuCard.src = `Images/${cpuChoice.toLowerCase()}.png`;
    spinItem(playerCard, 1, "right");
    spinItem(cpuCard, 1, "left");

    // Game Logic
    victoryText.classList.add("fadeIn");
    if (playerChoice == cpuChoice) {victoryText.innerHTML = "Draw! Click a button to play again!";} 
    else if (cpuChoice == "Paper") {victoryText.innerHTML = "You Lose! Click a button to play again!";} 
    else if (cpuChoice == "Scissors") {victoryText.innerHTML = "You Win! Click a button to play again!";}
}

// sets player choice to Paper, generates CPU move, and runs game logic
function choosePaper() {
    // Reset game state and generate moves
    resetGame();
    var playerChoice = "Paper";
    var cpuChoice = generateMove();

    // add images and apply spin animation (adding css class)
    playerCard.src = "Images/paper.png";
    cpuCard.src = `Images/${cpuChoice.toLowerCase()}.png`;
    spinItem(playerCard, 1, "right");
    spinItem(cpuCard, 1, "left");

    // Game Logic
    victoryText.classList.add("fadeIn");
    if (playerChoice == cpuChoice) {victoryText.innerHTML = "Draw! Click a button to play again!";} 
    else if (cpuChoice == "Scissors") {victoryText.innerHTML = "You Lose! Click a button to play again!";} 
    else if (cpuChoice == "Rock") {victoryText.innerHTML = "You Win! Click a button to play again!";}
}

// sets player choice to Scissors, generates CPU move, and runs game logic
function chooseScissors() {
    // Reset game state and generate moves
    resetGame();
    var playerChoice = "Scissors";
    var cpuChoice = generateMove();

    // add images and apply spin animation (adding css class)
    playerCard.src = "Images/scissors.png";
    cpuCard.src = `Images/${cpuChoice.toLowerCase()}.png`;    
    spinItem(playerCard, 1, "right");
    spinItem(cpuCard, 1, "left");

    // Game Logic
    victoryText.classList.add("fadeIn");
    if (playerChoice == cpuChoice) {victoryText.innerHTML = "Draw! Click a button to play again!";} 
    else if (cpuChoice == "Rock") {victoryText.innerHTML = "You Lose! Click a button to play again!";} 
    else if (cpuChoice == "Paper") {victoryText.innerHTML = "You Win! Click a button to play again!";}
}

// Set spin direction and number of iterations for each spinning element
function spinItem(item, spinCount, spinDirection) {
    if (spinDirection == "right") {
        item.style.animationIterationCount = spinCount;
        item.classList.add("spinRight");
    } else if (spinDirection == "left") {
        item.style.animationIterationCount = spinCount;
        item.classList.add("spinLeft");
    } else {
        alert("Uh oh.");
    }
}

// Remove spinDirection classes and resets CSS animations
function resetAnimation(item) {
    // remove fadeIn class from victoryText
    if (item.classList.contains("fadeIn")) {
        item.classList.remove("fadeIn");
        void item.offsetWidth;  // reset CSS animation
    }

    // remove spin classes from player and cpu cards
    if (item.classList.contains("spinRight")) {
        item.classList.remove("spinRight");
        void item.offsetWidth;  // reset CSS animation
    } else {
        item.classList.remove("spinLeft");
        void item.offsetWidth;  // reset CSS animation
    }
}

resetGame();

// Debriefing notes:
    // there is no reason to have each button click be a separate function
        // just have button click start the game and then have a button value go into the playerChoice variable
        // then just structure game logic better with nesting so it's less space to do the same thing
        // saves on lines, makes stuff more replicable
