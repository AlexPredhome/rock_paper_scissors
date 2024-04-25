console.log("Hello World")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
 return Math.floor(Math.random() * 3);
}

if (getComputerChoice()===0){
console.log("Computer selected Rock.")
} else if (getComputerChoice()===1){
    console.log("Computer selected Paper.")
} else {
    console.log("Computer selected Scissors.")
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
}



//Create function called playRound
//Set function to take in human choice and computer choice
function playRound(humanSelection, computerSelection){
    //write code

    if (humanSelection === "You have selected rock." && computerSelection === "Computer selected Paper."){
        console.log("You lose! Paper beats rock.")
    } else if (humanSelection === "You have selected paper." && computerSelection=== "Computer selected Scissors."){
        console.log("You lose! Scissors beats paper.")
    } else if (humanSelection=== "You have selected scissors." && computerSelection === "Computer selected Rock."){
        console.log("You lose! Rock beats scissors.")
    } else if (humanSelection === "You have selected paper." && computerSelection === "Computer selected Rock."){ 
        console.log("You win! Paper beats rock.")
    } else if (humanSelection === "You have selected scissors." && computerSelection=== "Computer selected Paper."){
        console.log("You win! Scissors beats paper.")
    } else if (humanSelection === "You have selected rock." && computerSelection === "Computer selected Scissors."){
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

