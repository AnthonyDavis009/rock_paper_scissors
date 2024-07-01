const infoContainer = document.querySelector("#info-container");
const roundInfo = document.querySelector("#round-info");
const outcome = document.querySelector("#outcome");
const score = document.querySelector("#score");

const retryBtnContainer = document.querySelector("#retry-btn-container");
const retryBtn = document.querySelector("#retry-btn");

const playerRatio = document.querySelector("#player-ratio");
const computerRatio = document.querySelector("#computer-ratio");

const gameBtnOptions = document.querySelectorAll(".game-btn");

playGame();

function playGame() {
    let roundNum = 1;
    let playerScore = 0;
    let computerScore = 0;

    playerRatio.style.flex = 1;
    computerRatio.style.flex = 0;
    retryBtnContainer.style.display = "none";

    gameBtnOptions.forEach(button => {
        button.addEventListener("click", (e) => {
            // parentNode (e.target in this case is a selected img) and its alt value
            let playerSelection = e.target.alt;
            let cpuSelection = getComputerChoice();
            retryBtnContainer.style.display = "none";
            // Once player or computer reaches score of 5, this becomes false
            if(playerScore < 5 && computerScore < 5) {
                let roundResult = playRound(playerSelection, cpuSelection, playerScore, computerScore);
                if(roundResult == "tie") {playerScore++; computerScore++;}
                else if(roundResult == "won") {playerScore++;}
                else if(roundResult == "lost") {computerScore++;}
                playerRatio.style.flex = playerScore;
                computerRatio.style.flex = computerScore;
                // Update round info
                roundInfo.textContent = `Round ${++roundNum}`;
                outcome.textContent = `You chose ${playerSelection}... Opponent chose ${cpuSelection}`;
                score.textContent = `Score: ${playerScore} - ${computerScore}`;
            }
            // Immediately end game when roundNum is 5 (not for else if statements)
            if (playerScore == 5 || computerScore == 5) {
                if(playerScore == computerScore) roundInfo.textContent = "You are tied";
                else if(playerScore > computerScore) roundInfo.textContent = "You won!";
                else if(computerScore > playerScore) roundInfo.textContent = "You lost...";
                
                score.textContent = `Final Score: ${playerScore} - ${computerScore}`;
                infoContainer.style.textAlign = "center";
                retryBtnContainer.style.display = "block";
            }
        });
    });
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        // Break statements are not needed alongside return statements.
        case 0: return "Rock"; 
        case 1: return "Paper"; 
        case 2: return "Scissors"; 
        default: return "Error: Game is broken";
    }
}

function playRound(playerSelection, computerChoice, playerScore, computerScore) {
    // Tie condition
    if(playerSelection == computerChoice) {
        return "tie";
    }
    // LOSE CONDITION
    else if ((playerSelection == "Paper" && computerChoice == "Scissors") ||
             (playerSelection == "Scissors" && computerChoice == "Rock") ||
             (playerSelection == "Rock" && computerChoice == "Paper")) {
        return "lost";
    }
    // WIN CONDITION
    else if ((playerSelection == "Scissors" && computerChoice == "Paper") ||
             (playerSelection == "Rock" && computerChoice == "Scissors") ||
             (playerSelection == "Paper" && computerChoice == "Rock")) {
        return "won";
    }
}

retryBtn.addEventListener("click", () => {
    roundInfo.textContent = "Round 1";
    outcome.textContent = "Choose rock, paper, or scissors against your opponent";
    score.textContent = "Score: 0 - 0";
    playGame();
});
    





