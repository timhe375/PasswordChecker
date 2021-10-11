//getElementById for inputFields
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

//EventListener for inputFields
input1.addEventListener("keyup", pwChecks);
input2.addEventListener("keyup", pwChecks);

//getElementById for Button
const buttonEl = document.getElementById("showPassword");

//EventListener for Button
buttonEl.addEventListener("click", toggleButton);
// Add these five checks
function pwChecks() {
  if (equalCheck()) {
    lowerCase();
    upperCase();
    numberCheck();
    charCheck();
  } else {
    uncheckAll;
  }
}
//  -Passwords are equal
function equalCheck() {
  if (input1.value === input2.value) {
    const equalPw = document.getElementById("pw-equal");
    equalPw.innerText = "✅";
    return true;
  } else {
    const equalPw = document.getElementById("pw-equal");
    equalPw.innerText = "❌";
  }
}
//  -Password contains at least one lower case character
function lowerCase() {
  let checkInput = input2.value;
  if (/[a-z]/.test(checkInput)) {
    const lowerPw = document.getElementById("pw-lowercase");
    lowerPw.innerText = "✅";
  } else {
    const lowerPw = document.getElementById("pw-lowercase");
    lowerPw.innerText = "❌";
  }
}
//  -Password contains at least one upper case character
function upperCase() {
  let checkInput = input2.value;
  if (/[A-Z]/.test(checkInput)) {
    const upperPw = document.getElementById("pw-uppercase");
    upperPw.innerText = "✅";
  } else {
    const upperPw = document.getElementById("pw-uppercase");
    upperPw.innerText = "❌";
  }
}
//  -Password contains at least one number
function numberCheck() {
  let checkInput = input2.value;
  if (/[0-9]/.test(checkInput)) {
    const numberPW = document.getElementById("pw-numbers");
    numberPW.innerText = "✅";
  } else {
    const numberPW = document.getElementById("pw-numbers");
    numberPW.innerText = "❌";
  }
}
//  -Passwort is at least 10 characters long
function charCheck() {
  if (input1.value.length >= 10 && input2.value.length >= 10) {
    const charPW = document.getElementById("pw-char");
    charPW.innerText = "✅";
  } else {
    const charPW = document.getElementById("pw-char");
    charPW.innerText = "❌";
  }
}
// The first check is always the "equality check" of both passwords
//  -If this first check fails all other checks will be failed automatically
function uncheckAll() {
  const uncheckAll = document.getElementById("pw-equal");
  uncheckAll.innerText = "❌";
  const uncheckAll2 = document.getElementById("pw-lowercase");
  uncheckAll2.innerText = "❌";
  const uncheckAll3 = document.getElementById("pw-uppercase");
  uncheckAll3.innerText = "❌";
  const uncheckAll4 = document.getElementById("pw-numbers");
  uncheckAll4.innerText = "❌";
  const uncheckAll5 = document.getElementById("pw-char");
  uncheckAll5.innerText = "❌";
}
// Run all checks whenever the user types into any of the password inputs

// Add a button that toggles the text in the password fields and the label of the button itself
//  -If the passwords are hidden the text of the button is "Show Passwords"
//  -If the passwords are visible the text of the button is "Hide Passwords"

function toggleButton() {
  if (buttonEl.innerText === "Show Password") {
    buttonEl.innerText = "Hide Password";
    input1.type = "text";
    input2.type = "text";
  } else if (buttonEl.innerText === "Hide Password") {
    buttonEl.innerText = "Show Password";
    input1.type = "password";
    input2.type = "password";
  }
}
