// Wizard === Wizard
// Archer === Archer
// Warrior === Warrior

let playerScore = 0;
let computerScore = 0;
let playerSelection = "";

//Returns a NodeList
let btn = document.querySelectorAll('button');
let pScore = document.getElementById('pScore');
let pChoice = document.getElementById('pChoice');
let cScore = document.getElementById('cScore');
let cChoice = document.getElementById('cChoice');
let statement = document.getElementById('statement');


pChoice.textContent = "Weapon: N/A"
cChoice.textContent = "Weapon: N/A"
pScore.textContent = playerScore;
cScore.textContent = computerScore;
statement.textContent = "Choose your weapon by clicking an image!";

//Because btn returns a nodelist, use forEach to cycle through each list item for an event listener.

btn.forEach(function (e) {
        //Plays a round for each click of a button 
        e.addEventListener('click', (e) => {
            if (playerScore === 5 || computerScore === 5) {
                return results();
            } else {
                playerSelection = e.target.id;
                playRound(playerSelection, getComputerChoice());
                pScore.textContent = playerScore;
                cScore.textContent = computerScore;

                if (playerScore === 5 || computerScore === 5) {
                    results();
                    return 
                }
            }            
        });
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1)

    if (choice === 1) {
        choice = "Wizard";
    } else if (choice === 2) {
        choice = "Archer";
    } else {
        choice = "Warrior";
    }
    
    return choice.toUpperCase();
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "wizard".toUpperCase() && computerSelection === "Warrior".toUpperCase()) {
        statement.textContent =  "You win! Wizard defeats Warrior in a barrage of magic!";
        playerScore++;
    } else if (playerSelection === "wizard".toUpperCase() && computerSelection === "Archer".toUpperCase()) {
        statement.textContent = "You lose! Wizard gets bombarded by Archer!";
        computerScore++;
    } else if (playerSelection === "Archer".toUpperCase() && computerSelection === "Warrior".toUpperCase()) {
        statement.textContent = "You lose! Archer gets pummeled by Warrior!";
        computerScore++
    } else if (playerSelection === "Archer".toUpperCase() && computerSelection === "wizard".toUpperCase()) {
        statement.textContent = "You win! Archer defeats Wizard in a hail of arrows!";
        playerScore++;
    } else if (playerSelection === "Warrior".toUpperCase() && computerSelection === "wizard".toUpperCase()) {
        statement.textContent = "You lose! Warrior gets arcane crushed by Wizard!";
        computerScore++
    } else if (playerSelection === "Warrior".toUpperCase() && computerSelection === "Archer".toUpperCase()) {
        statement.textContent = "You win! Warrior batters the Archer!";
        playerScore++
    } else {
        statement.textContent = "It's a tie!";
    }

    pChoice.textContent = "Weapon: " + playerSelection;
    cChoice.textContent = "Weapon: " + computerSelection;
    console.log(playerSelection);
    console.log(computerSelection);
    return statement;
}

function results() {
    if (playerScore === 5) {
        return statement.textContent = `You scored ${playerScore} points. You won! Congrats champ! Refresh to play again.`;
    } else {
        return statement.textContent = `You scored ${playerScore} points. You lost. Refresh to play agian.`;
    }
}
