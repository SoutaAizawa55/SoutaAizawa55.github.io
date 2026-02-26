// Enhanced functionality for settings, theme toggle, and interactive tools

// Function to toggle the theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    // Save theme preference to local storage
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Load the current theme from local storage on startup
(function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
})();

// Function to initialize interactive tools
function initializeTools() {
    // Code to create and manage interactive tools
}

// Event listener for theme toggle button
const themeToggleButton = document.getElementById('theme-toggle');
if (themeToggleButton) {
    themeToggleButton.addEventListener('click', toggleTheme);
}

// Initialize tools on page load
window.onload = initializeTools;
