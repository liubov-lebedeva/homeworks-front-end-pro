let getImage = () => {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    return `images/${randomNumber}.jpg`;
}

const img = document.getElementById('randomImage');


window.addEventListener('load', () => {
        img.src = getImage();
    }
);