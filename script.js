let pass = document.querySelector("#password");
let submitButton = document.querySelector("#submit");
let validationMsg = document.querySelector("#validation-message");
let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (pass.value.length < 6) {
    validationMsg.innerHTML += "Password must contain more than 5 characters" ;
    
  }
  if (specialChars.test(pass.value) == false){
    validationMsg.innerHTML += "Password must contain special characters" ;
  }
});
