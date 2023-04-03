const subheader = document.querySelector('.section-subheader');
const colors = ['red', 'orange', 'green', 'blue', 'indigo', 'violet'];
let currentColorIndex = 0;

setInterval(() => {
  subheader.style.color = colors[currentColorIndex];
  currentColorIndex = currentColorIndex === colors.length - 1 ? 0 : currentColorIndex + 1;
}, 500);
