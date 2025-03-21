const correctPassword = "love123";
let wrongAnswers = [];
let currentQuestion = 0;

function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    if (input === correctPassword) {
        document.getElementById("passwordContainer").classList.add("hidden");
        document.getElementById("quizContainer").classList.remove("hidden");
        loadQuestion();
    } else {
        document.getElementById("passwordMessage").classList.remove("hidden");
    }
}

const questions = [
    { question: "What is the best way to express love?", options: ["Giving gifts", "Spending quality time", "Saying sweet words"], answer: 1 },
    { question: "Which of these is a symbol of love?", options: ["Diamond", "Rose", "Star"], answer: 1 },
    { question: "What is the most important thing in a relationship?", options: ["Trust", "Money", "Fame"], answer: 0 },
    { question: "What color is most associated with love?", options: ["Blue", "Red", "Green"], answer: 1 },
    { question: "Which of these is a romantic gesture?", options: ["Giving flowers", "High-five", "Shaking hands"], answer: 0 },
    { question: "What day is commonly celebrated as Valentine’s Day?", options: ["February 14", "March 8", "December 25"], answer: 0 },
    { question: "What does ‘I love you’ mean?", options: ["You’re my friend", "I deeply care about you", "You owe me money"], answer: 1 },
    { question: "Which of these is a classic romantic movie?", options: ["Titanic", "Fast & Furious", "Jaws"], answer: 0 },
    { question: "What is the key to a lasting relationship?", options: ["Communication", "Expensive gifts", "Ignoring each other"], answer: 0 },
    { question: "What is a popular love song theme?", options: ["Heartbreak", "Spaceships", "Banking"], answer: 0 }
];

function loadQuestion() {
    document.getElementById("question").innerText = questions[currentQuestion].question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("btn", "btn-outline-danger");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex !== questions[currentQuestion].answer) {
        wrongAnswers.push({
            question: questions[currentQuestion].question,
            selected: questions[currentQuestion].options[selectedIndex],
            correct: questions[currentQuestion].options[questions[currentQuestion].answer]
        });
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    document.getElementById("quizContainer").innerHTML = "<h1>Quiz Completed!</h1>";
    let finalMessage = `<h3>You made ${wrongAnswers.length} mistakes.</h3>`;
    if (wrongAnswers.length > 0) {
        finalMessage += "<ul class='list-group'>";
        wrongAnswers.forEach(wrong => {
            finalMessage += `<li class='list-group-item'><b>Question:</b> ${wrong.question}<br><b>Your answer:</b> ${wrong.selected}<br><b>Correct answer:</b> ${wrong.correct}</li>`;
        });
        finalMessage += "</ul>";
    }
    document.getElementById("quizContainer").innerHTML += finalMessage;
}

