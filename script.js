let targetNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

// function that handles the user's guess
function handleGuess(guess) {
    guessCount++;
    if (guess === targetNumber) {
        document.getElementById("result").innerHTML = `Congratulations, you guessed the number in ${guessCount} tries!`;
    } else if (guess > targetNumber) {
        document.getElementById("result").innerHTML = "Your guess is too high.";
    } else {
        document.getElementById("result").innerHTML = "Your guess is too low.";
    }
}

// event listener for the form submit button
document.getElementById("guess-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const guess = Number(document.getElementById("guess-input").value);
    handleGuess(guess);
});

