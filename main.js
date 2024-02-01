function getComputerChoice() {
  let random = Math.floor(Math.random() * 3 + 1);

  switch (random) {
    case 1:
      console.log("Computer select: Rock");
      return "rock";

    case 2:
      console.log("Computer select: Paper");
      return "paper";

    case 3:
      console.log("Computer select: Scissors");
      return "scissors";
  }
}

function getPlayerChoice() {
  let playerChoice = prompt("Select Rock, Paper or Scissors").toLowerCase();
  console.log(
    `Player select: ${playerChoice[0].toUpperCase() + playerChoice.slice(1)}`
  );
  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (!["rock", "paper", "scissors"].includes(playerSelection)) {
    return `${playerSelection} is not a valid choice!`;

  }else if (playerSelection === computerSelection) {
    return "Tie!";

  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") return "You Lose! Paper beats Rock";
    if (computerSelection === "scissors") return "You Win! Rock beats Scissors";

  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") return "You Win! Paper beats Rock";
    if (computerSelection === "scissors") return "You Lose! Scissors beats Paper";

  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") return "You Lose! Rock beats Scissors";
    if (computerSelection === "paper") return "You Win! Scissors beats Paper";
  }
}

function playGame(){
  let playerCounter = 0;
  let computerCounter = 0;
  for(let i=0; i<5; i++){
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let game = playRound(playerChoice, computerChoice);
    console.log(game);

    if(game.startsWith("You Win")) playerCounter++;
    if(game.startsWith("You Lose")) computerCounter++;
  
    console.log(`**Scores: Player: ${playerCounter}, Computer: ${computerCounter}`);
  }
  if(playerCounter > computerCounter){
    console.log(`You Win! ${playerCounter}-${computerCounter}`);
  }else if(playerCounter < computerCounter){
    console.log(`You Lose! ${playerCounter}-${computerCounter}`);
  }else{
    console.log(`Tie! ${playerCounter}-${computerCounter}`);
  }
}

playGame();


