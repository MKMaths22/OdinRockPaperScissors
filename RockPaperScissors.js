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

function playRound(playerSelection,computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    //testing the input values
    let summary = playerSelection + computerSelection;
    //a nifty way to test both values concisely, don't you think?
    if (playerSelection === computerSelection)
    {alert(`That round's a draw because the computer also chose ${playerSelection}.`);
    return "Round drawn";}
    //the function returns simply the result of the round but the alert message is more descriptive 
    else if ((summary === "RockScissors") || (summary === "ScissorsPaper") || (summary === "PaperRock"))
    {alert(`You win the round because ${playerSelection} beats ${computerSelection}!`);
    return "Player wins round";}
    else if (playerSelection === null)
    {alert(`Round voided. Let's try again.`);
    return "Void round";}
    alert(`Tough luck, you lost! Computer's ${computerSelection} beats your ${playerSelection}.`)
    return "Computer wins round";
}

//console.log(playRound(getPlayerChoice(),getComputerChoice()));
//combines the above functions to play a round of RPS 

function game() {
    //create a variable to count the number of the current round
    let roundNumber = 1;
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    let voidRounds = 0;
    while ((roundNumber <= 5) && (voidRounds < 3)) {
        //now the round takes place, after which, if not voided, the roundNumber increases. So
        //after round 5 when incremented to 6, the while loop will not execute again.
        let roundResult = playRound(getPlayerChoice(),getComputerChoice()).charAt(0);
        //the first character uniquely identifies the result of the round
        switch (roundResult) {
            case "V":
            voidRounds += 1;
            roundNumber -= 1;
            //the roundNumber decrements to cancel out the increment that happens at the end of the outer while loop
            break;

            case "C":
            computerScore += 1;
            break;

            case "R":
            drawScore += 1;
            break;

            case "P":
            playerScore += 1;
            break;
        }
    
     roundNumber += 1;
        //increments the round number
    }
    //after all gameplay, the final result is outputted
    if (voidRounds > 2)
    {return `Game voided`;}
    else if (playerScore > computerScore)
    {return `Congratulations! You won by ${playerScore} rounds to ${computerScore} with ${drawScore} drawn rounds.`;}
    else if (playerScore < computerScore)
    {return `Bested by the computer --- you lost by ${computerScore} rounds to ${playerScore} with ${drawScore} drawn rounds.`;}
    else
    {return `It's a draw! You won ${playerScore} rounds and so did the computer, with ${drawScore} drawn rounds.`;}
    

}
console.log(game());