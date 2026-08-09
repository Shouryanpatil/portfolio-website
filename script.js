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
