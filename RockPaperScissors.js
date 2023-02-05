function getComputerChoice() {
    let choiceNum = Math.floor((Math.random())*3);
    //choiceNum equals 0,1,2 with equal probability 
    return((choiceNum === 0) ? "Rock" : ((choiceNum === 1) ? "Paper" : "Scissors"));
    //so if choiceNum is 0 computer chooses Rock, otherwise if 1 it's Paper, otherwise Scissors
}
let i = 1;
//we will increment i up to 100 to output 100 getComputerChoice values to check it is behaving.
while (i <= 100) {
    console.log(getComputerChoice());
    i += 1;
}
