console.log("Hello World")

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