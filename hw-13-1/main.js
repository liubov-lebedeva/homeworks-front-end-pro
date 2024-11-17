const regex = {
    name: /^[a-zA-Z\s]+$/,
    phone: /^\+380\d{9}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: /\w{5}/
};

function validateField(regex, fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    const errorElement = document.getElementById(`${fieldId}-error`);

    if (!regex.test(value)) {
        errorElement.textContent = errorMessage;
        return false;
    }
    errorElement.textContent = '';
    return true;
}


function addDynamicErrorClearing(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    field.addEventListener('input', () => {
        errorElement.textContent = '';
    });
}

['name', 'message', 'phone', 'email'].forEach(addDynamicErrorClearing);


document.getElementById('form-contact-box').addEventListener('submit', function (event) {
    event.preventDefault();


    const isNameValid = validateField(regex.name, 'name', 'Name must only contain letters and spaces.');
    const isMessageValid = validateField(regex.message, 'message', 'Message must be at least 5 characters long.');
    const isPhoneValid = validateField(regex.phone, 'phone', 'Phone number must start with +380 and contain 12 digits.');
    const isEmailValid = validateField(regex.email, 'email', 'Please enter a valid email with @ and a dot.');

    if (isNameValid && isMessageValid && isPhoneValid && isEmailValid) {
        const name = document.getElementById('name').value.trim();
        const message = document.getElementById('message').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();

        console.log(`
        Name: ${name}
        Message: ${message}
        Phone: ${phone}
        Email: ${email}
        `);

        document.getElementById('form-contact-box').reset();
    }
});