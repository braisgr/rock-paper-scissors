let playerCounter = 0;
let computerCounter = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3 + 1);

  switch (random) {
    case 1:
      computerChoiceP.innerText = "Computer select: Rock";
      return "rock";

    case 2:
      computerChoiceP.innerText = "Computer select: Paper";
      return "paper";

    case 3:
      computerChoiceP.innerText = "Computer select: Scissors";
      return "scissors";
  }
}

function playRound(playerSelection) {
  if(total.textContent){
    total.innerText = "";
  }

  resetBackgrounds();

  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    computerCounter++;
    playerCounter++;
    results.innerText = "Tie!";
    showScores();
    paintBackgrounds("tie",playerSelection,computerSelection);

  } else if (playerSelection === "rock") {
    if (computerSelection === "paper"){
      computerCounter++;
      results.innerText = "You Lose! Paper beats Rock";
      showScores();
      paintBackgrounds("lose",playerSelection,computerSelection);
    }
    if (computerSelection === "scissors"){
      playerCounter++;
      results.innerText = "You Win! Rock beats Scissors";
      showScores();
      paintBackgrounds("win",playerSelection,computerSelection);
    } 

  } else if (playerSelection === "paper") {
    if (computerSelection === "rock"){
      playerCounter++;
      results.innerText = "You Win! Paper beats Rock";
      showScores();
      paintBackgrounds("win",playerSelection,computerSelection);
    } 
    if (computerSelection === "scissors"){
      computerCounter++;
      results.innerText = "You Lose! Scissors beats Paper";
      showScores();
      paintBackgrounds("lose",playerSelection,computerSelection);
    } 

  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock"){
      computerCounter++;
      results.innerText = "You Lose! Rock beats Scissors";
      showScores();
      paintBackgrounds("lose",playerSelection,computerSelection);
    } 
    if (computerSelection === "paper"){
      playerCounter++;
      results.innerText = "You Win! Scissors beats Paper";
      showScores();
      paintBackgrounds("win",playerSelection,computerSelection);
    } 
  }

  if(playerCounter >=5 || computerCounter >= 5){
    showFinalResults();
  }
}

function showScores(){
  scores.innerText = `**Scores: Player: ${playerCounter}, Computer: ${computerCounter}`; 
}

function paintBackgrounds(result, userSelection,computerSelection){
  if(result === "tie"){
    document.querySelector(`.user-selection-${userSelection}`).style.backgroundColor = "#92C7CF";
    document.querySelector(`.computer-selection-${computerSelection}`).style.backgroundColor = "#92C7CF";
  }
  if(result === "win"){
    document.querySelector(`.user-selection-${userSelection}`).style.backgroundColor = "#C3E2C2";
    document.querySelector(`.computer-selection-${computerSelection}`).style.backgroundColor = "#DC8686";
  }
  if(result === "lose"){
    document.querySelector(`.user-selection-${userSelection}`).style.backgroundColor = "#DC8686";
    document.querySelector(`.computer-selection-${computerSelection}`).style.backgroundColor = "#C3E2C2";
  }
}

function resetBackgrounds(){
  const coloredBackgrounds = document.querySelectorAll('.user-selection, .computer-selection');
  coloredBackgrounds.forEach(element => {
    element.style.backgroundColor = ''; 
  });
}

function showFinalResults(){
  if(playerCounter > computerCounter){
    total.innerText = `You win this game! 🥳 ${playerCounter}-${computerCounter}`;
  }else if(playerCounter < computerCounter){
    total.innerText = `You lose this game! ☠️ ${playerCounter}-${computerCounter}`;
  }else{
    total.innerText = `Tie! ${playerCounter}-${computerCounter}`;
  }
  playAgain();
}

function playAgain(){
  playAgainButton.innerText = "Play again?"
  resultsContainer.appendChild(playAgainButton);

  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function resetGame(){
  playerCounter = 0;
  computerCounter = 0;

  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;

  resetBackgrounds();

  const resultsContainerElements = document.querySelectorAll(".content");
  resultsContainer.removeChild(playAgainButton);

  for(let i=0; i<resultsContainerElements.length; i++){
    resultsContainerElements[i].textContent = "";
  }
}
//Buttons
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playAgainButton = document.createElement("button");
playAgainButton.classList.add("play-again-button");

//Results
const resultsContainer = document.querySelector(".results-container");
const playerChoiceP = document.getElementById("playerChoice");
const computerChoiceP = document.getElementById("computerChoice");
const results = document.getElementById("results");
const scores = document.getElementById("scores");
const total = document.getElementById("total");

rockButton.addEventListener("click", () => {
  playerChoiceP.innerText = "Player select: Rock";
  playRound("rock");
});

paperButton.addEventListener("click", () => {
  playerChoiceP.innerText = "Player select: Paper";
  playRound("paper");
});

scissorsButton.addEventListener("click", () => {
  playerChoiceP.innerText = "Player select: Scissors";
  playRound("scissors");
});

playAgainButton.addEventListener("click", resetGame);




