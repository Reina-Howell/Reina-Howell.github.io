// Store DOM elements in variables
var guessForm = document.getElementById("guess_form");
var guessDisplay = document.getElementById("guess_display");
var guessInput = document.getElementById("guess_input");
var guessStatus = document.getElementById("guess_status");

// Initialize game state variables
var secretWord = "banana";
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

// Step 0: Read through the code and understand it
// Step 1: Implement guessLetter
// Step 2: Implement hasWon
// Bonus Steps:
// - Randomly generate a word for each game
//   by pulling from an array
// - Come up with a scoring mechanism --
//    you can declare game over in a # of guesses
//    or just track number of guesses and display it
// - Display the letters they've already guessed
// - Implement error checking for duplicate guesses
// - Make way cooler win and lose states!

//tic-tac-toe game
// Tic-Tac-Toe starter code for BHS class

var player = "X";
var board = [];
// Initialize board to a 2D array of empty strings, 3x3
for (var row = 0; row < 3; row++) {
    var cols = [];
    for (var col = 0; col < 3; col++) {
        cols.push("");
    }
    board.push(cols);
}

// Handles click by current player of row and col
var handleClick = function(row, col) {
    // TODO: Check if move is valid (space is empty)
    // TODO: If move is valid, update board array with player
    // TODO: Toggle current player
    if(board[row][col]===""){
        if(player==="X"){
            board[row][col]="X";
            player="O";
        }
        else{
            board[row][col]="O";
            player="X";
        }
    }
};

// Returns winning player if found (X or O)
// If no winner, returns empty string
var checkForWinner = function() {
    // TODO: Check for win of rows, cols, or diagonals
    if(board[0][0]===board[0][1] && board[0][1]===board[0][2] && board[0][0]!==""){
        if(player === "X"){
            return "O";
        }
        else{
            return "X";
        }
    }
    else if(board[1][0]===board[1][1] && board[1][1]===board[1][2] && board[1][0]!==""){
        if(player === "X"){
            return "O";
        }
        else{
            return "X";
        }
    }
    else if(board[2][0]===board[2][1] && board[2][1]===board[2][2] && board[2][0]!==""){
        if(player === "X"){
            return "O";
        }
        else{
            return "X";
        }
    }
    else if(board[0][0]===board[1][0] && board[1][0]===board[2][0] && board[0][0]!==""){
        if(player === "X"){
            return "O";
        }
        else{
            return "X";
        }
    }
    else if(board[0][1]===board[1][1] && board[1][1]===board[2][1] && board[0][1]!==""){
        if(player === "X"){
            return "O";
        }
        else{
            return "X";
        }
    }
    else if(board[0][2]===board[1][2] && board[1][2]===board[2][2] && board[0][2]!==""){
        if(player === "X"){
            return "O";
        }
        else{
            return "X";
        }
    }
    else if(board[0][0]===board[1][1] && board[1][1]===board[2][2] && board[0][0]!==""){
        if(player === "X"){
            return "O";
        }
        else{
            return "X";
        }
    }
    else if(board[0][2]===board[1][1] && board[1][1]===board[2][0] && board[0][2]!==""){
        if(player === "X"){
            return "O";
        }
        else{
            return "X";
        }
    }
    else{
        return "";
 
    }
};

var CELL_SIZE = 40;
mouseClicked = function() {
    var clickedRow = Math.floor(mouseY / CELL_SIZE);
    var clickedCol = Math.floor(mouseX / CELL_SIZE);
    if (clickedRow <= 3 && clickedCol <= 3) {
        handleClick(clickedRow, clickedCol);
    }
};

draw = function() {
    background(255, 255, 255);
    stroke(0, 0, 0);
    
    for (var row = 0; row < board.length; row++) {
        for (var col = 0; col < board[row].length; col++) {
            var cellX = 0 + col * CELL_SIZE;
            var cellY = 0 + row * CELL_SIZE;
            fill(181, 255, 183);
            rect(cellX, cellY, CELL_SIZE, CELL_SIZE);
            fill(0, 0, 0);
            text(board[row][col], cellX + CELL_SIZE/3, cellY + CELL_SIZE/2);
        }
    }
  
    fill(0, 0, 0);
    var winner = checkForWinner();
    if (winner) {
        text("Winner is " + winner, 20, 160);
    } else {
        text("Current player is " + player, 20, 160);
    }
};
