//user2 picks *randomly from option rock, paper and scissors
//initialize possible choices for computer and player
const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {

    //Pick a choice randomly
    const chosen = Math.floor(Math.random() * choice.length);
    //console.log(chosen);
    //Returned a number and was wondering how to return an array item
    //Google search skill failed and asked chatGPT how to return an array item
    return choice[chosen];
}


function playRound(playerSelection, computerSelection) {
    
        if (playerSelection === "rock" && computerSelection === "paper") {
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
            return "It's a draw!";
        }

    }


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
const scoreDisplay = document.querySelector('#scoreDisplay');
const newGame = document.querySelector('#newGame');

newGame.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    result.textContent = "";
    scoreDisplay.textContent = `Current score - Player: ${playerScore} Computer: ${computerScore}`
    rock.hidden = false;
    paper.hidden = false;
    scissors.hidden = false;
    
})

rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const roundResult = playRound(choice[0], computerSelection);
    const chooseRock = document.createElement('p');
    chooseRock.textContent = `You picked ${choice[0]}, Computer picked ${computerSelection}, ${roundResult}`;

    result.appendChild(chooseRock);
    totalScore(roundResult);
})

paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const roundResult = playRound(choice[1], computerSelection);
    const choosePaper = document.createElement('p');
    choosePaper.textContent = `You picked ${choice[1]}, Computer picked ${computerSelection}, ${roundResult}`;

    result.appendChild(choosePaper);
    totalScore(roundResult);
})

scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const roundResult = playRound(choice[2], computerSelection)
    const chooseScissors = document.createElement('p');
    chooseScissors.textContent = `You picked ${choice[2]}, Computer picked ${computerSelection}, ${roundResult}`;

    result.appendChild(chooseScissors);
    totalScore(roundResult);
})

let playerScore = 0;
let computerScore = 0;

function totalScore(result) {

    if (result.includes("win")) {
        if (playerScore < 5 && computerScore < 5) {
            playerScore++;
        }
    } else if (result.includes("lose")) {
        if (computerScore < 5 && playerScore < 5) {
            computerScore++;
        }
    }

    if (playerScore === 5) {
        scoreDisplay.textContent = `Current score - Player: ${playerScore} Computer: ${computerScore}`;
        const gameResult = document.createElement('p');
        gameResult.textContent = "  Player wins! Click New Game to play again!";
        scoreDisplay.appendChild(gameResult);
        rock.hidden = true;
        paper.hidden = true;
        scissors.hidden = true;
    } else if (computerScore === 5) {
        scoreDisplay.textContent = `Current score - Player: ${playerScore} Computer: ${computerScore}`;
        const gameResult = document.createElement('p');
        gameResult.textContent = "  Computer wins! Click New Game to play again!";
        scoreDisplay.appendChild(gameResult);
        rock.hidden = true;
        paper.hidden = true;
        scissors.hidden = true;
    } else {
        scoreDisplay.textContent = `Current score - Player: ${playerScore} Computer: ${computerScore}`;
    }
    
}


