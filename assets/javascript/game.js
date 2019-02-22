//The Psychic Game

//Guess What Letter I'm thinking of

//setup variables for random letter array and to capture tallies for wins, losses, guesses remaining and blank array to be filled in with letter guesses
var secretLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var Wins = 0;
var Losses = 0;
var guessesLeft = 9;
var guessedLetters = []; 

//game function

document.onkeyup = function(event) {
  var playerGuess = event.key; //key event to capture player guess
  guessedLetters.push(playerGuess); //push player's guess to guessed letters array
  var randomLetter = secretLetters[Math.floor(Math.random() * secretLetters.length)];
//create random letter generator from secretLetters array

//if player guess equals random letter. Increase wins, alert "you win" and reset game.
//if player guess does not equal random letter, decrease remaining guesses, capture letter pressed in player guess array.

    if (playerGuess === randomLetter) {
        Wins++;
        guessesLeft = 9;
        guessedLetters = [];
        document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + guessedLetters;
        document.getElementById("wins").innerHTML = "Wins: " + Wins;
        alert("You win! Press any letter to play again.")
      }
    else {
        guessesLeft--;
        document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + guessedLetters.join(', ');
      }

//If the remaining guesses = 0, alert "you lose", increase losses, reset game. 
    if (guessesLeft === 0) {
        Losses++;
        guessesLeft = 9;
        guessedLetters = [];
        document.getElementById("lettersGuessed").innerHTML = "Letters Guessed: " + guessedLetters;
        document.getElementById("losses").innerHTML = "Losses: " + Losses;
        alert("You lose :( Press any letter to play again.")

      }
//setup field to track number of guesses remaining   
    var answer = 
        "<p>Guesses Remaining: " + guessesLeft + "</p>"         
        document.getElementById("remaining").innerHTML = answer;
    }
