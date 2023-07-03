const sign_in_btn = document.querySelector("#login-btn");
const sign_up_btn = document.querySelector("#register-btn");
const kontainer = document.querySelector(".kontainer");

sign_up_btn.addEventListener("click", () => {
  kontainer.classList.add("register-mode");
});

sign_in_btn.addEventListener("click", () => {
  kontainer.classList.remove("register-mode");
});
