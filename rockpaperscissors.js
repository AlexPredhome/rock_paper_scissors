console.log("Hello World")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
 return Math.floor(Math.random() * 3);
}

if (getComputerChoice()===0){
console.log("Computer selected Rock")
} else if (getComputerChoice()===1){
    console.log("Computer selected Paper")
} else {
    console.log("Computer selected Scissors")
}

getComputerChoice();


function getHumanChoice(){

let humanChoice = prompt("Rock, Paper, or Scissors?");

if (humanChoice.toLowerCase() === "rock"){
    console.log("You have selected rock.")
} else if (humanChoice.toLowerCase() === "scissors"){
    console.log("You have selected scissors.")
} else if (humanChoice.toLowerCase() === "paper"){
    console.log("You have selected paper.")
} else {
    console.log("Hmm...that wasn't one of the options.")
}
}

getHumanChoice();

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//Create function called playRound
//Set function to take in human choice and computer choice
function playRound(humanSelection, computerSelection){
    //write code

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

}
playRound(getHumanChoice(), getComputerChoice());

//Define human selection and computer selection
let humanSelection = getHumanChoice;
let computerSelection= getComputerChoice;
//Define how someone wins

//set a console.log to print who wins

//track incremental humanScore or computerScore based on round winner

