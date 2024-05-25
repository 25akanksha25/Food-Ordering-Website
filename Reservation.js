document.addEventListener("DOMContentLoaded", function() {
    const reservationForm = document.querySelector('.reservation-form');
    const requestBookingBtn = document.getElementById('requestBookingBtn');

    requestBookingBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form input values
        const dateInput = document.getElementById('date').value;
        const timeInput = document.getElementById('mytime').value;
        const number = document.getElementById('number').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        if (dateInput === "" || timeInput === "" || number === "" || name === "" || email === "" || phone === "") {
            alert("Please enter all required details.");
            return; 
        }

        const selectedDate = new Date(dateInput);
        if (selectedDate.getDay() === 0) {
            alert("We are closed on Sundays. Please choose a different date.");
            return; 
        }

        // Validate the time
        const selectedTime = parseTime(timeInput);
        if (!isValidTime(selectedTime)) {
            alert("Error: The entered timing is not valid with the opening hours. Please re-check the timing.");
            return; 
        }

        // Validate the name
        if (!isValidName(name)) {
            alert("Error: The entered name is not valid. Please enter a valid name without numbers, symbols, or empty spaces.");
            return; 
        }

        // Validate the email
        if (!isValidEmail(email)) {
            alert("Error: Please enter a valid email address.");
            return; 
        }

        // Validate the phone number
        if (!isValidPhoneNumber(phone)) {
            alert("Error: Please enter a valid 10-digit phone number.");
            return; 
        }

        // Display a confirmation alert
        const confirmationMessage = `Your Request has been sent we will confirm your booking shortly!
        Thank You`;
        alert(confirmationMessage);
        window.location.reload();

        // You can perform additional actions here, such as sending the data to a server or storing it in a database
    });
});

function isValidTime(time) {
    // Check if the time is between 9:00 AM and 11:00 PM
    return time >= 9 && time <= 23;
}

function parseTime(time) {
    // Split the time into hours and minutes
    const [hours, minutes] = time.split(':').map(Number);
    // Convert the time to 24-hour format
    return hours + (minutes / 60);
}

function isValidName(name) {
    // Check if the name contains a number, symbol, empty space, or single character
    const regex = /^[a-zA-Z\s]*$/; // Regular expression to match only letters and whitespace
    return regex.test(name.trim()) && name.trim().length > 1; // Check if the name contains only letters and has more than one character
}

function isValidPhoneNumber(phone) {
    // Check if the phone number has exactly 10 digits
    const regex = /^\d{10}$/; // Regular expression to match exactly 10 digits
    return regex.test(phone.trim()); // Check if the phone number matches the pattern
}

function isValidEmail(email) {
    // Basic email validation using regex
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
}
