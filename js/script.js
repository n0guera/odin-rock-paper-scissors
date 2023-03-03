let playerScore = 0;
let computerScore = 0;

const outputBox = document.querySelector('#game-output');
outputBox.style.cssText = "border: 2px blue solid; width: 150px; height: 150px; margin; 16px;";

const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', playRoundRock);

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', playRoundPaper);

const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', playRoundScissors);

const roundOutput = document.createElement('p');
outputBox.appendChild(roundOutput);

const computerScoreOutput = document.createElement('p');
outputBox.appendChild(computerScoreOutput);

const playerScoreOutput = document.createElement('p');
outputBox.appendChild(playerScoreOutput);

function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRoundRock() {
    let round = playRound('rock', getComputerChoice());
    roundOutput.textContent = round;
    countScore(round);
    outputScores();
}
function playRoundPaper() {
    let round = playRound('paper', getComputerChoice());
    roundOutput.textContent = round;
    countScore(round);
    outputScores();
}
function playRoundScissors() {
    let round = playRound('scissors', getComputerChoice());
    roundOutput.textContent = round;
    countScore(round);
    outputScores();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'Rock') {
        return "It's a tie";
    } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        return 'You Lose! Paper beats rock';
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return 'You Win! Rock beats scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return 'You Win! Paper beats rock';
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        return "It's a tie";
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return 'You Lose! Scissors beats paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return 'You Lose! Rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return 'You Win! Scissors beats paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        return "It's a tie";
    }
}

function countScore(round) {
    if (round === 'You Lose! Paper beats rock' || round === 'You Lose! Scissors beats paper' || round === 'You Lose! Rock beats scissors') {
        computerScore++;
    } else if (round === 'You Win! Rock beats scissors' || round === 'You Win! Paper beats rock' || round === 'You Win! Scissors beats paper') {
        playerScore++;
    }
    if (playerScore === 5) {
        rockBtn.removeEventListener('click', playRoundRock);
        paperBtn.removeEventListener('click', playRoundPaper);
        scissorsBtn.removeEventListener('click', playRoundScissors);
        return outputBox.textContent = 'Player wins!!!';
    } else if (computerScore === 5) {
        rockBtn.removeEventListener('click', playRoundRock);
        paperBtn.removeEventListener('click', playRoundPaper);
        scissorsBtn.removeEventListener('click', playRoundScissors);
        return outputBox.textContent = 'Computer wins!!!';
    }
}

function outputScores() {
    computerScoreOutput.textContent = `Computer score is ${computerScore}`;
    playerScoreOutput.textContent = `Player score is ${playerScore}`;
}