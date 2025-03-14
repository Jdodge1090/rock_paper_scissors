/**
 * Function to prompt the user to select Rock, Paper, or Scissors.
 * Converts the user's input to lowercase for consistency.
 * Returns the user's choice as a string.
 */

function getUserChoice() {
    return prompt("Select Rock, Paper or Scissors: ").toLowerCase();
}

/*
 * Function to get the computer's choice for rock, paper, scissors.
 * Returns a random number between 0 and 2.
 */

function getComputerChoice() {
   let min = Math.ceil(0);
   let max = Math.floor(2);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Convert the computer's number to rock paper or scissors. 

function convertComputerChoice(computerChoice) {
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Compare the computer choice to the user choice and select a winner. 

function determineWinner(userChoice, computerChoice) {
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


// The game will be played to best 3 out of 5 rounds. Built a counter to begin counting userScore and computerScore

let computerScore = 0;
let userScore = 0;

while (computerScore < 3 && userScore < 3) {
    let userChoice = getUserChoice();
    console.log(`User choice: ${userChoice}`);

    let computerChoice = getComputerChoice();
    let computerChoiceText = convertComputerChoice(computerChoice);
    console.log(`Computer choice: ${computerChoiceText}`);

    let matchWinner = determineWinner(userChoice, computerChoiceText);
    console.log(matchWinner);

    if (matchWinner.includes("Computer")) {
        computerScore++;
    } else if (matchWinner.includes("You")) {
        userScore++;
    }

    console.log(`Current Scores - User: ${userScore}, Computer: ${computerScore}`);
}

if (userScore === 3) {
    console.log("Congratulations! You won the game.");
} else {
    console.log("Sorry! The computer won the game.");
}