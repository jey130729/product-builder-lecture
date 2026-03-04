// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');

/**
 * Updates the theme label based on the current theme.
 * @param {string} theme - The current theme ('dark' or 'light').
 */
const updateLabel = (theme) => {
  themeLabel.textContent = theme === 'dark' ? 'Light' : 'Dark';
};

/**
 * Toggles the theme between dark and light.
 */
const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateLabel(newTheme);
};

// Initialize the label on load
const currentTheme = document.documentElement.getAttribute('data-theme');
updateLabel(currentTheme);

// Add event listener to toggle button
themeToggle.addEventListener('click', toggleTheme);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    const newTheme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    updateLabel(newTheme);
  }
});

console.log('Modern Web App Initialized');
