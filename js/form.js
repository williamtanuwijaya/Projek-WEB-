const login_btn = document.querySelector("#login-btn");
const register_btn = document.querySelector("#register-btn");
const kontainer = document.querySelector(".kontainer");
const btnMenuLogin = document.getElementById("btnMenuLogin");
const btnMenuRegister = document.getElementById("btnMenuRegister");
const signup_button = document.getElementById("signup-button");

// Jika belum mengisi semua kolom di register
const form_register = document.getElementById('register').addEventListener('submit',function(event){
  let inputName = document.getElementById('name').value;
  let inputNoHp = document.getElementById('nohp').value;
  let inputEmail = document.getElementById('email_signup').value;
  let inputPassword = document.getElementById('psw_signup').value;

  if(inputName == '' || inputNoHp == '' || inputEmail == '' || inputPassword == '' ){
    event.preventDefault();
    kontainer.classList.add("register-mode");
    console.log("ini if");
    console.log(inputName);
    console.log(inputNoHp);
    console.log(inputEmail);
    console.log(inputPassword);
  }else{
    kontainer.classList.remove("register-mode");
    console.log(inputName);
    console.log(inputNoHp);
    console.log(inputEmail);
    console.log(inputPassword);
  }
});


register_btn.addEventListener("click", () => {
  kontainer.classList.add("register-mode");
});

btnMenuRegister.addEventListener("click", () => {
  kontainer.classList.add("register-mode");
});


btnMenuLogin.addEventListener("click",()=>{
  kontainer.classList.remove("register-mode");
});

signup_button.addEventListener("click",()=>{
  kontainer.classList.remove("register-mode");
});



login_btn.addEventListener("click", () => {
  kontainer.classList.remove("register-mode");
});
