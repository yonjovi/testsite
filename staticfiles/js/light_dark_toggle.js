// Get the dark mode toggle button
const toggle = document.querySelector('.dark-mode-toggle-label');
// Get the dark mode toggle checkbox
const checkbox = document.querySelector('#dark-mode-toggle-checkbox');
// Get the dark mode toggle icon
const icon = document.querySelector('.dark-mode-toggle-icon');

// Toggle the icons and dark mode when the button is clicked
toggle.addEventListener('click', () => {
  // If dark mode is enabled
  if (checkbox.checked) {
    // Disable dark mode
    document.body.classList.remove('dark-mode');
    // Set the icon to the light mode icon
    icon.innerHTML = '🌞';
  } else {
    // Enable dark mode
    document.body.classList.add('dark-mode');
    // Set the icon to the dark mode icon
    icon.innerHTML = '🌚';
  }
});