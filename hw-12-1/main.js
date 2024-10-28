let yourLink = '';
const enterLink = () => {
    yourLink = prompt('Enter link', 'https://')
}

const followLink = () => {
    yourLink ? window.location.href = yourLink : alert('First enter the link.');
}