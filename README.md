# rock

Things I learned from this project: 
  The options array holds the available choices: "rock", "paper", and "scissors".
  The getComputerChoice() function selects a random choice from the options array using Math.random() and Math.floor().
  The checkWinner(playerSelection, computerSelection) function determines the winner based on the player's choice and the computer's choice. It uses if and else-if statements to check for different winning combinations and returns the result as "Tie", "Player", or "Computer".
  The playRound(playerSelection, computerSelection) function calls checkWinner() to determine the result of a round. It returns a string indicating whether the player wins, loses, or if it's a tie.
  The getPlayerChoice() function prompts the user to enter their choice (rock, paper, or scissors) using prompt(). It validates the input and converts it to lowercase before returning it.
    So, even entering for example, "rOCk" will work.
  The game() function runs the game. It keeps track of the player and computer scores, plays five rounds of the game, and displays the result of each round. At the end of the game, it determines the overall winner based on the scores.
  Finally, the game() function is called to start the game when the JavaScript file is executed.
    Organization is key. Semicolons and curly brackets are super important to remember when writing code.
