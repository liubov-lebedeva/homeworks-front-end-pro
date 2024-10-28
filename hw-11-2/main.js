const textBlock = document.getElementById('textBlock');
const changeColorButton = document.getElementById('changeColorButton');

let isOriginalColor = true;

changeColorButton.addEventListener('click', () => {
    textBlock.style.color = isOriginalColor ? 'red' : 'black';
    isOriginalColor = !isOriginalColor;
});