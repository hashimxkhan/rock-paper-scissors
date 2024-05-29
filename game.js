let humanScore = 0;
let computerScore = 0;
let round = 0;
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
            round_winner.textContent = "Its a tie..."
   } 
   }
   if (humanChoice === "paper") {
    switch(computerChoice) {
        case "paper":
            round_winner.textContent = "Its a tie..."
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
            round_winner.textContent = "Its a tie..."
            break;
        case "rock":
            computerWins(humanChoice,computerChoice);
   } 
   }
   human.textContent = "Your Score: " + humanScore
   robot.textContent = "Robot's Score: " + computerScore

   if (humanScore == 5) {
     humanScore = 0
     computerScore = 0
     winner.textContent = "You win the game!"
   } else if (computerScore == 5) {
    humanScore = 0
     computerScore = 0
     winner.textContent = "You lose the game ;("
   } else {
    winner.textContent = ""
   }
}
function humanWins(humanChoice, computerChoice) {
    humanScore++;
    round_winner.textContent = "You win this round!! " + humanChoice + " beats " + computerChoice
}
function computerWins(humanChoice,computerChoice) {
    computerScore++;
    round_winner.textContent = "You lose! " + computerChoice + " beats " + humanChoice
}
const computerSelection = getComputerChoice();
const section = document.querySelector(".section")
const rock = document.createElement("button")
const paper = document.createElement("button")
const scissors = document.createElement("button")
rock.textContent = "Rock"
paper.textContent = "Paper"
scissors.textContent = "Scissors"
section.appendChild(rock)
section.appendChild(paper)
section.appendChild(scissors)
section.style.paddingLeft = "555px"
paper.style.margin ="18px"

rock.addEventListener("click", function() {
    playRound("rock", getComputerChoice())
})

paper.addEventListener("click", function() {
    playRound("paper", getComputerChoice())
})

scissors.addEventListener("click", function() {
    playRound("scissors", getComputerChoice())
})

const scores = document.querySelector(".scores")
const human = document.createElement("p")
const robot = document.createElement("p")
const winner = document.createElement("p")
const round_winner = document.createElement("p")
human.textContent = "Your Score: " + humanScore
robot.textContent = "Robot's Score: " + computerScore
scores.appendChild(winner)
scores.appendChild(round_winner)
scores.appendChild(human)
scores.appendChild(robot)

