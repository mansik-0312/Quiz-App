// let currentQuestion = 0;
// let score = 0;

// function loadQuestion() {
//     document.getElementById('progress').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
//     document.getElementById('question').textContent = questions[currentQuestion].question;

//     const optionsContainer = document.getElementById('options');
//     optionsContainer.innerHTML = '';

//     questions[currentQuestion].options.forEach((option) => {
//         const button = document.createElement('button');
//         button.textContent = option;
//         button.classList.add('option');
//         button.onclick = () => checkAnswer(option);
//         optionsContainer.appendChild(button);
//     });

//     document.getElementById('nextButton').classList.add('hidden');
// }

// function checkAnswer(selectedOption) {
//     if (selectedOption === questions[currentQuestion].answer) {
//         score++;
//     }

//     document.getElementById('nextButton').classList.remove('hidden');
//     document.querySelectorAll('.option').forEach((btn) => (btn.disabled = true));
// }

// document.getElementById('nextButton').addEventListener('click', () => {
//     currentQuestion++;
//     if (currentQuestion < questions.length) {
//         loadQuestion();
//     } else {
//         document.getElementById('question').textContent = 'Quiz completed';
//         document.getElementById('options').classList.add('hidden');
//         document.getElementById('nextButton').classList.add('hidden');
//         document.getElementById('score').textContent = `Your score: ${score}/${questions.length}`;
//         document.getElementById('score').classList.remove('hidden');
//     }
// });

// loadQuestion();
