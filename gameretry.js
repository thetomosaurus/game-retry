
function playGame()
  {
  
var secretNumber = 42;
  console.log(secretNumber);
var turns = 0;

while (turns < 4) {
    var userGuess = prompt("Please guess a number","");
    if (userGuess != secretNumber) {
      alert('sorry, wrong answer!');
      userGuess = Number(userGuess);
      turns += 1;
    } else {
      alert('you win')
      break;
    }
  }
  alert('game over. The answer was 42');      
}
