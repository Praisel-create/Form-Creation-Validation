document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById(id="registration-form");
    const feedbackDiv = document.getElementById(id="form-feedback");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        let isValid = true;

        let messages = [];

        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';

        const usernameInput = document.getElementById("username").value.trim();
        if (usernameInput.value.length < 3) {
            isValid = false;
            usernameError.textContent = "The username must be over 3 letters long.";
            messages.push(usernameError);
        } else {
            usernameError.textContent = '';
        }

        const emailInput = document.getElementById("email").value.trim();
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
            emailError.textContent = '';
          } else {
            isValid = false;
            emailError.textContent = 'Please enter a valid email address.';
            messages.push(emailError);
          }

        const passwordInput = document.getElementById("password").value.trim();
        if (passwordInput < 8) {
            isValid = false;
            passwordError.textContent = "Your password is too short";
            messages.push(passwordError);
        } else{
            passwordError.textContent = '';
        }
    });

});