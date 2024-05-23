let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  let value = Math.floor(Math.random() * 3);
  switch (value) {
    case 0:
      return "rock";
    case 1:
      return "paper"; 
    case 2:
        return "scissors";
  }
}
function getHumanChoice() {
    let answer =  prompt("Enter your answer");
    answer = answer.toLowerCase().trim();
    console.log(answer);
    while (answer != "rock" && answer != "scissors" && answer != "paper") {
    answer = prompt("Enter a valid answer");
    answer = answer.toLowerCase().trim();
    console.log(answer);
    }
    if (answer === "rock") {
        return "rock";
    }
    if (answer === "paper") {
        return "paper";
    }
    if (answer === "scissors") {
        return "scissors";
    }
    return null;
}
function playGame() {
function playRound(humanChoice, computerChoice) {
   if (humanChoice === "rock") {
    switch(computerChoice) {
        case "paper":
            computerWins(humanChoice, computerChoice);
            break;    
        case "scissors":
            humanWins(humanChoice, computerChoice);
            break;
        case "rock":
            console.log("Its a tie!");
   } 
   }
   if (humanChoice === "paper") {
    switch(computerChoice) {
        case "paper":
            console.log("Its a tie!");
            break;    
        case "scissors":
            computerWins(humanChoice, computerChoice);
            break;
        case "rock":
            humanWins(humanChoice,computerChoice);
   } 
   }
   if (humanChoice === "scissors") {
    switch(computerChoice) {
        case "paper":
            humanWins(humanChoice,computerChoice);
            break;    
        case "scissors":
            console.log("Its a tie!");
            break;
        case "rock":
            computerWins(humanChoice,computerChoice);
   } 
   }
}
function humanWins(humanChoice, computerChoice) {
    humanScore++;
    console.log("You win! " + humanChoice + " beats " + computerChoice)
}
function computerWins(humanChoice,computerChoice) {
    computerScore++;
    console.log("You lose! " + computerChoice + " beats " + humanChoice)
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));
console.log("Your score: " + humanScore);
console.log("Computer's score: " + computerScore);
}
playGame();
playGame();
playGame();
playGame();
playGame();
function result(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose :(");
    } else {
        console.log("its a tie...")
    }
}
result(humanScore, computerScore);