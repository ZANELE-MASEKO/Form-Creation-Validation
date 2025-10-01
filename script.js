document.addEventListener('DOMContentLoaded', function() {

        const form= document.getElementById('registration-form');

        const feedbackDiv= document.getElementById('form-feedback');

       form.addEventListener('submit', function(event) {
        event.preventDefault();

        const usernameInput= document.getElementById('username');
        const username =usernameInput.value.trim();

        const emailInput= document.getElementById('email');
        const email= emailInput.value.trim();

        const passwordInput= document.getElementById('password');
        const password= passwordInput.value.trim();

        const isValid= true;
        const messages= [];

        if (username.length <3) {
            isValid= false;
            messages.push('username must be longer than 3 digits.')
        }

        if (email.includes("@") && email.includes('.')) {
            isValid=false;
            messages.push('email must incluse a "@" oe and "." sign.');
        }

        if (password.length<8) {
            isValid= false;
            messages.push('password must be contain 8 or more charaters');
        }

        feedbackDiv.style.display= 'block';
        if (isValid == true) {
            feedbackDiv.textContent='Registration successful';
            feedbackDiv.style.color='#28a745'
        }
        else {
            feedbackDiv.innerHTML=messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }

        })
})