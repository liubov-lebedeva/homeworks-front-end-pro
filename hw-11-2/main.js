const textBlock = document.getElementById('textBlock');
const changeColorButton = document.getElementById('changeColorButton');

let isOriginalColor = true;

changeColorButton.addEventListener('click', () => {
    if (isOriginalColor) {
        textBlock.style.color = 'red';
    } else {
        textBlock.style.color = 'black';
    }
    isOriginalColor = !isOriginalColor;
});