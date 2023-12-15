/*
Done by Varshini Srinivasan
email: vsrinivasan2685@conestogac.on.ca
*/

$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Validate form fields
    const name = $("#name").val();
    const email = $("#email").val();
    const phone = $("#phone").val();
    const message = $("#message").val();

    if (name === "" || email === "" || phone === "" || message === "") {
      alert("Please fill in all fields."); // Display an alert if any field is empty
    } else {
      // If all fields are filled, show "Message sent" popup with a slide-in effect
      $("#popup").slideDown(700).delay(2000).slideUp(700);
    }
  });
});
