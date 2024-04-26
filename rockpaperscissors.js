console.log("Hello World")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    switch(randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    console.log("Computer chose", computerChoice); // Log the computer's choice
    return computerChoice;
}

function getHumanChoice(){

let humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

if (humanChoice === "rock"){
    console.log("You have selected rock.")
} else if (humanChoice === "scissors"){
    console.log("You have selected scissors.")
} else if (humanChoice === "paper"){
    console.log("You have selected paper.")
} else {
    console.log("Hmm...that wasn't one of the options.")
}
return humanChoice;
}



//Create function called playRound
//Set function to take in human choice and computer choice
function playRound(human, computer){
if ((human === "rock" && computer === "rock") ||
        (human === "paper" && computer ==="paper") ||
        (human === "scissors" && computer === "scissors")
    ) {
        return "Tie!";
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }

}

function playRound(playerSelection, computerSelection){
if (playerSelection=computerSelection)

if (playerSelection === computerSelection) {
    result = console.log('Tie!');}

    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result = HumanScore+=1, console.log('You win! Rock beats Scissors!');}
    
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result = HumanScore+=1, console.log('You win! Scissors beats Paper!'); }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = HumanScore+=1, console.log('You win! Paper beats Rock!');}

    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result = computerScore+=1, console.log('You lose! Rock beats Scissors!'); }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result =  computerScore+=1, console.log('You lose! Scissors beats Paper!'); }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result =  computerScore+=1, console.log('You lose! Paper beats Rock!');}

    return result

    }

    console.log(playRound(playerSelection, computerSelection));



let result = playRound();
console.log(result);
//Define human selection and computer selection
//Define how someone wins

//set a console.log to print who wins

//track incremental humanScore or computerScore based on round winner