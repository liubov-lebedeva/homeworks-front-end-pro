document.getElementById('form-contact-box').addEventListener('submit', function(event) {
    event.preventDefault();

    function displayError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    function clearErrors() {
        document.getElementById('name-error').textContent = '';
        document.getElementById('message-error').textContent = '';
        document.getElementById('phone-error').textContent = '';
        document.getElementById('email-error').textContent = '';
    }

    clearErrors();

    let isValid = true;

    const name = document.getElementById('name').value.trim();
    if (!name) {
        displayError('name-error', 'Name is required.');
        isValid = false;
    }

    const message = document.getElementById('message').value.trim();
    if (message.length < 5) {
        displayError('message-error', 'Message must be at least 5 characters long.');
        isValid = false;
    }

    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
        displayError('phone-error', 'Phone number must start with +380 and contain 12 digits.');
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError('email-error', 'Please enter a valid email with @ and a dot.');
        isValid = false;
    }

    if (isValid) {
        console.log(`
        Name: ${name}
        Message: ${message}
        Phone: ${phone}
        Email: ${email}`);
        document.getElementById('form-contact-box').reset();
    }
});