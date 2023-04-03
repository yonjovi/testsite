// Set up the canvas element and the context
const canvas = document.getElementById('skill-card-canvas');
const ctx = canvas.getContext('2d');

// Set the canvas size to match the skill card element
canvas.width = document.getElementById('skill-card').offsetWidth;
canvas.height = document.getElementById('skill-card').offsetHeight;

// Create an array of characters to use in the animation
const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

// Create a function to generate a random character from the array
function getRandomCharacter() {
  return characters[Math.floor(Math.random() * characters.length)];
}

// Create the animation loop
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Loop through the rows and columns of the canvas
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      // Generate a random character from the array
      const character = getRandomCharacter();

      // Set the font and style for the character
      ctx.font = '20px sans-serif';
      ctx.fillStyle = '#00FF00';

      // Draw the character on the canvas
      ctx.fillText(character, i * 10, j * 20);
    }
  }

  // Repeat the animation loop
  requestAnimationFrame(animate);
}

// Start the animation loop when the skill card is opened
document.getElementById('skill-card').addEventListener('click', animate);

// Stop the animation loop when the skill card is closed
document.getElementById("skill-card").addEventListener("click", function(event) {
    if (event.target.className === "skill-card-close-btn") {
    cancelAnimationFrame(animationId);
    }
});