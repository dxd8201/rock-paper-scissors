console.log("hello");



function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1)

    if (choice === 1) {
        choice = "Rock";
    } else if (choice === 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    
    return choice.toUpperCase();
}

function playRound(playerSelection, computerSelection) {

    let statement = ""

    if (playerSelection === "rock".toUpperCase() && computerSelection === "scissors".toUpperCase()) {
        statement =  "You win! Rock crushes scissors!";
    } else if (playerSelection === "rock".toUpperCase() && computerSelection === "paper".toUpperCase()) {
        statement = "You lose! Rock gets covered paper!";
    } else if (playerSelection === "paper".toUpperCase() && computerSelection === "scissors".toUpperCase()) {
        statement = "You lose! Paper gets cut by scissors!";
    } else if (playerSelection === "paper".toUpperCase() && computerSelection === "rock".toUpperCase()) {
        statement = "You win! Paper covers rock!"
    } else if (playerSelection === "scissors".toUpperCase() && computerSelection === "rock".toUpperCase()) {
        statement = "You lose! Scissors get crushed by rock!"
    } else if (playerSelection === "scissors".toUpperCase() && computerSelection === "paper".toUpperCase()) {
        statement = "You win! Scissors cut paper!"
    } else {
        statement = "It's a tie!";
    }

    console.log(computerSelection);
    return statement;
}



function game() {

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Please choose Rock, Paper, or Scissors.", "").toUpperCase();
        console.log(playerChoice);
        
        console.log(playRound(playerChoice, getComputerChoice()));
    }
    
}

game();


