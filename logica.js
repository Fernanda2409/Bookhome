
const showRegisterButton = document.getElementById("show-register");
const showLoginButton = document.getElementById("show-login");
const loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");


showRegisterButton.addEventListener("click", function() {
    loginContainer.classList.add("slide-left");
    registerContainer.classList.add("slide-right", "right-changed");
});

showLoginButton.addEventListener("click", function() {
    registerContainer.classList.remove("slide-right", "right-changed");
    loginContainer.classList.remove("slide-left");
});


document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("register-confirm-password").value;


    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    console.log("Registrado: ", name, email, password);
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    console.log("Iniciar sesión con: ", email, password);
});
