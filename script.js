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
console.log(computerChoice);

// Get the computer's choice and store "rock", "paper", or "scissors".
// Prompt the user to select rock, paper or scissors.
// Compare the computer choice to the user choice and select a winner. 
// Declare the winner.
// The game will be played to best 3 out of 5 rounds. It will repeat until humanScore or computerScore = 3. 
// End the game letting the user know who won the game.