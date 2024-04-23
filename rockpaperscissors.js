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

