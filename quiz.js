function checkAnswer() {
    let correctAnswer = "4";
}

let userAnswer = document.querySelector('[name="quiz"]').value;

if (correctAnswer = userAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
} else {
    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
}

let button = document.getElementById("submit-answer").addEventListener('click', () => {
    checkAnswer
});