/**
 * Function to prompt the user to select Rock, Paper, or Scissors.
 * Converts the user's input to lowercase for consistency.
 * Returns the user's choice as a string.
 */

function getUserChoice() {
    return prompt("Select Rock, Paper or Scissors: ").toLowerCase();
}

let userChoice = getUserChoice();
console.log(userChoice);

/*
 * Function to get the computer's choice for rock, paper, scissors.
 * Returns a random number between 0 and 2.
 */

function getComputerChoice() {
    min = Math.ceil(0);
    max = Math.floor(2);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let computerChoice = getComputerChoice(0, 2);

// Convert the computer's number to rock paper or scissors. 

function convertComputerChoice() {
    if (computerChoice === 0) {
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

let computerChoiceText = convertComputerChoice();
console.log(computerChoice);

// Compare the computer choice to the user choice and select a winner. 

function determineWinner() {
    if (userChoice === computerChoice) {
        return "It is a tie";
    } else if (userChoice === "rock" && computerChoice === "paper") {
        return "Paper beats Rock. Computer wins.";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        return "Rock beats Scissors. You win!";
    } else if (userChoice === "paper" && computerChoice === "rock") {
        return "Paper beats Rock. You win!"
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        return "Scissors beats Paper. Computer wins.";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        return "Scissors beats Paper. You win!";
    } else {
        return "Rock beats scissors. Computer wins.";
    }
}

let matchWinner = determineWinner(userChoice, computerChoice);
console.log(matchWinner);

// The game will be played to best 3 out of 5 rounds. It will repeat until humanScore or computerScore = 3. 

let computerScore = 0;
let userScore = 0;

function gameScore() {
    if (matchWinner.includes("Computer")) {
        computerScore = ++computerScore;
    } else if (matchWinner.includes("You")) {
        userScore = ++userScore;
    } else {

    }
}

gameScore();

console.log(computerScore);
console.log(userScore);

// End the game letting the user know who won the game.