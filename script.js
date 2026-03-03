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
const quotes = {
    study: [
        "Success in school starts with consistent effort every single day.",
        "Study now so your future self can live comfortably.",
        "Small study sessions build powerful knowledge over time.",
        "Focus during study time and relax without guilt later.",
        "Education is your strongest weapon for the future."
    ],
    confidence: [
        "Believe in yourself even when nobody else does.",
        "You are capable of more than you realize.",
        "Confidence grows every time you push past fear.",
        "Your voice matters and your ideas are valuable.",
        "Trust your journey even if it looks different from others."
    ],
    discipline: [
        "Discipline is choosing long term success over short term comfort.",
        "Motivation fades but discipline stays.",
        "Winners are built through daily habits.",
        "Stay consistent even when you do not feel like it.",
        "Self control today creates success tomorrow."
    ]
};

let currentCategory = "all";
let autoInterval;

function getAllQuotes() {
    return [...quotes.study, ...quotes.confidence, ...quotes.discipline];
}

function setCategory(category) {
    currentCategory = category;
    newQuote();
}

function newQuote() {
    const quoteElement = document.getElementById("quote");
    let selectedQuotes = [];

    if (currentCategory === "all") {
        selectedQuotes = getAllQuotes();
    } else {
        selectedQuotes = quotes[currentCategory];
    }

    const randomIndex = Math.floor(Math.random() * selectedQuotes.length);

    quoteElement.classList.add("fade-out");

    setTimeout(() => {
        quoteElement.textContent = selectedQuotes[randomIndex];
        quoteElement.classList.remove("fade-out");
    }, 500);
}

function startAutoQuotes() {
    autoInterval = setInterval(() => {
        newQuote();
    }, 10000); // every 10 seconds
}

function quoteOfTheDay() {
    const allQuotes = getAllQuotes();
    const today = new Date().getDate();
    const index = today % allQuotes.length;
    document.getElementById("quote").textContent = allQuotes[index];
}

// Start automatically
quoteOfTheDay();
startAutoQuotes();


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