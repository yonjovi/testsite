// Select all the links in the navigation menu
const links = document.querySelectorAll('nav a');

// Add a click event listener to each link
links.forEach(link => {
  link.addEventListener('click', e => {
    // Prevent the default link behavior
    e.preventDefault();

    // Get the target element for the link (e.g. "#about")
    const target = document.querySelector(e.target.getAttribute('href'));

    // Calculate the distance from the top of the page to the target element
    const top = target.offsetTop;

    // Use window.scrollTo() to smoothly scroll the page to the target element
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  });
});

// Get the navbar element
const navbar = document.querySelector('.navbar');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // If the window has been scrolled down more than the navbar, add the sticky class
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
