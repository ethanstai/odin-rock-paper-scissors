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

/*
function getUserChoice() {
    var selection = (prompt("Please enter your move; Rock, Paper, or Scissor: "));
    answer = selection.toLowerCase();
    return answer;
}
*/

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    singleGame('rock', getComputerChoice()); 
});

paper.addEventListener('click', () => {
    singleGame('paper', getComputerChoice()); 
});

scissors.addEventListener('click', () => {
    singleGame('scissors', getComputerChoice()); 
});

let gameDiv = document.querySelector('#single');
let totalDiv = document.querySelector('#total');

function singleGame(playerSelection, compSelection) {
    gameDiv.textContent = "";
    compSelection = getComputerChoice();
    //let playerSelection = getUserChoice();

    if (playerSelection === compSelection) {
        gameDiv.textContent = "It's a tie!";
    } 
    else if (
        (playerSelection === "rock" && compSelection === "scissors") ||
        (playerSelection === "paper" && compSelection === "rock") ||
        (playerSelection === "scissors" && compSelection === "paper")
    ) {
        gameDiv.textContent = "You Win! " + playerSelection + " beats " + compSelection;
        playerScore++;
    } 
    else {
        gameDiv.textContent = "You Lose! " + compSelection + " beats " + playerSelection;
        compScore++;
    }
    
    if (playerScore == 5) {
        totalDiv.textContent = `You win the best out of 5!
                                You: ${playerScore}
                                Computer: ${compScore}`;
    }
    else if (compScore == 5) {
        totalDiv.textContent = `Computer wins the best out of 5!    
                                You: ${playerScore}
                                Computer: ${compScore}`;
                                //line breaks aren't registered with textContent because it doesn't interpret 
    }
    else {
        totalDiv.textContent = "You: " + playerScore + " Computer: " + compScore;
    }
    
}



/*

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

*/
