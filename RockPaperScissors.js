const buttonRock = document.querySelector("#Rock");
buttonRock.addEventListener('click', () => playRound('Rock'));

const buttonScissors = document.querySelector("#Scissors");
buttonScissors.addEventListener('click', () => playRound('Scissors'));

const buttonPaper = document.querySelector("#Paper");
buttonPaper.addEventListener('click', () => playRound('Paper'));

const resetButton = document.querySelector('.resetbutton');
resetButton.addEventListener('click', () => resetScores());

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    finalScorePara.textContent = 'New Game: Choose Rock, Paper or Scissors';
    showPlayerScore.textContent = '0';
    showComputerScore.textContent = '0';
    resultsPara.textContent = '';
}



let playerScore = 0;
let computerScore = 0;
const resultsPara = document.querySelector('.resultspara');
const showPlayerScore = document.querySelector('.playerScore');
const showComputerScore = document.querySelector('.computerScore');
const finalScorePara = document.querySelector('.finalscorepara');

//finalScorePara.textContent = 'I changed the text here';


function getComputerChoice() {
    let choiceNum = Math.floor((Math.random())*3);
    //choiceNum equals 0,1,2 with equal probability 
    
    return((choiceNum === 0) ? "Rock" : ((choiceNum === 1) ? "Paper" : "Scissors"));
    //so if choiceNum is 0 computer chooses Rock, otherwise if 1 it's Paper, otherwise Scissors
}


//this next function will assume that capitalisation has already been dealt with by the getPlayerChoice function,
//so that the playerSelection is definitely "Rock", "Scissors", "Paper" or null.



function playRound(playerSelection) {
    if ((playerScore === 5) || (computerScore === 5))
    return null;

    let computerSelection = getComputerChoice();
    //testing the input values
    
    let summary = playerSelection + computerSelection;
    //a nifty way to test both values concisely, don't you think?
    
    if (playerSelection === computerSelection)
    {resultsPara.textContent = `That round's a draw because the computer also chose ${playerSelection}.`;
    return "Round drawn";}
    //the function returns simply the result of the round but the alert message is more descriptive 
      
      else if ((summary === "RockScissors") || (summary === "ScissorsPaper") || (summary === "PaperRock"))
         {resultsPara.textContent = `You win the round because ${playerSelection} beats ${computerSelection}!`;
         playerScore += 1;
         showPlayerScore.textContent = `${playerScore}`;
          if (playerScore === 5)
           playerWins(computerScore);
        return "Player wins round";}
    
      else
        resultsPara.textContent = `Tough luck, you lost! Computer's ${computerSelection} beats your ${playerSelection}.`
        computerScore += 1;
        showComputerScore.textContent = `${computerScore}`;
          if (computerScore === 5)
           computerWins(playerScore);
        return "Computer wins round";
}
  
    function playerWins(cScore) {
        finalScorePara.textContent = `Congratulations! You win by 5 rounds to ${cScore}!`;
        
    }

    function computerWins(pScore) {
        finalScorePara.textContent = `Oh dear... You lost a silly game to a machine by 5 rounds to ${pScore}!`;
        
    }
     
 

//console.log(playerScore);
//console.log(computerScore);


//console.log(playRound(getPlayerChoice(),getComputerChoice()));
//combines the above functions to play a round of RPS 

//console.log(playRound('Rock'));

function game() 
{
    //create a variable to count the number of the current round
    
    let playerScore = 0;
    let computerScore = 0;
    
    while ((playerScore < 5) && (computerScore < 5)) 
    {
        //now the round takes place, after which, if not voided, the roundNumber increases. So
        //after round 5 when incremented to 6, the while loop will not execute again.
        let roundResult = playRound(playerSelection).charAt(0);
        //the first character uniquely identifies the result of the round
        
        switch (roundResult) 
        {
            
            case "C":
            computerScore += 1;
            break;

            case "R":
            break;

            case "P":
            playerScore += 1;
            break;
        }
    
     
    }
    //after all gameplay, the final result is outputted
    
    if (playerScore === 5) 
      {return `Congratulations! You won by 5 rounds to ${computerScore}.`};
    
    return `Bested by the computer! You lost by 5 rounds to ${playerScore}.`;
}

    
     
//alert(game());

//THIS SECTION SHOWS HOW I TESTED THE TERNARY OPERATOR CODE FOR PLURALS
//let test;
//test = Math.floor(3*Math.random());
//console.log(test);
//let testString = '' + test;
//console.log(testString);
//let pluralString = `${(test===1)?'':'s'}`;
//console.log(`${test} round${pluralString}`);
//let engString = `${testString} round${((test===1) || 's')}`;
//console.log(engString);
 