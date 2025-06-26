const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");


//checks email against a regex string.  
function validateEmail(emailToTest) {
  const emailRegex = /^[a-zA-Z0-9._%~+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(emailToTest);
}

//check password against a regex string to ensure proper formatting
function validatePassword(passwordToTest) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).*$/;
    return passwordRegex.test(passwordToTest);
}

//checks local storage for saved username
let savedUsername = localStorage.getItem("username");
if (savedUsername) {
    username.value = savedUsername;
}




//when user unfocuses username, checks if the input is valid
username.addEventListener("blur", (event) => {
  if (username.validity.valueMissing) {
    username.setCustomValidity("Username must not be blank");
  } else if (username.validity.tooShort) {
    username.setCustomValidity("Username must be at least 5 characters long");
  } else username.setCustomValidity("");
  usernameError.textContent = username.validationMessage;
});

//checks if email is valid when unfocused
email.addEventListener("blur", (event) => {
  if (email.validity.valueMissing) {
    email.setCustomValidity("Email must not be left blank");
  } else if (!validateEmail(email.value)) {
    email.setCustomValidity("Must enter a valid email. Eg: example@email.org");
  } else email.setCustomValidity("");
  emailError.textContent = email.validationMessage;
});


//checks if password is valid when unfocused
password.addEventListener("blur", (event) => {
  if (password.validity.valueMissing) {
    password.setCustomValidity("Password must not be left blank");
  } else if (password.validity.tooShort) {
    password.setCustomValidity("Password must be at least 8 characters long");
  } 
  else if (!validatePassword(password.value)) {
    password.setCustomValidity("Password requires at least 1 capital letter, 1 lower case letter, and 1 number")
  }
  else password.setCustomValidity("");

  passwordError.textContent = password.validationMessage;
});


//checks if confirm password is filled and matches password
confirmPassword.addEventListener("blur", (event) => {
  if (confirmPassword.validity.valueMissing) {
    confirmPassword.setCustomValidity("Must confirm password");
  } else if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity("Does not match password");
  } else confirmPassword.setCustomValidity("");

  confirmPasswordError.textContent = confirmPassword.validationMessage;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();


  //double checks all fields and focuses user on them from top to bottom if they aren't filled
  if (!username.validity.valid) {
    alert("Please fill in a valid username");
    username.focus();
    return;
  }

  if (!email.validity.valid) {
    alert("Please fill in a valid email");
    email.focus();
    return;
  }

  if (!password.validity.valid) {
    alert("Please fill in a valid password");
    password.focus();
    return;
  }

  if (!confirmPassword.validity.valid) {
    alert("Please confirm your password");
    confirmPassword.focus();
    return;
  }


  localStorage.setItem("username", username.value);

  form.reset();
});
