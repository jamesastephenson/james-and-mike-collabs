const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConf = document.getElementById("passwordConf");

function CheckRequired(inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i].value === "") {
      inputArr[i].className = "red";
    } else {
      inputArr[i].className = "green";
    }
  }
}

function CheckEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //do not forget to use .value
  if (re.test(input.value.trim())) {
    input.className = "green";
  } else {
    input.className = "red";
  }
}

function CheckPassword(password1, password2) {
  if (password1.value !== password2.value || password2.value === "") {
    password2.className = "red";
  } else {
    password2.className = "green";
  }
}

function SubmitForm() {
  alert("YOU DID IT");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  CheckRequired([name, email, password, passwordConf]);
  CheckEmail(email);
  CheckPassword(password, passwordConf);

  if (
    name.className === "green" &&
    email.className === "green" &&
    password.className === "green" &&
    passwordConf.className === "green"
  ) {
    SubmitForm();
  }
});
