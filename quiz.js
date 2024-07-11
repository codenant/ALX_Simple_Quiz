function checkAnswer() {
    let correctAnswer = "4";

    document.querySelectorAll('[name="quiz"]').forEach(radio => {
        if (radio.checked)
       userAnswer = radio.value
    });
    
    if (userAnswer === correctAnswer) {
        document.querySelector('#feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);