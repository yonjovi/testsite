const grid = document.querySelector('#skills-grid');
const masonry = new Masonry(grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-item',
  gutter: 20,
  horizontalOrder: true,
  fitWidth: true
});

const skills = document.querySelectorAll(".grid-item");

// Add event listener for each skill
skills.forEach(skill => {
  skill.addEventListener("click", () => {
    // Get skill name and description
    const skillName = skill.dataset.name;
    const skillDescription = skill.dataset.description;

    // Update skill card with skill name and description
    document.querySelector("#skill-name").innerHTML = skillName;
    document.querySelector("#skill-description").innerHTML = skillDescription;

    // Show skill card
    document.querySelector("#skill-card").style.display = "block";

    // Animate skill card
    document.querySelector("#skill-card").classList.add("show");
  });
});

// Add event listener to close button
document.querySelector(".skill-card-close-btn").addEventListener("click", () => {
  // Hide skill card
  document.querySelector("#skill-card").style.display = "none";

  // Remove animation from skill card
  document.querySelector("#skill-card").classList.remove("show");
});

// Add event listener for window resize
window.addEventListener('resize', () => {
    masonry.layout();
});
