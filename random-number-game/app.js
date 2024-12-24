const maxLives = 3;
let lives = maxLives;
let targetNumber = Math.floor(Math.random() * 10) + 1;

const heartsElement = document.getElementById('hearts');
const messageElement = document.getElementById('message');
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const restartButton = document.getElementById('restart');

const updateHearts = () => {
    heartsElement.textContent = '❤️'.repeat(lives);
};

const resetGame = () => {
    lives = maxLives;
    targetNumber = Math.floor(Math.random() * 10) + 1;
    updateHearts();
    messageElement.textContent = '';
    guessInput.value = '';
    submitButton.style.display = 'inline-block';
    restartButton.style.display = 'none';
};

submitButton.addEventListener('click', () => {
    const guess = parseInt(guessInput.value, 10);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        messageElement.textContent = 'Please enter a number between 1 and 10.';
        return;
    }

    if (guess === targetNumber) {
        messageElement.textContent = '🎉 Congratulations! You guessed the correct number!';
        submitButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
    } else {
        lives--;
        updateHearts();

        if (lives === 0) {
            messageElement.textContent = `💀 Game Over! The correct number was ${targetNumber}.`;
            submitButton.style.display = 'none';
            restartButton.style.display = 'inline-block';
        } else {
            messageElement.textContent = guess < targetNumber
                ? 'Too low! Try again.'
                : 'Too high! Try again.';
        }
    }
});

restartButton.addEventListener('click', resetGame);

resetGame();