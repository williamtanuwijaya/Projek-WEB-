const login_btn = document.querySelector("#login-btn");
const register_btn = document.querySelector("#register-btn");
const kontainer = document.querySelector(".kontainer");
const btnMenuLogin = document.getElementById("btnMenuLogin");
const btnMenuRegister = document.getElementById("btnMenuRegister");

register_btn.addEventListener("click", () => {
  kontainer.classList.add("register-mode");
});

btnMenuRegister.addEventListener("click", () => {
  kontainer.classList.add("register-mode");
});


btnMenuLogin.addEventListener("click",()=>{
  kontainer.classList.remove("register-mode");
});



login_btn.addEventListener("click", () => {
  kontainer.classList.remove("register-mode");
});
