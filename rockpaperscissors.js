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

function getHumanChoice(choice){
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice;
}


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
let humanSelection = getHumanChoice;
let computerSelection= getComputerChoice;
//Define how someone wins
//set a console.log to print who wins
if (humanSelection ==="rock" && computerSelection==="paper"){
    console.log("You lose! Paper beats rock.")
} else if (humanSelection ==="paper" && computerSelection==="scissors"){
    console.log("You lose! Scissors beats paper.")
} else if (humanSelection ==="scissors" && computerSelection==="rock"){
    console.log("You lose! Rock beats scissors.")
} else if (humanSelection ==="paper" && computerSelection==="rock"){ 
    console.log("You win! Paper beats rock.")
} else if (humanSelection ==="scissors" && computerSelection==="paper"){
    console.log("You win! Scissors beats paper.")
} else if (humanSelection ==="rock" && computerSelection==="scissors"){
    console.log("You win! Rock beats scissors.")
} else {
    console.log("hmm... are you sure you entered that right?")
}
//track incremental humanScore or computerScore based on round winner