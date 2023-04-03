// Get the body element
const body = document.querySelector('body');

// Get the user's preferred color scheme
const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Apply the appropriate styles based on the color scheme
if (colorScheme === 'dark') {
  body.classList.add('dark-mode');
} else {
  body.classList.remove('dark-mode');
}

//Listen to changes
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addEventListener('change', (e) => {
  if (e.matches) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});