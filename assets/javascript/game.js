// Creating an empty array for alphabet and variables //
      var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      var win = 0;
      var loss = 0;
      var guesses = 3;

      // math random //
      var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

      console.log(computerChoice);

      while (Attempts != computerChoice) {
        var Attempts = prompt("You have 10 guesses. Guess between 'a' to 'z'.");
        guesses -= 1; 

        if (guesses = 0){
          document.write("You have lost!");
          break;
        }
      }