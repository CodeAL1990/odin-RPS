function getComputerChoice() {
    //user2 picks *randomly from option rock, paper and scissors
    //initialize possible choices for computer
    const choice = ["rock", "paper", "scissors"];

    //Pick a choice randomly
    const chosen = Math.floor(Math.random() * choice.length);
    //console.log(chosen);
    //Returned a number and was wondering how to return an array item
    //Google search skill failed and asked chatGPT how to return an array item
    return choice[chosen];
}


function playRound(playerSelection, computerSelection) {
        //if user1 and user2 picks the same option, it's a draw
        //if user1 picks rock and user 2 picks paper and vice versa, paper wins
        //if user1 picks paper and user 2 picks scissors and vice versa, scissors wins
        //if user1 picks scissors and user 2 picks rock and vice versa, rock wins
        if (playerSelection === computerSelection) {
            return "It's a draw!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            return "Paper beats rock, you lose!";
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            return "Rock beats scissors, you win!";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            return "Paper beats rock, you win!";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            return "Scissors beats paper, you lose!";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            return "Rock beats scissors, you lose!";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "Scissors beats paper, you win!";
        } else {
            return "Please type rock, paper or scissors!";
        }
    
    }

//user1 picks an option from rock, paper and scissors
//initialize player input
const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);
console.log(result);

//Initialize variable for player in global scope
//if put inside the game() function it will reset to 0 everytime it's called
let playerWins = 0;
let computerWins = 0;

function game() {

    //Best of 5
    //If player wins, add 1 to playerWins variable
    if (result.includes("win")) {
        playerWins++;
    } else if (result.includes("lose")) {
        computerWins++;
    }

    if (playerWins === 3) {
        return "You win this bo5!";
    } else if (computerWins === 3) {
        return "You lose this bo5!";
    }

}

console.log(game());
console.log(game());
console.log(game());
console.log(game());
console.log(game());
