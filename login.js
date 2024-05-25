
document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');

    document.querySelector('.user-signUp-Btn').addEventListener('click', function () {
        const name = signUpForm.querySelector('input[name="name"]').value;
        const email = signUpForm.querySelector('input[name="email"]').value;
        const password = signUpForm.querySelector('input[name="password"]').value;

        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert("Please fill in all required fields: Name, Email, and Password.");
            return;
        }
        function isValidName(name) {
            const regex = /^[a-zA-Z\s]*$/;
            return regex.test(name) && name.length > 1;
        }
        function isValidEmail(email) {
            // Basic email validation using regex
            const emailPattern = /\S+@\S+\.\S+/;
            return emailPattern.test(email);
        }


        if (!isValidName(name)) {
            alert("Error: The entered name is not valid. Please enter a valid name without numbers, symbols, or empty spaces.");
            return;
        }
        if (!isValidEmail(email)) {
            alert("Error: Please enter a valid email address.");
            return; 
        }
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }
        saveUserInfo(name, email, password);

        window.location.href = 'home.html';
    });

    document.querySelector('.user-signIn-Btn').addEventListener('click', function () {
        const email = signInForm.querySelector('input[name="email"]').value;
        const password = signInForm.querySelector('input[name="password"]').value;

        // Retrieve user information from localStorage
        const userInfo = JSON.parse(localStorage.getItem(email));

        if (!userInfo) {
            alert("User with this email does not exist.");
            return;
        }

        // Check if the entered password matches the stored password
        if (password !== userInfo.password) {
            alert("Incorrect password. Please try again.");
            return;
        }

        // Redirect to home page if sign-in is successful
        window.location.href = 'home.html';
    });

    function saveUserInfo(name, email, password) {
        const userKey = email;
        const userInfo = { name, email, password };

        localStorage.setItem(userKey, JSON.stringify(userInfo));

        localStorage.setItem("userEmail", email);
    }
});


const container1 = document.getElementById('container1');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container1.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container1.classList.remove("active");
});