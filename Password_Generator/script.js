let InputSlider = document.getElementById("scroll");
let slideValue = document.getElementById("slide-value");

let PasswordBox = document.getElementById("box");

let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");

let Button = document.getElementById("genBtn");
let copyPass = document.getElementById("copyPass");

slideValue.textContent = InputSlider.value;

InputSlider.addEventListener("input", () => {
    slideValue.textContent = InputSlider.value;
});

Button.addEventListener("click", () => {
    PasswordBox.value = generatePassword();
});

let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let tNum = "0123456789";
let sym = "!~@#$%&*_?";

function generatePassword() {
    let passvalue = "";
    let allCharacters = "";

    allCharacters += lowercase.checked ? lowerChar : "";
    allCharacters += uppercase.checked ? upperChar : "";
    allCharacters += numbers.checked ? tNum : "";
    allCharacters += symbols.checked ? sym : "";

    if (allCharacters === "") {
        return passvalue;
    }

    for (let i = 0; i < InputSlider.value; i++) {
        passvalue += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }

    return passvalue;
}

copyPass.addEventListener("click", () => {
    if (PasswordBox.value !== "") {
        navigator.clipboard.writeText(PasswordBox.value);

        // Swap icon to 'done' temporarily
        copyPass.innerText = "done";
        copyPass.title = "Copied Successfully";

        setTimeout(() => {
            copyPass.innerText = "content_copy";
            copyPass.title = "";
        }, 2000);
    }
});