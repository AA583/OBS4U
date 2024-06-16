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
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const errorElement = document.getElementById("errorMessage");


// Register form validation
document.querySelector("form").addEventListener("submit", (e) => {
  let isValidUser = false;

  userList.forEach(user => {
    if (user.username === username.value && user.password === password.value) {
      isValidUser = true;
    }
  });

  if (!isValidUser) {
    e.preventDefault();
    errorElement.innerText = "Wrong usernam or password";
    username.focus();
  } else {
    localStorage.setItem("login", JSON.stringify(username.value));
    alert("Sign in successfull!");
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