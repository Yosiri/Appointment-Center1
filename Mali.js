document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Basic form validation
        const name = document.getElementById('signup-name').value;
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        const repeatPassword = document.getElementById('repeat-password').value;

        if (!name || !username || !password || !repeatPassword) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== repeatPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Additional validation or form submission logic can be added here

        // For demonstration purposes, you can log the form data to the console
        console.log('Name:', name);
        console.log('Username:', username);
        console.log('Password:', password);

        // Add your logic to handle form submission, such as sending data to a server

        // Optionally, redirect to another page after successful signup
        window.location.href = 'index.html';
    });
});
