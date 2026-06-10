const secretNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber(userGuess) {
    if (userGuess === secretNumber) {
        return "🎉 Correct Guess!";
    }

    if (userGuess > secretNumber) {
        return "Too High!";
    }

    return "Too Low!";
}

console.log(guessNumber(5));