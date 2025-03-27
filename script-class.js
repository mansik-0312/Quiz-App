import { questions } from './questionData.js';

// Question class
class Question {
    constructor(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
    isCorrectAnswer(selectedOption) {
        return selectedOption === this.answer;
    }
}

class Quiz {
    constructor(questions) {
        this.questions = questions.map(q => new Question(q.question, q.options, q.answer));
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.loadQuestion();
    }

    loadQuestion() {
        if (this.currentQuestionIndex < this.questions.length) {
            const currentQuestion = this.questions[this.currentQuestionIndex];
            document.getElementById('progress').textContent = `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;
            document.getElementById('question').textContent = currentQuestion.question;

            const optionsContainer = document.getElementById('options');
            optionsContainer.innerHTML = '';

            currentQuestion.options.forEach((option) => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option');
                button.onclick = () => this.checkAnswer(option);
                optionsContainer.appendChild(button);
            });
            document.getElementById('nextButton').classList.add('hidden');
        } else {
            this.showResults();
        }
    }
    checkAnswer(selectedOption) {
        if (this.questions[this.currentQuestionIndex].isCorrectAnswer(selectedOption)) {
                    this.score++;
                }
            
        document.getElementById('nextButton').classList.remove('hidden');
        document.querySelectorAll('.option').forEach((btn) => (btn.disabled = true));
    }
    nextQuestion() {
        this.currentQuestionIndex++;
        this.loadQuestion();
    }
    showResults() {
        document.getElementById('question').textContent = 'Quiz completed!';
        document.getElementById('options').classList.add('hidden');
        document.getElementById('nextButton').classList.add('hidden');
        document.getElementById('score').textContent = `Your score: ${this.score}/${this.questions.length}`;
        document.getElementById('score').classList.remove('hidden');
    }
}

const quiz = new Quiz(questions);

document.getElementById('nextButton').addEventListener('click', () => quiz.nextQuestion());
