document.addEventListener("DOMContentLoaded", function() {
    const saveAddressButton = document.querySelector('.address-order-button');
    const placeOrderButton = document.querySelector('.place-order-button');

    // Save Address Button
    saveAddressButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Get form elements for billing form
        const name = document.getElementById('name').value.trim();
        const streetAddress = document.getElementById('street-address').value.trim();
        const townCity = document.getElementById('town-city').value.trim();
        const phone = document.getElementById('phone').value.trim();

        // Check if required fields are empty
        if (name === '' || streetAddress === '' || townCity === '' || phone === '') {
            alert('Please fill in all required fields in the Billing Details.');
            return;
        }

        // Validation functions
        function isValidName(name) {
            const regex = /^[a-zA-Z\s]*$/;
            return regex.test(name) && name.length > 1;
        }

        function isValidPhoneNumber(phone) {
            const regex = /^\d{10}$/;
            return regex.test(phone);
        }

        if (townCity.length < 4) {
            alert('Please enter a valid town/city.');
            return;
        }

        if (!isValidName(name)) {
            alert("Error: The entered name is not valid. Please enter a valid name without numbers, symbols, or empty spaces.");
            return;
        }

        if (!isValidPhoneNumber(phone)) {
            alert("Error: Please enter a valid 10-digit phone number.");
            return;
        }

        alert('Billing address saved successfully!');
    });

    // Place Order Button
    placeOrderButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Get form elements for billing form
        const name = document.getElementById('name').value.trim();
        const streetAddress = document.getElementById('street-address').value.trim();
        const townCity = document.getElementById('town-city').value.trim();
        const phone = document.getElementById('phone').value.trim();

        // Get form elements for shipping form
        const shipFirstName = document.getElementById('ship-first-name').value.trim();
        const shipLastName = document.getElementById('ship-last-name').value.trim();
        const shipAddress = document.getElementById('ship-address').value.trim();
        const shipPhone = document.getElementById('ship-phone').value.trim();

        // Get selected payment method
        const paymentMethod = document.querySelector('input[name="payment-method"]:checked');

        // Check if either billing or shipping form is filled
        const isBillingFormFilled = name !== '' && streetAddress !== '' && townCity !== '' && phone !== '';
        const isShippingFormFilled = shipFirstName !== '' && shipLastName !== '' && shipAddress !== '' && shipPhone !== '';

        // Check if any required fields in billing or shipping form are invalid
        if (!isBillingFormFilled && !isShippingFormFilled) {
            alert('Please fill in either the Billing Details or the Shipping Details.');
            return;
        }

        if (!paymentMethod) {
            alert('Please select a payment method.');
            return;
        }
        if (paymentMethod.value === 'cash') {
            window.location.href = "Cash.html";
        } else if (paymentMethod.value === 'paypal') {
            window.location.href = "error.html"; // Replace with the URL of your PayPal page
        }
    });
});
