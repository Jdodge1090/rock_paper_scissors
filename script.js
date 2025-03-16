// Initialize game variables
let userChoice = '';
let computerScore = 0;
let userScore = 0;
let gameInProgress = true;

// Get DOM elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const computerScoreDisplay = document.querySelector('.computer_score p');
const userScoreDisplay = document.querySelector('.userScore p');
const display = document.querySelector('.display');

// Add event listeners to buttons
rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));

/**
 * Function to get the computer's choice
 * Returns a random number between 0 and 2
 */
function getComputerChoice() {
    const min = Math.ceil(0);
    const max = Math.floor(2);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Convert computer's numeric choice to string
 */
function convertComputerChoice(computerChoice) {
    if (computerChoice === 0) return "rock";
    if (computerChoice === 1) return "paper";
    return "scissors";
}

/**
 * Determine winner of the round
 */
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It is a tie";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You chose ${userChoice} and computer chose ${computerChoice}. You win!`;
    } else {
        return `The computer chose ${computerChoice} and you chose ${userChoice}. Computer wins.`;
    }
}

/**
 * Update the score display
 */
function updateScores() {
    computerScoreDisplay.textContent = computerScore;
    userScoreDisplay.textContent = userScore;
}

/**
 * Play a single round of the game
 */
function playRound(choice) {
    if (!gameInProgress) return;

    userChoice = choice;
    console.log(`User choice: ${userChoice}`);

    const computerChoice = getComputerChoice();
    const computerChoiceText = convertComputerChoice(computerChoice);
    console.log(`Computer choice: ${computerChoiceText}`);

    const matchWinner = determineWinner(userChoice, computerChoiceText);
    console.log(matchWinner);
    display.textContent = matchWinner;

    if (matchWinner.includes("You win")) {
        userScore++;
    } else if (matchWinner.includes("Computer wins")) {
        computerScore++;
    }

    updateScores();

    if (userScore === 3 || computerScore === 3) {
        gameInProgress = false;
        const gameWinner = userScore === 3 ? 
            "Congratulations! You won the game! Refresh the page to play again.": 
            "Game Over! Computer wins the game! Refresh the page to play again.";
        display.textContent = gameWinner;
        console.log(gameWinner);
    }
}

