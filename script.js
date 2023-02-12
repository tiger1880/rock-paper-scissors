function getComputerChoice(){

    let x = Math.random()*3;

    x = Math.floor(x);

    if (x == 0){

        return "Rock";

    }
    else if (x == 1){

        return "Paper";

    }
    else {

        //x == 2
        return "Scissors";

    }
}




function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "rock" ){

        if (computerSelection == "scissors")
            return "You Win! Rock beats Scissors";
        else if(computerSelection == "paper")
            return "You Lose! Paper beats Rock";
        else
            return "Draw. Rock vs Rock";
    }

    if (playerSelection == "paper" ){

        if (computerSelection == "scissors")
            return "You Lose! Scissors beats Paper";
        else if(computerSelection == "paper")
            return "Draw. Paper vs Paper";
        else
            return "You Win! Paper beats Rock";
    }

    if (playerSelection == "scissors" ){

        if (computerSelection == "scissors")
            return "Draw. Scissors vs Scissors";
        else if(computerSelection == "paper")
            return "You Win! Scissors beats Paper";
        else
            return "You Lose! Rocks beats Scissors";
    }


}


function game(){

    let playerScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++){


        let playerSelection = prompt("Rock or Paper or Scissors, Rock by default you know", "Rock");

        let computerSelection = getComputerChoice();
        let str = playRound(playerSelection, computerSelection);

        console.log("Round " + (i+1) + ": " + str);

        if (str.substring(0, 8) == "You Win!")
            playerScore++;
        else if (str.substring(0, 9) == "You Lose!")
            compScore++;
        
        
    }

    if (playerScore > compScore)
        console.log("You Win " + playerScore + " vs " + compScore);
    else if (playerScore < compScore)
        console.log("You Lose " + playerScore + " vs " + compScore);
    else 
        console.log("Draw " + playerScore + " vs " + compScore);


    // Assuming correct option for now, sensable user, trim, clean user input
}

game();



// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));