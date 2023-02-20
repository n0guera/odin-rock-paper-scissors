function playerSelection() {
    let selection = prompt('Rock, Paper, Scissors!');
    selection;
}
playerSelection();

function getComputerChoice() {
    const game = ['Rock', 'Paper', 'Scissors'];
    const random = game[Math.floor(Math.random() * game.length)];
    return random;
}