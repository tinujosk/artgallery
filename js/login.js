// User login details
const users = [
  { email: "yash@gmail.com", username: "yash", password: "yash1234" },
  { email: "tinu@gmail.com", username: "tinu", password: "tinu1234" },
  { email: "smith@gmail.com", username: "smith", password: "smith1234" },
  {
    email: "varshini@gmail.com",
    username: "varshini",
    password: "varshini1234",
  },
];

// Validate login function
const validateLogin = () => {
  const email = $("#email").val();
  const password = $("#password").val();
  const errorMessageElement = $("#errorMessage");

  // Clear previous error message
  errorMessageElement.text("");

  const user = users.find(
    user => user.username === email || user.email === email
  );

  if (user && user.password === password) {
    localStorage.setItem("loggedInUser", email);
    window.location.href = "home.html";
  } else {
    errorMessageElement.text(
      "Invalid Email/Username or Password. Please try again."
    );
  }
};

// Hover effect using jquery
const loginButton = $("button");

loginButton.on("mouseover", function () {
  loginButton.css("background-color", "#1156b3");
});

loginButton.on("mouseout", function () {
  loginButton.css("background-color", "#007bff");
});
