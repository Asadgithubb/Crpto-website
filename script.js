document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle registration form submission
    const registrationForm = document.getElementById("registration-form");
    const registrationResult = document.getElementById("registration-result");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Here you can send the registration data to your server using fetch or other methods
        // For demonstration purposes, I'll just display the registration data
        registrationResult.innerHTML = `
            <p>Registration Successful!</p>
            <p>Username: ${username}</p>
            <p>Email: ${email}</p>
        `;
    });
});
