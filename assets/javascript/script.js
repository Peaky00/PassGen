document.getElementById("generate-button").addEventListener("click", generatePassword);

function generatePassword() {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+";

    let password = "";
    let availableChars = "";

    const length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

    if (isNaN(length) || length < 8 || length > 128) {
        alert("Please enter a valid password length.");
        return;
    }

    if (confirm("Include lowercase characters?")) {
        availableChars += lowercaseChars;
    }

    if (confirm("Include uppercase characters?")) {
        availableChars += uppercaseChars;
    }

    if (confirm("Include numeric characters?")) {
        availableChars += numericChars;
    }

    if (confirm("Include special characters?")) {
        availableChars += specialChars;
    }

    if (availableChars === "") {
        alert("You must select at least one character type.");
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars.charAt(randomIndex);
    }

    document.getElementById("password-display").textContent = "Generated Password: " + password;
}