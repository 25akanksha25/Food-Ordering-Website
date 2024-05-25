document.addEventListener("DOMContentLoaded", function() {
    const reservationForm = document.querySelector('.message-box');
  
    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validate the name
        if (!isValidName(name)) {
            alert("Error: The entered name is not valid. Please enter a valid name without numbers, symbols, or empty spaces.");
            return; 
        }
  
        // Validate the email
        if (!isValidEmail(email)) {
            alert("Error: The entered email is not valid. Please enter a valid email address.");
            return; 
        }
  
        // Display a confirmation alert
        const confirmationMessage = `Your message has been sent!`;
        alert(confirmationMessage);
        window.location.reload();
  
    });
});

function isValidName(name) {
    const regex = /^[A-Za-z]+(?: [A-Za-z]+)*$/; 
    return regex.test(name.trim()) && name.trim().length > 1;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}