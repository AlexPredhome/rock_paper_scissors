console.log("Hello World")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
 return Math.floor(Math.random() * 3);
}

if (getComputerChoice()===0){
console.log("Rock")
} else if (getComputerChoice()===1){
    console.log("Paper")
} else {
    console.log("Scissors")
}

getComputerChoice();


// Prompt to get the human choice
// If human chooses rock, say "you have selected rock"
// If human chooses paper, say "you have selected paper"
// If human chooses scissors, say "you have selected scissors"


let getHumanChoice = prompt("Rock, Paper, or Scissors?");

if (getHumanChoice.toLowerCase() === "rock"){
    console.log("you have selected rock.")
} else if (getHumanChoice.toLowerCase() === "scissors"){
    console.log("you have selected scissors.")
} else if (getHumanChoice.toLowerCase() === "paper"){
    console.log("you have selected paper.")
} else {
    console.log("hmm...that wasn't one of the options.")
}


//Create function called playRound
//Set function to take in human choice and computer choice
function playRound(getHumanChoice, getComputerChoice){
    //write code
}

//Define human selection and computer selection
let humanSelection = getHumanChoice();
let computerSelection= getComputerChoice();
//Define how someone wins
//set a console.log to print who wins
console.log("You lose! Paper beats rock.")
console.log("You lose! Scissors beats paper.")
console.log("You lose! Rock beats scissors.")
console.log("You win! Paper beats rock.")
console.log("You win! Scissors beats paper.")
console.log("You win! Rock beats scissors.")
//track incremental humanScore or computerScore based on round winner