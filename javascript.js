// Store DOM elements in variables
var guessForm = document.getElementById("guess_form");
var guessDisplay = document.getElementById("guess_display");
var guessInput = document.getElementById("guess_input");
var guessStatus = document.getElementById("guess_status");

// Initialize game state variables
var secretWords = ["computer", "phone", "robots"];
var secretWord = secretWords[Math.floor(Math.random()*secretWords.length)];
var guessedWord = [];
var guessedLetters = [];
for (var i = 0; i < secretWord.length; i++) {
    guessedWord[i] = "_";
}


// Returns true if its a correct guess -
//  if the letter is anywhere in the word
// Also updates guessedWord and guessedLetters
var checkLetterGuess = function(letter) {
    var foundLetter=false;
    for (var i=0; i<secretWord.length;i++) {
        if (secretWord[i]===letter) {
            guessedWord[i]=letter;
            guessedLetters[i]=letter;
            foundLetter=true
        }
    }
    return foundLetter
};

// Returns true if they guessed the whole word
var hasWon = function() {
    var match = true;
    for (var i=0; i<secretWord.length;i++){
        if (secretWord[i] !== guessedWord[i]){
            match = false
        }
    }
    return match
};



var displayGuessedWord = function() {
    guessDisplay.innerHTML = guessedWord.join(" ");
};


guessForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var foundLetter = checkLetterGuess(guessInput.value);
    if (foundLetter) {
        guessStatus.innerHTML = "Yay you found one!";
    } else {
        guessStatus.innerHTML = "Sorry, not so much!";
    }
    if (hasWon()) {
        guessStatus.innerHTML += "WOOO WINNER WINNER!";
    }
    displayGuessedWord();
    guessInput.value = "";
});
displayGuessedWord();
