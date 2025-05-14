document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.querySelector('.eye-icon');
    const passwordInput = document.querySelector('#password');
    const eyeIcon = document.querySelector('#eyeIcon');

    togglePassword.addEventListener('click', function() {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        eyeIcon.classList.toggle('fa-eye-slash', isPassword);
        eyeIcon.classList.toggle('fa-eye', !isPassword);
    });
});
