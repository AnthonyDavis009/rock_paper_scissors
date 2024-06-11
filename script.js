playGame();

function getHumanChoice() {
    let promptResponse = prompt("Enter rock, paper, or scissors").toLowerCase();

   while (promptResponse != "rock" && promptResponse != "paper" && promptResponse != "scissors") {
        promptResponse = prompt("Error: Invalid response. Enter rock, paper, or scissors").toLowerCase();
    }

    switch (promptResponse) {
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "Error: Game is broken";
    }
}
    
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let rounds = 0;

    while(rounds < 5) {
        let humanChoiceVal = getHumanChoice();
        let computerChoiceVal = getComputerChoice();
        console.log(playRound(humanChoiceVal, computerChoiceVal));
    } 

    function playRound(humanChoice, computerChoice) {
        rounds++;
        // Tie condition
        if(humanChoice == computerChoice) {
            return "Both of you chose " + humanChoice + ". It is a draw!"
        }
        // LOSE CONDITION
        else if ((humanChoice == "paper" && computerChoice == "scissors") ||
                 (humanChoice == "scissors" && computerChoice == "rock") ||
                 (humanChoice == "rock" && computerChoice == "paper")) {
                    computerScore++;
                    return humanChoice + " loses to " + computerChoice + "!";
        }
        // WIN CONDITION
        else if ((humanChoice == "scissors" && computerChoice == "paper") ||
                 (humanChoice == "rock" && computerChoice == "scissors") ||
                 (humanChoice == "paper" && computerChoice == "rock")) {
                    humanScore++;
                    return humanChoice + " wins against " + computerChoice + "!";
        }
    }
    // Tie result
    if(humanScore == computerScore) {
        console.log("The result is a tie! Your score: " + humanScore + ". Opponent's score: " + computerScore);
    } 
    // Lose result
    else if(humanScore < computerScore) {
        console.log("You have lost! Your score: " + humanScore + ". Opponent's score: " + computerScore);
    }
     // Winner result
    else if(humanScore > computerScore) {
        console.log("You have won! Your score: " + humanScore + ". Opponent's score: " + computerScore);
    }   
}