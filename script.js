//getElementById for inputFields
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

//EventListener for inputFields
input1.addEventListener("click", pwChecks);
input2.addEventListener("click", pwChecks);

//getElementById for Button
const buttonEl = document.getElementById("showPassword");

//EventListener for Button
buttonEl.addEventListener("click", toggleButton);
// Add these five checks
function pwChecks() {
  equalCheck();
  if (equalCheck()) {
    charCheck;
  } else {
    uncheckAll;
  }
}
//  -Passwords are equal
function equalCheck() {
  if (input1.value == input2.value) {
    const equalPw = document.getElementById("pw-equal");
    equalPw.innerText = "✅";
    return true;
  } else {
    const equalPw = document.getElementById("pw-equal");
    equalPw.innerText = "❌";
  }
}
//  -Password contains at least one lower case character
function lowerCase() {}
//  -Password contains at least one upper case character
function upperCase() {}
//  -Password contains at least one number
function numberCheck() {}
//  -Passwort is at least 10 characters long
function charCheck() {
  if (input1.value > 10 && input2.value > 10) {
    const equalPw = document.getElementById("pw-equal");
    equalPw.innerText = "✅";
    return true;
  } else {
    const equalPw = document.getElementById("pw-equal");
    equalPw.innerText = "❌";
  }
}
// The first check is always the "equality check" of both passwords
//  -If this first check fails all other checks will be failed automatically
function uncheckAll() {}
// Run all checks whenever the user types into any of the password inputs

// Add a button that toggles the text in the password fields and the label of the button itself
//  -If the passwords are hidden the text of the button is "Show Passwords"
//  -If the passwords are visible the text of the button is "Hide Passwords"

function toggleButton() {
  if (buttonEl.innerText === "Show Passwords") {
    buttonEl.innerText = "Hide Password";
    input1.type = "text";
    input2.type = "text";
  } else if (buttonEl.innerText === "Hide Password") {
    buttonEl.innerText = "Show Password";
    input1.type = "password";
    input2.type = "password";
  }
}
