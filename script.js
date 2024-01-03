/*
Player selects between rock, paper, and scissors.
Computer returns a random move. 
Console outputs who has won the game.
*/

var choices = ["rock", "paper", "scissors"];
var compChoice = "";
var answer = "";
var playerScore = 0;
var compScore = 0;


function getComputerChoice() {
    var index = Math.floor(Math.random() * choices.length);
    compChoice = choices[index];
    return compChoice;
}

function getUserChoice() {
    var selection = (prompt("Please enter your move; Rock, Paper, or Scissor: "));
    answer = selection.toLowerCase();
    return answer;
}

function singleGame(playerSelection, compSelection) {
    var compSelection = getComputerChoice();
    var playerSelection = getUserChoice();

    console.log("Your move is " + playerSelection);
    console.log("The computer chooses " + compSelection);

    if (playerSelection === compSelection) {
        console.log("It's a tie!");
    } 
    else if (
        (playerSelection === "rock" && compSelection === "scissors") ||
        (playerSelection === "paper" && compSelection === "rock") ||
        (playerSelection === "scissors" && compSelection === "paper")
    ) {
        console.log("You Win! " + playerSelection + " beats " + compSelection);
        playerScore++;
    } 
    else {
        console.log("You Lose! " + compSelection + " beats " + playerSelection);
        compScore++;
    }
}

function game() {
    for (var i = 0; i < 5; i++) {
        singleGame();
    }

    if (playerScore > compScore) {
        console.log("You win the best of 5!");
    }
    else {
        console.log("You lose the best of 5 :(");
    }
}

game();

