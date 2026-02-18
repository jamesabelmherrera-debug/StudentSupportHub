// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Show/Hide Study Tips
function toggleTips() {
    const tips = document.getElementById("tips");
    if (tips.style.display === "none") {
        tips.style.display = "block";
    } else {
        tips.style.display = "none";
    }
}

// Pomodoro Timer
let timeLeft = 1500; // 25 minutes
let timerInterval;

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimer();
            } else {
                clearInterval(timerInterval);
                alert("Time's up! Take a break.");
                timerInterval = null;
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 1500;
    updateTimer();
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").textContent =
        `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Motivation Quotes
const quotes = [
    "Success starts with self-discipline.",
    "Small progress is still progress.",
    "Believe in yourself.",
    "Stay focused and never give up.",
    "You are capable of amazing things."
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}

// Contact Form Validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return false;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    return false; 
}