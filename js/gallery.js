$(document).ready(function () {
  // Click event for images
  $(".image-container").click(function () {
    var heading = $(this).find("img").attr("alt");
    var imageLink = $(this).find("img").attr("src");
    var description = $(this).find("p").text();
    var artist = $(this).find("> span").text();
    $("#image-heading").text(heading);
    $("#image-details").text(description);
    $(".side-panel").find("img").attr("src", imageLink);
    $(".side-panel").find("#artist").html(`<b>Art By: </b> ${artist}`);
    $(".side-panel").addClass("open");
    $(".gallery").css("justify-content", "flex-start");
    $(".grid").css("animation", "widthChange 0.5s forwards");
    $(".image-container p").css("display", "none");
  });

  // Click event to close the side panel
  $(".close-icon").click(function (e) {
    if (e.target !== this) return;
    $(".side-panel").removeClass("open");
    $(".grid").css("animation", "widthChangeBack 2s forwards");
    $(".image-container p").css("display", "block");
  });
});

var loggedInUser = localStorage.getItem("loggedInUser");
var usernameElement = document.getElementById("username");
usernameElement.textContent = loggedInUser;
