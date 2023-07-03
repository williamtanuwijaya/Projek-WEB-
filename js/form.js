const login_btn = document.querySelector("#login-btn");
const register_btn = document.querySelector("#register-btn");
const kontainer = document.querySelector(".kontainer");

register_btn.addEventListener("click", () => {
  kontainer.classList.add("register-mode");
});

login_btn.addEventListener("click", () => {
  kontainer.classList.remove("register-mode");
});
