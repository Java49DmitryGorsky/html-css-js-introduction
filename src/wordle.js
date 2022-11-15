const word = "table"
const N_LETTERS = 5;
const letterElements = document.querySelectorAll(".letter-guess")
let guesses = document.querySelector('.guesses');
let lastAttempt = document.querySelector('.lastAttempt');
let guessAmount = 6;
function onChange(event) {
    const wordGuess = event.target.value.toLocaleLowerCase();
    event.target.value = '';
    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`)
    } else {
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l)
        const colors = wordAr.map((l, i) => {
            let index = word.indexOf(l);
            let res = 'red';
            if (index > -1) {
                res = index == word.charAt(i) ? 'green' : 'yellow';
            }
            return res;
        })
        colors.forEach((c, i) => letterElements[i].style.color = c)
    }
    if (wordGuess === word) {
        // guessAmount.parentNode.removeChild(guessAmount);
        lastAttempt.textContent = 'Win! You guessed the word!';
        lastAttempt.style.backgroundColor = 'green';
        guessAmount = 0;
        return;
    } else if (guessAmount === 0) {
        // guessAmount.parentNode.removeChild(guessAmount);
        lastAttempt.textContent = 'Number of attempts exhausted';
        lastAttempt.style.backgroundColor = 'red';
        guessAmount = 0;
        guesses.parentNode.removeChild(guesses);
        return;
    } else {
        lastAttempt.textContent = "Didn't guess!";
        lastAttempt.style.backgroundColor = 'blue';
        guesses.textContent = (`Number of attempts left: ${guessAmount - 1}`);
    }
    guessAmount--;
}



