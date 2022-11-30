// Random between two numbers
// This function pretty much works like Random.Next() from C#, exept maxvalue is 
// inclusive
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
    let outCome;
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            outCome = "Rock vs rock. It's a tie!";
        } else if (computerSelection == "paper") {
            outCome = "Rock loses to paper (somehow). You lose!";
        } else {
            outCome = "Rock beats scissors. You win!";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            outCome = "Paper beats rock (somehow). You win!";
        } else if (computerSelection == "paper") {
            outCome = "Paper vs paper. It's a tie!";
        } else {
            outCome = "Paper loses to scissors. You lose!";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            outCome = "Scissors loses to rock. You lose!";
        } else if (computerSelection == "paper") {
            outCome = "Scissors beats paper. You win!";
        } else {
            outCome = "Scissors vs scissors. It's a tie!";
        }
    } else {
        outCome = playerSelection + " is not a valid choice. You can use rock, paper or scissors.";
    }
    
    return outCome;
}

// Five rounds of RPS
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

game();