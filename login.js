function togglePassword() {
    let passwordInput = document.getElementById("password");
    let eyeIcon = document.getElementById("eyeIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash"); // Change to eye-slash icon
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye"); // Change back to eye icon
    }
}
