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




let getHumanChoice = prompt("Rock, Paper, or Scissors?");

if (getHumanChoice.toLowerCase() === "rock"){
    console.log("You have selected rock.")
} else if (getHumanChoice.toLowerCase() === "scissors"){
    console.log("You have selected scissors.")
} else if (getHumanChoice.toLowerCase() === "paper"){
    console.log("You have selected paper.")
} else {
    console.log("Hmm...that wasn't one of the options.")
}


//Create function called playRound
//Set function to take in human choice and computer choice
function playRound(humanChoice, computerChoice){
    //write code



    if (humanChoice ==="rock" && computerChoice==="paper"){
        console.log("You lose! Paper beats rock.")
    } else if (humanChoice ==="paper" && ccomputerChoice==="scissors"){
        console.log("You lose! Scissors beats paper.")
    } else if (humanChoice ==="scissors" && ccomputerChoice==="rock"){
        console.log("You lose! Rock beats scissors.")
    } else if (humanChoice ==="paper" && computerChoice==="rock"){ 
        console.log("You win! Paper beats rock.")
    } else if (humanChoice ==="scissors" && computerChoice==="paper"){
        console.log("You win! Scissors beats paper.")
    } else if (humanChoice ==="rock" && ccomputerChoice==="scissors"){
        console.log("You win! Rock beats scissors.")
    } else {
        console.log("hmm... are you sure you entered that right?")
    }

}

//Define human selection and computer selection
let humanSelection = getHumanChoice;
let computerSelection= getComputerChoice;
//Define how someone wins

//set a console.log to print who wins

//track incremental humanScore or computerScore based on round winner

