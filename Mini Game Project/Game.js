let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("score");
const message_p = document.getElementById("message");

const rock_btn = document.getElementById("rock");
const paper_btn = document.getElementById("paper");
const scissors_btn = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = `Score: ${userScore}`;
    message_p.innerHTML = `${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}. You win!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = `Score: ${userScore}`;
    message_p.innerHTML = `${userChoice.toUpperCase()} loses to ${computerChoice.toUpperCase()}. You lose!`;
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = `Score: ${userScore}`;
    message_p.innerHTML = `${userChoice.toUpperCase()} equals ${computerChoice.toUpperCase()}. It's a draw!`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_btn.addEventListener('click', () => game('rock'));
    paper_btn.addEventListener('click', () => game('paper'));
    scissors_btn.addEventListener('click', () => game('scissors'));
}

main();
