let guess = document.querySelector("guess");
let btn = document.querySelector("btn");
console.log(guess)






btn.addEventListener("clicked", function guessBoardGame() {
    const word = "HELLO";
    const maxGuesses = 5;
    let correctGuesses = [];
    let incorrectGuesses = [];
  
    while (correctGuesses.length < word.length && incorrectGuesses.length < maxGuesses) {
    //   let userInput = prompt(`Enter a letter. Correct guesses: ${correctGuesses.join('')} Incorrect guesses: ${incorrectGuesses.join(', ')}`);
      if (word.includes(guess.value)) {
        correctGuesses.push(guess.value);
      } else {
        incorrectGuesses.push(guess.value);
      }
    }
  
    if (correctGuesses.length === word.length) {
      alert("You win! The word was " + word);
    } else {
      alert("You lose. The word was " + word);
    }
  })


  
