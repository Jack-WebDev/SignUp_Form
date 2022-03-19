
const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector(".error");

  errorDisplay.innerText = message;
  formControl.className = "form-control error";
  //formControl.classList.remove('input');
};
const setSuccess = (element) => {
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector(".error");

  errorDisplay.innerText = "";
  formControl.className = "form-control success";

  // formControl.classList.remove('error');
};

const validateInputs = () => {
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (fnameValue === "") {
    setError(fname, "First Name is required");
  } else {
    setSuccess(fname);
  }
  if (lnameValue === "") {
    setError(lname, "Last Name is required");
  } else {
    setSuccess(lname);
  }
  if (emailValue === "") {
    setError(email, "Email is required");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else {
    setSuccess(password);
  }
};
