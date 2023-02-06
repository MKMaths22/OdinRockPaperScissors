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
    //testing the input values
    let summary = playerSelection + computerSelection;
    //a nifty way to test both values consisely, don't you think?
    if (playerSelection === computerSelection)
    {alert(`That round's a draw because the computer also chose ${playerSelection}.`);
    return "Round drawn";}
    //the function returns simply the result of the round but the alert message is more descriptive 
    else if ((summary === "RockScissors") || (summary === "ScissorsPaper") || (summary === "PaperRock"))
    {alert(`You win the round because ${playerSelection} beats ${computerSelection}!`);
    return "Player wins round";}
    else if (playerSelection === null)
    {alert(`Round voided. Let's try again.`);
    return "Round void";}
    alert(`Tough luck, you lost! Computer's ${computerSelection} beats your ${playerSelection}.`)
    return "Computer wins round";
}

console.log(rockPaperScissorsRound(getPlayerChoice(),getComputerChoice()));
//combines the above functions to play a round of RPS 