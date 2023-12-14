// function validateLogin() {
//   var email = document.getElementById('email').value;
//   var password = document.getElementById('password').value;
//   var errorMessageElement = document.getElementById('errorMessage');

//   // Example validation (replace with your actual validation logic)
//   if (email === 'example@example.com' && password === 'password123') {
//     errorMessageElement.textContent = ''; // Clear previous error message
//     alert('Login successful!');
    
//     // Redirect to the index page after successful login
//     window.location.href = 'index.html';
//   } else {
//     errorMessageElement.textContent = 'Invalid Email or Username and Password. Please try again.';
//   }
// }
// var loginButton = document.querySelector('button');

// loginButton.addEventListener('mouseover', function() {
//   loginButton.style.backgroundColor = '#1156b3'; /* Darker blue on hover */
// });

// loginButton.addEventListener('mouseout', function() {
//   loginButton.style.backgroundColor = '#007bff'; /* Restore original blue color */
// });

function validateLogin() {
  var email = $('#email').val();
  var password = $('#password').val();
  var errorMessageElement = $('#errorMessage');

  // Clear previous error message
  errorMessageElement.text('');

  // Example validation using jQuery
  if (email === '' || password === '') {
    errorMessageElement.text('Please enter both Email/Username and Password.');
  } else {
    // Perform additional validation if needed
    // For example, you can check the email format or password strength

    // Simulate a successful login for demonstration purposes
    if ((email === 'yash@gmail.com' || email === 'yash') && password === 'yash1234') {
      // store data for homepage username
      localStorage.setItem('loggedInUser', email);
      alert('Login successful!');

      // Redirect to the index page after successful login
      window.location.href = 'home.html';
    } else {
      errorMessageElement.text('Invalid Email/Username or password. Please try again.');
    }
  }
}

var loginButton = $('button');

loginButton.on('mouseover', function() {
  loginButton.css('background-color', '#1156b3'); /* Darker blue on hover */
});

loginButton.on('mouseout', function() {
  loginButton.css('background-color', '#007bff'); /* Restore original blue color */
});
