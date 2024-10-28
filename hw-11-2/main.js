const textBlock = document.getElementById('textBlock');
const changeColorButton = document.getElementById('changeColorButton');


changeColorButton.addEventListener('click', () => textBlock.classList.toggle('textBlockToggled'));