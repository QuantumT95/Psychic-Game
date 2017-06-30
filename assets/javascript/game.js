// Creating an empty array for alphabet and variables //
      var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      var win = 0;
      var loss = 0;
      var guesses = 10;
      var guessedLetters =[];
      var newLetter = null;

      // math random //
      var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log(computerChoice);

      var updateGuessesSoFar = function() {
      // Grabs, declares, and updates the player's past guesses
      document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
      };


      // reset //
      var reset = function() {
        guesses = 10;
        guessedLetters = [];
      }

      // change computer Choice when reset happens //
      var changeLettertoGuess = function() {
        this.newLetter = this.alphabet[Math.floor(Math.random() * alphabet.length)];
      }

      // loop //
      while (Attempts != computerChoice) {
        var Attempts = prompt("You have 10 guesses. Guess between 'a' to 'z'.")

        if (Attempts == computerChoice){
          document.write("You got it buddy!");
          document.write("<p> The letter was " + computerChoice + "</p>");
          document.write("<p> Amount of guesses left = " + guesses + "</p>");
          win += 1;
          reset;
        } 

        if (Attempts != computerChoice){
          guesses -= 1;
        }

        if (guesses === 0){
          document.write("YOU LOST!");
          loss += 1;
          reset; 
        }
      }

      document.getElementById("win").innerHTML = "Wins: " + win;
      document.getElementById("loss").innerHTML = "Losses: " + loss;
      
