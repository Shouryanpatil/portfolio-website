function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// DARK MODE TOGGLE

function updateThemeButtons(isDark) {
  const icon = isDark ? "☀️" : "🌙";
  document.querySelectorAll(".theme-toggle-btn").forEach((btn) => {
    btn.textContent = icon;
  });
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeButtons(isDark);
}

// Sync the button icon with whatever theme was applied on load
document.addEventListener("DOMContentLoaded", () => {
  const isDark = document.documentElement.classList.contains("dark-mode");
  updateThemeButtons(isDark);
});

// Auto-calculate ongoing role duration so it never needs manual updates
(function () {
  var startDate = new Date(2025, 10, 1); // TODO: set to the month/year you became Jr. Data Analyst (month is 0-indexed: 0=Jan, 10=Nov)
  var span = document.getElementById("current-role-duration");
  if (!span) return;
  var now = new Date();
  var months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());
  if (months < 1) months = 1;
  span.textContent = months + (months === 1 ? " month" : " months") + " (ongoing)";
})();
