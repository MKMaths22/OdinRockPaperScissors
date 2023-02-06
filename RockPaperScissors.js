function getComputerChoice() {
    let choiceNum = Math.floor((Math.random())*3);
    //choiceNum equals 0,1,2 with equal probability 
    return((choiceNum === 0) ? "Rock" : ((choiceNum === 1) ? "Paper" : "Scissors"));
    //so if choiceNum is 0 computer chooses Rock, otherwise if 1 it's Paper, otherwise Scissors
}

function getPlayerChoice() {
    let rawChoice = prompt("Choose Rock, Paper or Scissors!").toLowerCase();
    //rawChoice must be "rock", "paper", or "scissors" for valid gameplay. Input not case-sensitive.
    if (rawChoice === "rock") return "Rock";
    else if (rawChoice === "scissors") return "Scissors";
    else if (rawChoice === "paper") return "Paper";
    //input converted to a standard state of first letter only being capitalised
    else alert("That wasn't acceptable. Please type \"Rock\", \"Paper\" or \"Scissors\".");
    return null;
    //null captures all cases of invalid player input
    
}




//this next function will assume that capitalisation has already been dealt with by the getPlayerChoice function,
//so that the playerSelection is definitely "Rock", "Scissors", "Paper" or null.

function rockPaperScissorsRound(playerSelection,computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    let summary = playerSelection + computerSelection;
    if (playerSelection === computerSelection)
    return "Round drawn";
    else if ((summary === "RockScissors") || (summary === "ScissorsPaper") || (summary === "PaperRock"))
    return "Player wins round";
    else if (playerSelection === null)
    return "Round void";
    return "Computer wins round";
}

console.log(rockPaperScissorsRound(getPlayerChoice(),getComputerChoice()));