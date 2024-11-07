const buttonContainer = document.getElementById('button-container');


buttonContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        alert(`Button pressed: ${event.target.textContent}`);
    }
});