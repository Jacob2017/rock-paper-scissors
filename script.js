const choices = ["Rock","Paper","Scissors"];

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  return choices[num];
}

function capitalise(text) {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalise(playerSelection);
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player == computer) {
    return "Draw";
  } else if ((player == "rock" && computer == "scissors") || (player == "paper" && computer=="rock") || (player=="scissors" && computer=="paper")) {
    return "You win! " + playerSelection + " beats " + computerSelection + "!"
  } else {
    return "You lose! " + computerSelection + " beats " + playerSelection + "!";
  }
}

function game() {
  console.log("Welcome to RPS!");
  let playerInput, computerInput, result, score;
  score = [0,0];

  for (let i = 0; i < 5; i++) {
    let playerInput = prompt("Rock, Paper, Scissors?");
    let computerInput = getComputerChoice();
    let result = playRound(playerInput,computerInput);

    console.log(result)
    if (result.charAt(0) == "D") {
    } else if (result.split(" ")[1].charAt(0) == "w") {
      score[0] += 1;
    } else {
      score[1] += 1;
    }
    console.log("Score is " + score[0] + " - " + score[1]);
  }
  
  if (score[0] == score[1]) {
    console.log("You DREW! " + score[0] + " all!")
  } else if (score[0] > score[1]) {
    console.log("You WON! " + score[0] + " - " + score[1]);
  } else {
    console.log("You LOST! " + score[1] + " - " + score[0]);
  }
}



// console.log(playRound("ROCK",getComputerChoice()));
// console.log(capitalise("ASDLJASLDJ"))

game()