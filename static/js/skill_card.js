// Add event listeners to each skill element to open the card when clicked
const skills = document.querySelectorAll('.skill');
for (const skill of skills) {
  skill.addEventListener('click', (event) => {
    openCard(event.target.dataset.name, event.target.dataset.description);
  });
}

// Open the card and display the skill's name and description
function openCard(name, description) {
  const card = document.querySelector('#skill-card');
  card.querySelector('#skill-name').textContent = name;
  card.querySelector('#skill-description').textContent = description;
  card.classList.add('active'); /* add active class to make card visible */
}

// Add event listener to the close button to close the card when clicked
const closeButton = document.querySelector('.skill-card-close-btn');
closeButton.addEventListener('click', closeCard);

// Add event listener to the document to close the card when the "esc" key is pressed or clicked outside of the card
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeCard();
  }
});
document.addEventListener('click', (event) => {
  if (event.target === document.querySelector('#skill-card')) {
    closeCard();
  }
});

// Close the card by removing the active class
function closeCard() {
  const card = document.querySelector('#skill-card');
  card.classList.remove('active');
}
