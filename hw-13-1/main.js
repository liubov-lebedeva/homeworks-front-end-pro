document.getElementById('form-contact-box').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting to a server

    // Helper function to display an error message
    function displayError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

// Helper function to clear all error messages
    function clearErrors() {
        document.getElementById('name-error').textContent = '';
        document.getElementById('message-error').textContent = '';
        document.getElementById('phone-error').textContent = '';
        document.getElementById('email-error').textContent = '';
    }
    // Clear all error messages initially
    clearErrors();

    let isValid = true; // Flag to track if all fields are valid

    // Validate Name
    const name = document.getElementById('name').value.trim();
    if (!name) {
        displayError('name-error', 'Name is required.');
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value.trim();
    if (message.length < 5) {
        displayError('message-error', 'Message must be at least 5 characters long.');
        isValid = false;
    }

    // Validate Phone Number (must start with +380 and be 12 digits long)
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^\+380\d{9}$/; // +380 followed by exactly 9 digits
    if (!phoneRegex.test(phone)) {
        displayError('phone-error', 'Phone number must start with +380 and contain 12 digits.');
        isValid = false;
    }

    // Validate Email (must contain "@" and a dot)
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex pattern
    if (!emailRegex.test(email)) {
        displayError('email-error', 'Please enter a valid email with @ and a dot.');
        isValid = false;
    }

    // If all fields are valid, log the data to the console
    if (isValid) {
        console.log(`
        Name: ${name}
        Message: ${message}
        Phone: ${phone}
        Email: ${email}`);
        document.getElementById('form-contact-box').reset(); // Clear form fields
    }
});