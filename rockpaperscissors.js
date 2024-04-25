console.log("Hello World")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
 let computerChoice = Math.floor(Math.random() * 3);

if (computerChoice===0){
console.log("Computer selected Rock.")
} else if (computerChoice===1){
    console.log("Computer selected Paper.")
} else {
    console.log("Computer selected Scissors.")
}
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
function playRound(humanChoice, computerChoice){
    //write code

    if (humanChoice === "rock" && computerChoice === 0){
        console.log("You lose! Paper beats rock.")
    } else if (humanChoice === "paper" && computerChoice=== 1){
        console.log("You lose! Scissors beats paper.")
    } else if (humanChoice=== "scissors" && computerChoice === 2){
        console.log("You lose! Rock beats scissors.")
    } else if (humanChoice === "paper" && computerChoice === 2){ 
        console.log("You win! Paper beats rock.")
    } else if (humanChoice === "scissors" && computerChoice === 1){
        console.log("You win! Scissors beats paper.")
    } else if (humanChoice === "rock" && computerChoice === 0){
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

