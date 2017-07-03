      // Creating an empty array for alphabet and variables //
      var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      var win = 0;
      var loss = 0;
      var guesses = 10;
      var newLetter = null;

      // math random //
      var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log(computerChoice);

      // loop //

      document.onkeyup = function(event) {
        guesses -= 1;
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

      // reset //
      var reset = function(){
        changeLettertoGuess();

      }

      // change computer Choice when reset happens //
      var changeLettertoGuess = function() {
      alphabet[Math.floor(Math.random() * alphabet.length)];
      }

      if (userGuess == computerChoice){
        document.write("You got it buddy!");
        document.write("<p> The letter was " + computerChoice + "</p>");
        document.write("<p> Amount of guesses left = " + guesses + "</p>");
        win += 1;
        reset();
        } 

      if (guesses === 0){
        document.write("YOU LOST!");
        loss += 1;
        reset();
        }
      }
      // wins and losses will show on screen //
      document.getElementById("win").innerHTML = "Wins: " + win;
      document.getElementById("loss").innerHTML = "Losses: " + loss;
      
