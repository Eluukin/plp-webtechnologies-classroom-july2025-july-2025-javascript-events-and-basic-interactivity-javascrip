// ==============================
// INTERACTIVE FEATURE 1
// Button Click Counter
// ==============================

let count = 0;
const clickBtn = document.getElementById("clickBtn");
const clickDisplay = document.getElementById("clickCount");

clickBtn.addEventListener("click", function () {
  count++;
  clickDisplay.textContent = count;
});


// ==============================
// INTERACTIVE FEATURE 2
// Background Color Changer
// ==============================

const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});


// ==============================
// CUSTOM FORM VALIDATION
// ==============================

const form = document.getElementById("myForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (event) {

  // Stop form from submitting automatically
  event.preventDefault();

  // Get input values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Clear previous error messages
  errorMsg.textContent = "";
  errorMsg.style.color = "red";

  // Custom validation checks
  if (name === "") {
    errorMsg.textContent = "Name is required!";
    return;
  }

  if (email === "") {
    errorMsg.textContent = "Email is required!";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters!";
    return;
  }

  // If all validations pass
  alert("Form submitted successfully!");
  form.reset();
});
