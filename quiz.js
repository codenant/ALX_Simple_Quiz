function checkAnswer() {
    let correctAnswer = "4";
}

let userAnswer = document.querySelector('[checked],[name="quiz"]').value;

if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
} else {
    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
}

let button = document.getElementById("submit-answer").addEventListener('click', () => {
    checkAnswer
});