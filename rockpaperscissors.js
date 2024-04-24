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


let humanChoice = prompt("Rock, Paper, or Scissors?");

if (humanChoice.toLowerCase() === "rock"){
    console.log("you have selected rock.")
} else if (humanChoice.toLowerCase() === "scissors"){
    console.log("you have selected scissors.")
} else if (humanChoice.toLowerCase() === "paper"){
    console.log("you have selected paper.")
} else {
    console.log("hmm...that wasn't one of the options.")
}


//Create function called playRound
//Set function to take in human choice and computer choice
//Define human selection and computer selection
//Define how someone wins
//set a console.log to print who wins
//track incremental humanScore or computerScore based on round winner