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
