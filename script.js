const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");
const togglePwd = document.getElementById("togglePwd");

const criteria = {
    length: document.getElementById("length"),
    uppercase: document.getElementById("uppercase"),
    number: document.getElementById("number"),
    special: document.getElementById("special")
};

passwordInput.addEventListener("input", checkStrength);
togglePwd.addEventListener("click", togglePassword);

function checkStrength() {
    const pwd = passwordInput.value;
    let score = 0;

    // Criteria checks
    if (pwd.length >= 8) {
        criteria.length.classList.add("valid");
        score++;
    } else {
        criteria.length.classList.remove("valid");
    }

    if (/[A-Z]/.test(pwd)) {
        criteria.uppercase.classList.add("valid");
        score++;
    } else {
        criteria.uppercase.classList.remove("valid");
    }

    if (/[0-9]/.test(pwd)) {
        criteria.number.classList.add("valid");
        score++;
    } else {
        criteria.number.classList.remove("valid");
    }

    if (/[^A-Za-z0-9]/.test(pwd)) {
        criteria.special.classList.add("valid");
        score++;
    } else {
        criteria.special.classList.remove("valid");
    }

    // Update strength bar
    switch(score) {
        case 0:
        case 1:
            strengthBar.style.width = "25%";
            strengthBar.style.background = "red";
            strengthText.textContent = "Strength: Weak";
            break;
        case 2:
            strengthBar.style.width = "50%";
            strengthBar.style.background = "orange";
            strengthText.textContent = "Strength: Medium";
            break;
        case 3:
            strengthBar.style.width = "75%";
            strengthBar.style.background = "#00ffcc";
            strengthText.textContent = "Strength: Strong";
            break;
        case 4:
            strengthBar.style.width = "100%";
            strengthBar.style.background = "#00ff88";
            strengthText.textContent = "Strength: Very Strong";
            break;
    }
}

function togglePassword() {
    if(passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePwd.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        togglePwd.textContent = "Show";
    }
}
