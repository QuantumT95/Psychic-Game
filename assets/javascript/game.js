// Creating an empty array for alphabet and variables //
var win = 0;
var loss = 0;
var guesses = 10;
var randomLetter = null;
var letters = '';

// clear the typed letters
function clearUserLetters() {
  letters = '';
  $('#letters').text('Letters: ');
}

// get a random letter
function getRandomLetter() {
  // get random letter key from a-z
  var randomNum = Math.floor(Math.random() * (90 - 65) + 65);

  // randomLetter = String.fromCharCode(randomNum).toLowerCase();
  randomLetter = randomNum;
}

// get user input
function getUserInput(e) {
  var key = e.keyCode || e.which;

  // add letter to letters string
  letters += String.fromCharCode(key).toUpperCase();
  $('#letters').text('Letters: ' + letters);

  guesses--;
  
  // if user is correct, alert win and restart
  if ( randomLetter == key ) {
    win++;
    $('#win').text('Wins: ' + win);
    // document.getElementById('win').innerText = 'Wins: ' + win;
    alert('You got it!');
    startGame();
  } else {
    // if user has no more guesses, alert loss and restart
    if ( !guesses ) {
      loss++;
      $('#loss').text('Losses: ' + loss);
      alert('You lost....');
      startGame();
    }
  }

  $('#guesses').text('Guesses: ' + guesses);  
}

function startGame() {
  getRandomLetter(); // get a new random letter
  clearUserLetters(); // clear user letters
  guesses = 10; // reset guesses
}

// document.addEventListener('keyup', getUserInput);
// setup key input listener
$(document).on('keyup', getUserInput);

startGame(); // start game when app loads