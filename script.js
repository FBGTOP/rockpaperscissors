let playerInput;
let compChoice;

function getComputerChoice (){
    let compChoiceArray = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * compChoiceArray.length);
    return compChoiceArray[random]
}

function round (playerSelection, computerSelection){
    let playerWin;  //Used to track if player won

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        console.log("It's a draw!");
    } else if (playerSelection.toLowerCase() === "rock"  && computerSelection === "Scissors"){
        console.log("You won! Your opponent chose " + computerSelection +"!");
        playerWin = true;
    } else if (playerSelection.toLowerCase() === "scissors"  && computerSelection === "Paper"){
        console.log("You won! Your opponent chose " + computerSelection +"!");
        playerWin = true;
    } else if (playerSelection.toLowerCase() === "paper"  && computerSelection === "Rock"){
        console.log("You won! Your opponent chose " + computerSelection +"!");
        playerWin = true;
    } else {
        console.log("You lost! Your opponent chose " + computerSelection +"!");
        playerWin = false;
    }

    return playerWin;
}

function game(){
    
    let playerScore = 0;
    let computerScore= 0;  //tracks score after each round

    for (let i = 0; i < 5; i++) {
        playerInput = prompt("You must beat the computer!  Please enter Rock, Paper or Scissors");
        compChoice = getComputerChoice();

        console.log(playerInput);
        console.log(compChoice);

        let result = round (playerInput, compChoice);  

        if (result === true){
            playerScore ++;
        } else if (result === false){
            computerScore ++;
        }

        console.log("Your score is " + playerScore +", the computers score is " + computerScore);

    }

    if (playerScore > computerScore){
        console.log("You won with a Score of " + playerScore + " to " + computerScore)
    } else if (computerScore > playerScore) {
        console.log("The computer kicked your ass, with a score of " + computerScore + " to " + playerScore)
    } else {
        console.log("It's a draw!  Looks like you'll have to try again.")
    }
}

game();
