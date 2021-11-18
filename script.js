let playerWins = 0;
let computerWins = 0;

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

function getRandomInteger(maximumNumber) {
  return Math.floor(Math.random() * maximumNumber);
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toUpperCase();
  const computerChoice = computerSelection.toUpperCase();
  let roundDetails = `Player plays ${playerChoice}. Computer plays ${computerChoice}.`;
  let roundResults = ``;
  let winner = ''

  if (playerChoice === computerChoice) {
    roundResults = `The round is a tie!`;
  } else if (playerChoice === 'ROCK' && computerChoice === 'PAPER') {
    roundResults = `PAPER covers ROCK. Computer wins!`;
    winner = 'Computer';
  } else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {
    roundResults = `ROCK smashes SCISSORS. Player wins!`;
    winner = 'Player';
  } else if (playerChoice === 'PAPER' && computerChoice === 'SCISSORS') {
    roundResults = `SCISSORS cut PAPER. Computer wins!`;
    winner = 'Computer';
  } else if (playerChoice === 'PAPER' && computerChoice === 'ROCK') {
    roundResults = `PAPER covers ROCK. Player wins!`;
    winner = 'Player';
  } else if (playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {
    roundResults = `ROCK smashes SCISSORS. Computer wins!`;
    winner = 'Computer';
  } else if (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') {
    roundResults = `SCISSORS cut PAPER. Player wins!`;
    winner = 'Player';
  } else {
    roundResults = "HMM this shouldn't be possible";
  }

  displayResults(`${roundDetails} ${roundResults}`);
  updateScore(winner);
}

function displayResults(roundDetails) {
  const results = document.querySelector('#results');
  results.textContent = `${roundDetails}`;
}

function updateScore(roundWinner) {
  const playerScore = document.querySelector('#player-score');
  const computerScore = document.querySelector('#computer-score');

  if(roundWinner === "Player") {
    playerWins += 1;
    playerScore.textContent = playerWins;
  } else if (roundWinner === "Computer") {
    computerWins += 1;
    computerScore.textContent = computerWins;
  } else {
    return;
  }

  if (playerWins === 5 || computerWins === 5) {
    announceWinner();
  }
}

function announceWinner() {
  document.querySelectorAll('.btn-selection').forEach(element => {
    element.disabled = true;
  });  
  const announcement = document.querySelector('#announcement');
  announcement.textContent = playerWins === 5 ? "Player wins! First to five!" : "Computer Wins! First to five!";
}