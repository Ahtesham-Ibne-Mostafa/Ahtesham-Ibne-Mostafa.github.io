"use strict";

const fortunes = [
    "You will have a pleasant surprise soon.",
    "A thrilling time is in your near future.",
    "Now is the time to try something new.",
    "You will achieve your dreams through persistence.",
    "A new opportunity will present itself today.",
    "Good news will come to you from far away.",
    "Your hard work will soon pay off.",
    "Someone you care about is thinking of you.",
    "Adventure awaits you this weekend!",
    "Happiness is coming your way."
];

// Themes for the fortune box
const themes = [
    {
        backgroundColor: "#12d640",
        color: "#fff",
        borderColor: "#ee0000ff",
        fontFamily: "Arial, sans-serif"
    },
    {
        backgroundColor: "#f1c40f",
        color: "#000",
        borderColor: "#00aaffff",
        fontFamily: "Georgia, serif"
    },
    {
        backgroundColor: "#3498db",
        color: "#fff",
        borderColor: "#ff9900ff",
        fontFamily: "'Courier New', monospace"
    },
    {
        backgroundColor: "#e67e22",
        color: "#fff",
        borderColor: "#00ff00ff",
        fontFamily: "'Times New Roman', Times, serif"
    }
];

// Function to change the fortune
function changeFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortuneBox = document.getElementById("fortune-box");
    fortuneBox.textContent = fortunes[randomIndex];
}

// Function to apply a theme to the fortune box
function applyTheme(theme) {
    const fortuneBox = document.getElementById("fortune-box");
    fortuneBox.style.backgroundColor = theme.backgroundColor;
    fortuneBox.style.color = theme.color;
    fortuneBox.style.borderColor = theme.borderColor;
    fortuneBox.style.fontFamily = theme.fontFamily;
}

// event listeners to the color buttons
document.getElementById("green").addEventListener("click", function () {
    applyTheme(themes[0]);
});
document.getElementById("yellow").addEventListener("click", function () {
    applyTheme(themes[1]);
});
document.getElementById("blue").addEventListener("click", function () {
    applyTheme(themes[2]);
});
document.getElementById("orange").addEventListener("click", function () {
    applyTheme(themes[3]);
});

// Add event listener to the Random button
document.getElementById("random-btn").addEventListener("click", function () {
    // Pick a random fortune
    changeFortune();
    // Pick a random theme
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    applyTheme(randomTheme);
});

// Initialize with a random fortune on page load
changeFortune();