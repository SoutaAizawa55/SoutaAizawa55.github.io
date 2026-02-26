// script.js

// Function to validate forms
function validateForm(form) {
    let isValid = true;
    // Check required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!field.value) {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });
    return isValid;
}

// Function for CSRF protection
function getCsrfToken() {
    return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
}

// Function to sanitize user inputs
function sanitizeInput(input) {
    const temp = document.createElement('div');
    temp.textContent = input;
    return temp.innerHTML; // This will escape HTML characters
}

// Example usage
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission for validation
    if (validateForm(form)) {
        const csrfToken = getCsrfToken();
        // Create data object with sanitized inputs
        const data = { 
            input: sanitizeInput(form.elements['input'].value),
            csrfToken: csrfToken
        };
        // Further processing...
    }
});