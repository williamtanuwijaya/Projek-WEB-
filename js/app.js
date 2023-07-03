const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const kontainer = document.querySelector(".kontainer");

sign_up_btn.addEventListener("click", () => {
  kontainer.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  kontainer.classList.remove("sign-up-mode");
});
