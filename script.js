function game() {
    function playerChoice() {
        return prompt('Rock, Paper, Scissors!');
    }

    function getComputerChoice() {
        let choice = ['Rock', 'Paper', 'Scissors'];
        return choice[Math.floor(Math.random() * choice.length)];
    }

    let computerSelection = getComputerChoice();
    let playerSelection = playerChoice();

    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Rock') {
            return "It's a tie";
        } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper') {
            return 'You Lose! Paper beats rock';
        } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') {
            return 'You Win! Rock beats scissors';
        } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') {
            return 'You Win! Paper beats rock';
        } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Paper') {
            return "It's a tie";
        } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors') {
            return 'You Lose! Scissors beats paper';
        } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
            return 'You Lose! Rock beats scissors';
        } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') {
            return 'You Win! Scissors beats paper';
        } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Scissors') {
            return "It's a tie";
        }
    }
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let round = playRound(playerSelection, computerSelection);
        if (round === 'You Lose! Paper beats rock' || round === 'You Lose! Scissors beats paper' || round === 'You Lose! Rock beats scissors') {
            computerScore++;
        } else if (round === 'You Win! Rock beats scissors' || round === 'You Win! Paper beats rock' || round === 'You Win! Scissors beats paper') {
            playerScore++;
        }
        i++;
    }
    console.log(`Computer score is ${computerScore}`);
    console.log(`Player score is ${playerScore}`);
    if (computerScore > playerScore) {
        return 'Computer wins!'
    } else if (computerScore < playerScore) {
        return 'You win!'
    }
}