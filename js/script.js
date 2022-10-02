//The unordered list where the player’s guessed letters will appear.
const guessedLettersE = document.querySelector(".guessed-letters");
//The button with the text “Guess!” in it.
const guessedLettersButton = document.querySelector(".guess");
//The text input where the player will guess a letter.
const letterInput = document.querySelector(".letter");
//The empty paragraph where the word in progress will appear.
const progress = document.querySelector(".word-in-progress");
//The paragraph where the remaining guesses will display.
const remainingGuesses = document.querySelector(".remaining");
//The span inside the paragraph where the remaining guesses will display.
const remainingSpan = document.querySelector(".remaining span");
//The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message");
//The hidden button that will appear prompting the player to play again.
const playAgainButton = document.querySelector(".play-again");

//Test word
const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    progress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessedLettersButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;
    const goodGuess = validateInput(guess);
    if (goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A-Z.";
    } else {
        return input;
    }
}; 

const makeGuess = function (guess) {
    guess = guess.toUpperCase ();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter, silly. Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateProgress(guessedLetters);
    }
};

const showGuessedLetters = function () {
    guessedLettersE.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersE.append(li);
    }
};

const updateProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
    progress.innerText = revealWord.join("");
    checkIfWin();
};

const checkIfWin = function () {
    if (word.toUpperCase() === progress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
};