function game() {
  let winCounter = 0;

  for(let i = 1; i <= 5; i++) {
    winCounter += playRound(playerPlay(),computerPlay());
  }

  if (winCounter === 0) {
    return "The games resulted in a tie!";
  } else if (winCounter > 0) {
    return "The player wins!";
  } else {
    return "The computer wins :("
  }
}

function computerPlay() {
  let selection;

  switch(getRandomInteger(3)) {
    case 0:
      selection = "Rock";
      break;
    case 1:
      selection = "Paper";
      break;
    case 2:
      selection = "Scissors";
      break;
    default:
      selection = "Invalid Selection";
      break;
  }
  
  return selection;
}

function playerPlay() {
  let playerSelection = prompt("Welcome to Rock, Paper, Scissors. Please type your choice:");
  return playerSelection;
}

function getRandomInteger(maximumNumber) {
  return Math.floor(Math.random() * maximumNumber);
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toUpperCase();
  const computerChoice = computerSelection.toUpperCase();
  let roundDetails = `Player plays ${playerChoice}. Computer plays ${computerChoice}.`;
  let roundResults = ``;
  let winVal = 0;

  if (playerChoice === computerChoice) {
    roundResults = `The round is a tie!`;
  } else if (playerChoice === 'ROCK' && computerChoice === 'PAPER') {
    roundResults = `PAPER covers ROCK. Computer wins!`;
    winVal = -1;
  } else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {
    roundResults = `ROCK smashes SCISSORS. Player wins!`;
    winVal = 1;
  } else if (playerChoice === 'PAPER' && computerChoice === 'SCISSORS') {
    roundResults = `SCISSORS cut PAPER. Computer wins!`;
    winVal = -1;
  } else if (playerChoice === 'PAPER' && computerChoice === 'ROCK') {
    roundResults = `PAPER covers ROCK. Player wins!`;
    winVal = 1;
  } else if (playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {
    roundResults = `ROCK smashes SCISSORS. Computer wins!`;
    winVal = -1;
  } else if (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') {
    roundResults = `SCISSORS cut PAPER. Player wins!`;
    winVal = 1;
  } else {
    roundResults = "HMM this shouldn't be possible";
  }

  console.log(`${roundDetails} ${roundResults}`);
  return winVal;
}

console.log(game());