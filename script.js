const choices = ["Rock","Paper","Scissors"];

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  return choices[num];
}

function capitalise(text) {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  // playerSelection = capitalise(playerSelection);
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

let playerInput, computerInput, result, score;

const btns = document.querySelectorAll('button');
const resDiv = document.querySelector('.result');
const compDiv = document.querySelector('.computer');
const pScore = document.querySelector('.score1');
const cScore = document.querySelector('.score2');
const welcome = document.querySelector('.welcome');

score = [0,0];

btns.forEach(addEventListener('click', (e) => {
  if (e.target.localName !== 'button' || score[0] >= 5 || score[1] >= 5) {
    return;
  }
  playerInput = e.target.textContent;
  computerInput = getComputerChoice();
  compDiv.textContent = "Computer Choice: " + computerInput;
  console.log(playerInput, computerInput)
  result = playRound(playerInput,computerInput);
  resDiv.textContent = result;

  if (result.charAt(0) == "D") {
    } else if (result.split(" ")[1].charAt(0) == "w") {
      score[0] += 1;
      pScore.textContent = "Your Score: " + score[0];
    } else {
      score[1] += 1;
      cScore.textContent = "Computer Score: " + score[1];
    }
  if (score[0] == 5) {
    welcome.textContent = "Game Over! You Win!";
  } else if (score[1] == 5) {
    welcome.textContent = "Game Over! You Lose!";
  }
  
}))

