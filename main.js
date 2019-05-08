let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];

function randomFrom(array) {
 return array[(Math.round(Math.random()*2))];
}


function checkInput(input, computerChoices) {
 if (input === "quit") {
   return true;
 }

 let computerChoice = randomFrom(computerChoices);
 console.log("Computer's choice", computerChoice);
 console.log("Player's choice", input);

 if(computerChoice === "rock" && input === "scissors"){
   alert("Computer wins!");
 } else if (computerChoice === "scissors" && input === "paper"){
   alert("Computer wins!");
   return false;
 } else if (computerChoice === "rock" && input === "paper"){
   alert("Computer wins!");
   return false;
 } else if (computerChoice === "paper" && input === "paper"){
   alert("DRAW!");
   return false;
 } else if (computerChoice === "scissors" && input === "scissors"){
   alert("DRAW!");
   return false;
 } else if (computerChoice === "rock" && input === "rock"){
   alert("DRAW!");
   return false;
 } else if (input === "paper" && computerChoice === "rock"){
   alert("YOU WIN!");
   return false;
 } else if (input === "scissors" && computerChoice === "paper"){
   alert("YOU WIN!");
   return false;
 } else if (input === "rock" && computerChoice === "scissors"){
   alert("YOU WIN!");
   return false;
 }
 alert("Invalid, please enter rock, paper, or scissors");
 return false;
}

function start(gameOver, computerChoices) {
 while (!gameOver){
   let playerInput = prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
   playerInput = playerInput.toLowerCase();
   gameOver = checkInput(playerInput, computerChoices);
 }
}



start(gameOver, computerChoices)
