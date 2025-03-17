let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".ownChoice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const drawGame = () => {
    msg.innerText = "Game was Draw!, Play again.....";
    msg.style.backgroundColor = "rgb(0, 44, 44)";
};

const showWiner = (userWin,userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        compScorePara.innerText = computerScore;

        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const gentCompChoice = ( ) => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    //Generate Computer choice
    const compChoice = gentCompChoice();
    console.log("Computer Choice = ", compChoice);

    if (userChoice === compChoice){
        // Draw Game
        drawGame();
    } else{
        let userWin = true;
        if (userChoice === "rock"){
            // Seissor, Paper 
            userWin = compChoice === "paper" ? false : true
        } else if (userChoice === "paper") {
            // Rock, Seissor
            userWin = compChoice === "seissor" ? false : true
         } else {
            // Rock, Paper
            userWin = compChoice === "rock" ? false : true
         }
         showWiner(userWin, userChoice, compChoice);
    }
};

choices.forEach((ownChoice) => {
    ownChoice.addEventListener("click", ( ) => {
        const userChoice = ownChoice.getAttribute("id");
        playGame(userChoice);
    });
});