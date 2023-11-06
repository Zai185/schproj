const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupPasswordRecheck = document.getElementById('signup-password-recheck');


signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  emailValidator(loginEmail.value)
  var email = localStorage.getItem('email');
  var password = localStorage.getItem('password');
  if (loginEmail.value == email && loginPassword.value == password) {
    alert("Login Successful")
  } else {
    alert("Invalid Credentials")
    return
  }
  successLogin(loginEmail.value, loginPassword.value, 'login')

})

signupForm.addEventListener('submit', e => {
  e.preventDefault()
  emailValidator(signupEmail.value)
  if (signupPassword.value != signupPasswordRecheck.value) {
    alert("Passwords not match")
    return
  }
  successLogin(signupEmail.value, signupPassword.value, 'signup')

})

function emailValidator(email) {
  var loginP = /[a-z]+@[a-z]+\.[a-z]+/
  if (!email.match(loginP)) {
    alert("Invalid Email")
    return
  }
}

function successLogin(email, password, loc) {
  if (loc == 'signup') {
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
  }

  location.replace('index.html')

}

console.log(login)



