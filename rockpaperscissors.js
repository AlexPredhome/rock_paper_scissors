console.log("Hello World")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
 let randomNumber = Math.floor(Math.random() * 3);

 switch(randomNumber) {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors";
}
}

let computerChoice = getComputerChoice();
console.log("Computer chose", computerChoice);

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
    //write code

    if (human === computer){
        console.log("Tie!")
    } else if (human === "rock" && computer === "paper"){
        console.log("You lose! Paper beats rock.")
    } else if (human === "paper" && computer=== "scissors"){
        console.log("You lose! Scissors beats paper.")
    } else if (human=== "scissors" && computer === "rock"){
        console.log("You lose! Rock beats scissors.")
    } else if (human === "paper" && computer === "rock"){ 
        console.log("You win! Paper beats rock.")
    } else if (human === "scissors" && computer === "paper"){
        console.log("You win! Scissors beats paper.")
    } else if (human === "rock" && computer === "scissors"){
        console.log("You win! Rock beats scissors.")
    } else {
        console.log("hmm... are you sure you entered that right?")
    }

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

//Define human selection and computer selection
//Define how someone wins

//set a console.log to print who wins

//track incremental humanScore or computerScore based on round winner

