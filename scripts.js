document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter form');
    const emailInput = document.getElementById('email');
    const messageDiv = document.querySelector('.newsletter .message');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const email = emailInput.value.trim();
            
            if (email === "") {
                messageDiv.textContent = "Please enter a valid email address.";
                messageDiv.style.color = 'yellow'; 
            } else {
                messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
                messageDiv.style.color = 'white'; 

                emailInput.value = '';
            }
        });
    }
});