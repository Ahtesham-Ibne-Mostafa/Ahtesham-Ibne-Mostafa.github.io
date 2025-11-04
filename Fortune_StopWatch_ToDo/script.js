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

// Pick a random fortune
const fortuneBox = document.getElementById("fortune-box");
const randomIndex = Math.floor(Math.random() * fortunes.length);
fortuneBox.textContent = fortunes[randomIndex];
console.log("Selected Fortune:", fortunes[randomIndex]);

// Button actions
document.getElementById("green").addEventListener("click", function () {
  fortuneBox.style.color = "#1b5e20";
  fortuneBox.style.backgroundColor = "#e8f5e9";
  fortuneBox.style.borderColor = "#388e3c";
  fortuneBox.style.fontFamily = "'Georgia', serif";
  fortuneBox.style.fontSize = "17px";
});

document.getElementById("yellow").addEventListener("click", function () {
  fortuneBox.style.color = "#f57f17";
  fortuneBox.style.backgroundColor = "#fff9c4";
  fortuneBox.style.borderColor = "#fbc02d";
  fortuneBox.style.fontFamily = "'Comic Sans MS', cursive";
  fortuneBox.style.fontSize = "16px";
});

document.getElementById("blue").addEventListener("click", function () {
  fortuneBox.style.color = "#0d47a1";
  fortuneBox.style.backgroundColor = "#e3f2fd";
  fortuneBox.style.borderColor = "#1976d2";
  fortuneBox.style.fontFamily = "'Courier New', monospace";
  fortuneBox.style.fontSize = "15px";
});

document.getElementById("orange").addEventListener("click", function () {
  fortuneBox.style.color = "#e65100";
  fortuneBox.style.backgroundColor = "#fff3e0";
  fortuneBox.style.borderColor = "#fb8c00";
  fortuneBox.style.fontFamily = "'Trebuchet MS', sans-serif";
  fortuneBox.style.fontSize = "18px";
});
