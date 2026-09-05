// ==========================================
// KCYF WEBSITE LAUNCH CONFIGURATION
// ==========================================

// Countdown duration in seconds
const COUNTDOWN_TIME = 10;

// Official KCYF website
const WEBSITE_URL = "https://catholic-youth-kurunegala.com";


// ==========================================
// ELEMENTS
// ==========================================

const launchScreen = document.getElementById("launchScreen");
const countdownScreen = document.getElementById("countdownScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const launchBtn = document.getElementById("launchBtn");
const countdownElement = document.getElementById("countdown");


// ==========================================
// CREATE BACKGROUND PARTICLES
// ==========================================

const particlesContainer = document.getElementById("particles");

for (let i = 0; i < 50; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    const size = 2 + Math.random() * 5;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particlesContainer.appendChild(particle);
}


// ==========================================
// LAUNCH BUTTON
// ==========================================

launchBtn.addEventListener("click", () => {

    launchBtn.disabled = true;

    // Hide launch screen
    launchScreen.classList.add("hidden");

    // Show countdown
    countdownScreen.classList.remove("hidden");

    let timeLeft = COUNTDOWN_TIME;

    countdownElement.textContent = timeLeft;

    const countdownInterval = setInterval(() => {

        timeLeft--;

        countdownElement.textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(countdownInterval);

            showWelcome();

        }

    }, 1000);

});


// ==========================================
// WELCOME SCREEN
// ==========================================

function showWelcome() {

    countdownScreen.classList.add("hidden");

    welcomeScreen.classList.remove("hidden");

    // Redirect after welcome animation
    setTimeout(() => {

        window.location.href = WEBSITE_URL;

    }, 5000);

}
