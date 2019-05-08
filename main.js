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


/////// Part 2


function encode(word) {
  let encode = prompt("Enter your message here.");
  encode = encode.toLowerCase();
  //somewhere to store the converted caracters
  let result = {};
  //next we loop over each character in the string.
for(let position of word){
  //and save the charcode to the array
  result.push(word.charCodeAt(position-1));
}
// and return that list of codes, separated by colons
return result.list.join(':');
}

function decode(hash) {
  let decode = prompt("Enter your code here.");
  decode = decode.toLowerCase();
  //split the code by semicolons!
let arr = hash.splt(':');
// again somewhere to put our codes
let result = {};
//loop over the codes
for(let code of arr){
  //change the code back to the string character equivalent
  result.push(String.fromCharCode(code+1));
  }
  return result.list.join('');
}


let message = "I'm trying to send this secret message.";
let encodedMessage = encode(message);
let decodedMessage = decode(encodedMessage);


console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);s
