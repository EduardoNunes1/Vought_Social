function submitForm() {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const emailInput = document.querySelector('input[type="text"]');
    const rememberCheckbox = document.querySelector('input[type="checkbox"]');

    togglePassword.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.innerHTML = '<i class="far fa-eye"><img src="src/img/olhinho-fechado.png"></i>';
        } else {
            passwordInput.type = 'password';
            togglePassword.innerHTML = '<i class="far fa-eye-slash"><img src="src/img/olhinho-aberto.png"></i>';
        }
    });

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Check if the email and password match the required credentials
    if (email === 'brasiasodiklk' && password === 'asdjlaksd' && rememberCheckbox.checked) {
        // Redirect to the home page
        window.location.href = 'path-to-your-home-page.html';
    } else {
        alert('Invalid email, password, or checkbox not checked!');
    }
}