
const login_btn = document.querySelector("#login-btn");
const register_btn = document.querySelector("#register-btn");
const kontainer = document.querySelector(".kontainer");
const btnMenuLogin = document.getElementById("btnMenuLogin");
const btnMenuRegister = document.getElementById("btnMenuRegister");
const signup_button = document.getElementById("signup-button");

let arrayInputName = [];
let arrayInputEmail = [];
let arrayInputNoHp = [];
let arrayInputPassword = [];

// Jika belum mengisi semua kolom di register
const form_register = document.getElementById('register').addEventListener('submit',function(event){
  let inputName = document.getElementById('name').value;
  let inputNoHp = document.getElementById('nohp').value;
  let inputEmail = document.getElementById('email_signup').value;
  let inputPassword = document.getElementById('psw_signup').value;

  if(inputName ==""){
    alert("Name required.");
    kontainer.classList.add("register-mode");
    return;
  }else if(inputNoHp ==""){
    alert("No Hp required.");
    kontainer.classList.add("register-mode");
    return;
  }else if(inputEmail ==""){
    alert("Email required.");
    kontainer.classList.add("register-mode");
    return;
  }else if(inputPassword ==""){
    alert("password required.");
    kontainer.classList.add("register-mode");
    return;
  }else if(arrayInputEmail.indexOf(inputEmail) =="-1"){
    arrayInputEmail.push(inputEmail);
    arrayInputName.push(inputName);
    arrayInputNoHp.push(inputNoHp);
    arrayInputPassword.push(inputPassword);
  
 document.getElementById('name').value = "";
 document.getElementById('nohp').value = "";
 document.getElementById('email_signup').value = "";
 document.getElementById('psw_signup').value = "";

 alert(email + "  Thanks for registration. \nTry to login Now");
 kontainer.classList.remove("register-mode");
  }else {
    alert(inputEmail + " is already register.");
    kontainer.classList.add("register-mode");
    return ;
  }
});

const form_login = document.getElementById('login').addEventListener('submit',function(event){
  let inputEmail = document.getElementById('email_signin').value;
  let inputPassword = document.getElementById('psw_signin').value;
  let i = arrayInputEmail.indexOf(inputEmail);

  if(arrayInputEmail.indexOf(inputEmail) == -1){
    if(inputEmail ==""){
      alert("Email required.");
      return;
    }else {
      alert("Email tidak ada.");
      return;
    }
  }else if(arrayInputPassword[i] != inputPassword){
    if(inputEmail ==""){
      alert( "password required.");
      return;
    }
      alert("password tidak sesuai.");
      return;
    
  }else {
    alert(inputEmail + " yor are login Now \n welcome to our website.");
    window.location.href='/' 
  }

 document.getElementById('email_signup').value = "";
 document.getElementById('psw_signup').value = "";

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
