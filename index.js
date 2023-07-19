// function ValidateEmail() {
//   var emailAddress = document.getElementById("email");
//   var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

//   if (emailAddress.value.match(mailformat)) {
//     document.getElementById("err").innerHTML = "";
//     localStorage.setItem("emailAdd", emailAddress);
//   } else {
//     document.getElementById("err").innerHTML = "Valid email required";
//   }
// }

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateEmail() {
  const emailInput = document.getElementById("email");
  const validationResult = document.getElementById("validationResult");

  var mailerr = document.getElementById("mailerr");

  const email = emailInput.value.trim();

  if (email === "") {
    validationResult.textContent = "Please enter an email address.";
    mailerr.classList.add("error");
    return;
  }

  if (isValidEmail(email)) {
    validationResult.textContent = "";
    localStorage.setItem("emailAdd", email);
    window.location.href = "./thx.html";
  } else {
    validationResult.textContent = "Valid email required";
    mailerr.classList.add("error");
  }
}

function readEmail() {
  var addEmail = localStorage.getItem("emailAdd");
  document.getElementById("theemail").innerHTML = addEmail;
}
window.onload = readEmail();
