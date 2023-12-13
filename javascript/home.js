// for username
// Retrieve the email from localStorage
var loggedInUser = localStorage.getItem('loggedInUser');
// for display
var usernameElement = document.getElementById('username');
usernameElement.textContent = loggedInUser;
console.log(loggedInUser);