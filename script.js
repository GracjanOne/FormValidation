let pass = document.querySelector("#password");
let pass2 = document.querySelector("#confirm-password");

let submitButton = document.querySelector("#submit");
let validationMsg = document.querySelector("#validation-message");
let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let containUpperCase = false;
let password = "";
submitButton.addEventListener("click", function (event) {
  validationMsg.innerHTML = "";
  event.preventDefault();
  if(pass.value !== ""){
    if (pass.value.length < 6) {
        validationMsg.innerHTML = "Password must contain more than 5 characters";
      }
      if (specialChars.test(pass.value) == false) {
        validationMsg.innerHTML = "Password must contain special characters";
      }
      
      let hasUpperCase = /[A-Z]/.test(pass.value);
      if (!hasUpperCase) {
        validationMsg.innerHTML = "Password should have at least one uppercase letter.";
      }
      password = pass.value;
  }
  else{
    validationMsg.innerHTML = "Please enter a password";
  }
  
  if(password === pass2.value){
    
  }
});
