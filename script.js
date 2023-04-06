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


rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const chooseRock = document.createElement('p');
    chooseRock.textContent = `You picked ${choice[0]}, Computer picked ${computerSelection}, ${playRound(choice[0], computerSelection)}`;

    result.appendChild(chooseRock);
})

paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const choosePaper = document.createElement('p');
    choosePaper.textContent = `You picked ${choice[1]}, Computer picked ${computerSelection}, ${playRound(choice[1], computerSelection)}`;

    result.appendChild(choosePaper);
})

scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const chooseScissors = document.createElement('p');
    chooseScissors.textContent = `You picked ${choice[2]}, Computer picked ${computerSelection}, ${playRound(choice[2], computerSelection)}`;

    result.appendChild(chooseScissors);
})