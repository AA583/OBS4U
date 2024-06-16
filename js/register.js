// Log out
localStorage.removeItem("login");
loggedInButton.classList.add("d-none");
notLoggedInButton.classList.remove("d-none");

let userList;

try {
  userList = localStorage.getItem("user") === null ? [] : JSON.parse(localStorage.getItem("user"));
} catch (error) {
  console.error("error")
}

const username = document.getElementById("usernameInput");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");
const showPassword = document.getElementById("showPassword");
const errorElement = document.getElementById("errorMessage");


// Register form validation
document.querySelector("form").addEventListener("submit", (e) => {
  let messages = [];

  if (password.value.length < 6) {
    messages.push("Password must be longer than 6 characters");
  } else if (password.value !== passwordConfirmation.value) {
    messages.push("Passwords do not match");
  } else {
    userList.forEach(user => {
      if (user.username === username.value) {
        messages.push("Username already exists");
      } else if (user.email === email.value) {
        messages.push("This email is already used");
      }
    });
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages[0];
  } else {
    userList.push({
      username: username.value,
      email: email.value,
      password: password.value
    });
    localStorage.setItem("user", JSON.stringify(userList));
    alert("Sign up successfull!");
  }
});

// Show password function
showPassword.addEventListener("change", () => {
  if (showPassword.checked) {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});