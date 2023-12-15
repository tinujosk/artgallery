// use object to store user login details
var users = [
  { email: 'yash@gmail.com', username: 'yash', password: 'yash1234' },
  { email: 'tinu@gmail.com', username: 'tinu', password: 'tinu1234' },
  { email: 'smith@gmail.com', username: 'smith', password: 'smith1234' },
  { email: 'varshini@gmail.com', username: 'varshini', password: 'varshini1234' },
];

// use function to check login is valid or not
function validateLogin() {
  var email = $('#email').val();
  var password = $('#password').val();
  var errorMessageElement = $('#errorMessage');
  var isLoggedIn = false;

  // Clear previous error message
  errorMessageElement.text('');

  let i;
  // validation using a for loop
  for (i = 0; i < users.length; i++) {
    let user = users[i];
    
    if ((email === user.email || email === user.username) && password === user.password) {
      // successful login
      isLoggedIn = true;

      // store data for homepage username
      localStorage.setItem('loggedInUser', email);
      alert('Login Successful!');
      
      // Redirect to the index page after successful login
      window.location.href = 'home.html';
      break;
    }
  }

  if (!isLoggedIn) {
    errorMessageElement.text('Invalid Email/Username or Password. Please try again.');
  }
}

// hover effect using jquery
var loginButton = $('button');

loginButton.on('mouseover', function () {
  loginButton.css('background-color', '#1156b3');
});

loginButton.on('mouseout', function () {
  loginButton.css('background-color', '#007bff');
});