/* login-screen - disappears when signed in */
let loginForm = document.querySelector(".login-form");
const loginButton = document.querySelector(".login-form button");

function loginEnter(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  setTimeout(function () {
    loginForm.classList.add("remove");
  }, 2000);
}

loginForm.addEventListener("submit", loginEnter);
