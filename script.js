 function playerChoice() {
     let selection = prompt('Rock, Paper, Scissors!');
     return selection;
 }

function getComputerChoice() {
    const game = ['Rock', 'Paper', 'Scissors'];
    const random = game[Math.floor(Math.random() * game.length)];
    return random;
}

const computerSelection = getComputerChoice();
const playerSelection = playerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Rock') {
        return "It's a tie"
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
        return 'You Lose! Paper beats rock'
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
        return 'You Win! Rock beats scissors'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
        return 'You Win! Paper beats rock'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Paper') {
        return "It's a tie"
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
        return 'You Lose! Scissors beats paper'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
        return 'You Lose! Rock beats scissors'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
        return 'You Win! Scissors beats paper'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Scissors') {
        return "It's a tie"
    }
}

console.log(playRound(playerSelection, computerSelection));