/**
 * Function to prompt the user to select Rock, Paper, or Scissors.
 * Converts the user's input to lowercase for consistency.
 * Returns the user's choice as a string.
 */

function getUserChoice() {
    return prompt("Select Rock, Paper or Scissors: ").toLowerCase();
}

let userChoice = getUserChoice();

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

// Compare the computer choice to the user choice and select a winner. 
// Declare the winner.
// The game will be played to best 3 out of 5 rounds. It will repeat until humanScore or computerScore = 3. 
// End the game letting the user know who won the game.