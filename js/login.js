/* login-screen - disappears when signed in */
let loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form Input");
const loginButton = document.querySelector(".login-form button");
const greetings = document.querySelector("h1#greetings");

function loginEnter(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greetings.innerText = `Dear ${username},`;
  loginForm.classList.add("fade-out");
  setTimeout(function () {
    loginForm.classList.add("remove");
  }, 2000);
}
const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", loginEnter);
} else {
  greetings.innerText = `Dear ${savedUsername},`;
}

const home = document.querySelector("#home");
function backHome(savedUsername) {
  if (savedUsername !== null) {
    localStorage.removeItem("username");
    location.reload(true);
  }
}
home.addEventListener("click", backHome);
