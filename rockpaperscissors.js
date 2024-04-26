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
    if (human === computer){
        return "Tie!";
    } else if (human === "rock" && computer === "paper"){
        return "You lose! Paper beats rock.";
    } else if (human === "paper" && computer === "scissors"){
        return "You lose! Scissors beats paper.";
    } else if (human === "scissors" && computer === "rock"){
        return "You lose! Rock beats scissors.";
    } else if (human === "paper" && computer === "rock"){ 
        return "You win! Paper beats rock.";
    } else if (human === "scissors" && computer === "paper"){
        return "You win! Scissors beats paper.";
    } else if (human === "rock" && computer === "scissors"){
        return "You win! Rock beats scissors.";
    } else {
        return "Hmm... are you sure you entered that right?";
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

let result = playRound();
console.log(result);
//Define human selection and computer selection
//Define how someone wins

//set a console.log to print who wins

//track incremental humanScore or computerScore based on round winner