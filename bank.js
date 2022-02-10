document.getElementById("login-submit").addEventListener('click', function () {

    //Get user Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //Get User Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //Check Email And Password
    if (userEmail == 'zulquar@123' && userPassword == '786786') {
        console.log('Valid User');

        window.location.href = 'banking.html'; // Redirect to another Page.
    }


})