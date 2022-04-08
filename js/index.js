const form = document.getElementById("form");
var firstname = document.getElementById("first-name");
var lastname = document.getElementById("last-name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var claim = document.getElementById("claim");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  var firstnameValue = firstname.value.trim();
  var lastnameValue = lastname.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();

  if (firstnameValue === "") {
    setErrorFor(firstname, "First Name connot be empty");
  } else if (firstnameValue.length < 3) {
    setErrorFor(firstname, "First Name must be at least 3 characters");
  } else {
    setSuccessFor(firstname);
  }
  if (lastnameValue === "") {
    setErrorFor(lastname, "Last Name connot be empty");
  } else if (lastnameValue.length < 3) {
    setErrorFor(lastname, "Last Name must be at least 3 characters");
  } else {
    setSuccessFor(lastname);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Looks like this is not an email");
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === "") {
    setErrorFor(password, "Password connot be empty");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password must be larger than 8 chars");
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  small.innerText = message;
  formGroup.className = "form-group error";
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

claim.addEventListener("click", function () {
  firstname.removeAttribute("placeholder");
  lastname.removeAttribute("placeholder");
  email.setAttribute("placeholder", "email@example.com");
  password.removeAttribute("placeholder");
});
