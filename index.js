//created array of choices available
const options = ["rock", "paper", "scissors"];

//get random choice from computer. We use math random to get a random choice. options length refers to the elements in the `options` array. length that returns the number of elements in the array. So, options.length will give you the total number of choices available in the options array (which is 3 elements here).

//Multiplying Math.random() by options.length makes sure the random choice is within the valid choices in the array. Math.floor rounds the number to the nearest integer (so no decimals)

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

//check if tie, or is there a winner? check using if and else if statements and return result
function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player";
  }
  else {
    return "Computer";
  }
}

//created a function to play a round. 
function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result === "Tie") {
    return "It's a tie!";
  } else if (result === "Player") {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Rock Paper Scissors");
    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

//using a loop
function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log("Welcome!");
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result === "You win!") {
      scorePlayer++;
    } else if (result === "You lose!") {
      scoreComputer++;
    }
  }

  console.log("Game Over");
  if (scorePlayer > scoreComputer) {
    console.log("Player wins!");
  } else if (scorePlayer < scoreComputer) {
    console.log("Computer was the winner.");
  } else {
    console.log("We have a tie!");
  }
}

game(); 
