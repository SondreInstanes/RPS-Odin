const buttons = document.querySelector('#buttons');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const outcome = document.querySelector('.outcome');
const score = document.querySelector('.score');

// bool to disable playRound when either player reaches 5 points
let enabled = true;

let playerScore = 0;
let computerScore = 0;

score.innerText = `\n-SCORE-\n Player: ${playerScore}\n Computer: ${computerScore}`;

function updateScore() {
    score.innerText = `\n-SCORE-\n Player: ${playerScore}\n Computer: ${computerScore}`;
}

// Random between two numbers
// This function pretty much works like Random.Next() from C#, exept maxvalue is inclusive
// For RPS the formula is: random number * 3, rounded down to nearest INT
function getRandom(min, max)
{
    return Math.floor(Math.random() * (max - min +1) + min);
}

// Get computer choice by generating number and
// assigning said number to a choice
function getComputerChoice() {
    let result;
    let selection = getRandom(0,2);

    if (selection == 0) {
        result = "rock";
    } else if (selection == 1) {
        result = "paper";
    } else {
        result = "scissors";
    }

    return result;
}

// Play a round by comparing playerselection to computerselection
function playRound(playerSelection, computerSelection) {
    if (!enabled) return;
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            const p = document.createElement('p');
            p.innerText = "Rock vs rock. It's a tie!";
            outcome.appendChild(p);
        } else if (computerSelection == "paper") {
            const p = document.createElement('p');
            p.innerText = "Rock loses to paper (somehow). You lose!";
            computerScore++;
            updateScore();
            outcome.appendChild(p);
        } else {
            const p = document.createElement('p');
            p.innerText = "Rock beats scissors. You win!";
            playerScore++;
            updateScore();
            outcome.appendChild(p);
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            const p = document.createElement('p');
            p.innerText = "Paper beats rock (somehow). You win!";
            playerScore++;
            updateScore();
            outcome.appendChild(p);
        } else if (computerSelection == "paper") {
            const p = document.createElement('p');
            p.innerText = "Paper vs paper. It's a tie!";
            outcome.appendChild(p);
        } else {
            const p = document.createElement('p');
            p.innerText = "Paper loses to scissors. You lose!";
            computerScore++;
            updateScore();
            outcome.appendChild(p);
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            const p = document.createElement('p');
            p.innerText = "Scissors loses to rock. You lose!";
            computerScore++;
            updateScore();
            outcome.appendChild(p);
        } else if (computerSelection == "paper") {
            const p = document.createElement('p');
            p.innerText = "Scissors beats paper. You win!";
            playerScore++;
            updateScore();
            outcome.appendChild(p);
        } else {
            const p = document.createElement('p');
            p.innerText = "Scissors vs scissors. It's a tie!";
            outcome.appendChild(p);
        }
    } 

    if(playerScore === 5) {
        const p = document.createElement('p');
        p.innerText = "You got five points! You win!\n Refresh to retry";
        p.setAttribute('style', 'background: green;');
        outcome.appendChild(p);
        enabled = false;

    } else if (computerScore === 5) {
        const p = document.createElement('p');
        p.innerText = "The computer got five points! You Lose!\n Refresh to retry";
        p.setAttribute('style', 'background: red;');
        outcome.appendChild(p);
        enabled = false;
    }
}

// Rock
rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
});

// Paper
paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
});

// Scissors
scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
});





// Five rounds of RPS for earlier console version, now useless
/*
function game()
{
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        let choose = prompt("Choose rock, paper or scissors")

        // Removes error on cancel
        if (choose == null) {
            console.log("Game canceled.");
            return;
        }

        // Get player and computer selection
        let playerSelection = choose.toLowerCase();
        const computerSelection = getComputerChoice();

        // Play a round and display playRound text
        let winner = playRound(playerSelection, computerSelection);
        console.log(winner);

        // Score changes. i-- ensures that you don't lose a try if your choice is invalid
        if (winner.includes("win")) {
            playerScore++;
        } else if (winner.includes("lose")) {
            computerScore++;
        } else if (winner.includes("valid")) {
            i--;
        }

        // Display current score
        console.log(`Current score: ${playerScore} - ${computerScore}`);
    }
    
    // Display final score and declare winner
    console.log("Final score:\nPlayer: " + playerScore + "\nComputer: " + computerScore);
    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (playerScore < computerScore) {
        console.log("You lose!")
    } else {
        console.log("It's a tie!")
    }
}
*/