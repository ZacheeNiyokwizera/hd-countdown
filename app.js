// Target date: 11 July 2025 at midnight
const targetDate = new Date("2025-07-11T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "The day has arrived!";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById(
    "countdown"
  ).innerText = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

// Update countdown immediately and then every second
updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);

let myQuotes = [
  "The future belongs to those who believe in the beauty of their dreams.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Believe you can and you're halfway there.",
  "The only way to do great work is to love what you do.",
  "Your time is limited, so don't waste it living someone else's life.",
];
// display a random quote

let quoteElement = document.getElementById("quote");
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * myQuotes.length);
  quoteElement.innerText = myQuotes[randomIndex];
}
// Display a random quote immediately and then every 5 seconds

setInterval(displayRandomQuote, 2000);
