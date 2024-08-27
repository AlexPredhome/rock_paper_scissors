// Variables to track game state
        let playerScore = 0;
        let computerScore = 0;
        let roundsPlayed = 0;

        // Function to handle the button clicks and play the game
        function playGame(playerChoice) {
            const choices = ["Rock", "Paper", "Scissors"];
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            let resultMessage;

            // Determine the winner
            if (playerChoice === computerChoice) {
                resultMessage = "It's a tie! You both chose " + playerChoice + ".";
            } else if (
                (playerChoice === "Rock" && computerChoice === "Scissors") ||
                (playerChoice === "Paper" && computerChoice === "Rock") ||
                (playerChoice === "Scissors" && computerChoice === "Paper")
            ) {
                resultMessage = "You win! " + playerChoice + " beats " + computerChoice + ".";
                playerScore++;
            } else {
                resultMessage = "You lose! " + computerChoice + " beats " + playerChoice + ".";
                computerScore++;
            }

            roundsPlayed++;
            document.getElementById("result").textContent = resultMessage;
            document.getElementById("score").textContent = "Round " + roundsPlayed + ".  Score - You: " + playerScore + ", Computer " + computerScore + ".";

            // Check if 5 rounds have been played
            if (roundsPlayed === 5) {
                let finalResult;
                if (playerScore > computerScore) {
                    finalResult = "You won the game!";
                } else if (playerScore < computerScore) {
                    finalResult = "You lost the game!";
                } else {
                    finalResult = "The game is a tie!";
                }
                alert(finalResult);

                // Reset the game
                playerScore = 0;
                computerScore = 0;
                roundsPlayed = 0;
                document.getElementById("result").textContent = "";
                document.getElementById("score").textContent = "";
            }
        }

        // Get all buttons with the class "rpsButton"
        const buttons = document.querySelectorAll(".rpsButton");

        // Add an event listener to each button
        buttons.forEach(function(button) {
            button.addEventListener("click", function() {
                // Play the game with the player's choice
                playGame(button.value);
            });
        });