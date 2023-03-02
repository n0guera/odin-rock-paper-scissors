const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', playRoundRock);

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', playRoundPaper);

const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', playRoundScissors);

function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRoundRock() {
    console.log(playRound('rock', getComputerChoice()));
}
function playRoundPaper() {
    console.log(playRound('paper', getComputerChoice()));
}
function playRoundScissors() {
    console.log(playRound('scissors', getComputerChoice()));
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