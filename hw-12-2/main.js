const buttonContainer = document.getElementById('buttonContainer');


buttonContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        alert(`Клікнуто на кнопці: ${event.target.textContent}`);
    }
});