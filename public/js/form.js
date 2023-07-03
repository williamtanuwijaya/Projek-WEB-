
const login_btn = document.querySelector("#login-btn");
const register_btn = document.querySelector("#register-btn");
const kontainer = document.querySelector(".kontainer");
const btnMenuLogin = document.getElementById("btnMenuLogin");
const btnMenuRegister = document.getElementById("btnMenuRegister");
const signup_button = document.getElementById("signup-button");
var hostname = window.location.hostname; // Mendapatkan hostname dari URL saat ini

// Mengganti "localhost" dengan teks yang diinginkan
var newHostname = hostname.replace("localhost", "Teks Baru");

// Menampilkan alert dengan teks yang telah diubah
alert("Saat ini berada di: " + newHostname);

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
//   if(inputName == '' || inputNoHp == '' || inputEmail == '' || inputPassword == '' ){
//     event.preventDefault();
//     console.log("ini if");
//     console.log(inputName);
//     console.log(inputNoHp);
//     console.log(inputEmail);
//     console.log(inputPassword);
//   }else{
//     kontainer.classList.remove("register-mode");
//     console.log(inputName);
//     console.log(inputNoHp);
//     console.log(inputEmail);
//     console.log(inputPassword);
//   }


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
