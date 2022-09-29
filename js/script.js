//The unordered list where the player’s guessed letters will appear.
const guesses = document.querySelector(".guessed-letters");
//The button with the text “Guess!” in it.
const button = document.querySelector(".guess");
//The text input where the player will guess a letter.
const letter = document.querySelector(".letter");
//The empty paragraph where the word in progress will appear.
const progress = document.querySelector(".word-in-progress");
//The paragraph where the remaining guesses will display.
const remaining = document.querySelector(".remaining");
//The span inside the paragraph where the remaining guesses will display.
const span = document.querySelector(".remaining span");
//The empty paragraph where messages will appear when the player guesses a letter.
const messages = document.querySelector(".message");
//The hidden button that will appear prompting the player to play again.
const playAgain = document.querySelector(".play-again");

//Test word
const word = "magnolia";

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push(●);
    }
    progress.innerText = placeholderLetters.join("");
};

placeholder(word);

button.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letter.value;
    console.log(guess);
    letter.value = "";
});