// Art details array
const artDetails = [
  {
    title: "Expressionism",
    artist: "Emily Johnson",
    medium: "Oil on Canvas",
    year: 2021,
  },
  {
    title: "Sketch",
    artist: "Michael Adams",
    medium: "Pencil on Paper",
    year: 2019,
  },
  {
    title: "Modern Art",
    artist: "Sophia Rodriguez",
    medium: "Mixed Media",
    year: 2022,
  },
  {
    title: "Renaissance",
    artist: "David Williams",
    medium: "Acrylic on Wood",
    year: 2018,
  },
  {
    title: "Nature",
    artist: "Olivia Brown",
    medium: "Watercolor",
    year: 2020,
  },
  {
    title: "Watercoloring",
    artist: "Daniel Lee",
    medium: "Watercolor on Paper",
    year: 2023,
  },
  {
    title: "Oil painting",
    artist: "Sophie Clark",
    medium: "Oil on Canvas",
    year: 2017,
  },
  {
    title: "Impressionist",
    artist: "Ethan Turner",
    medium: "Acrylic on Canvas",
    year: 2016,
  },
  {
    title: "History",
    artist: "Ava Martinez",
    medium: "Digital Art",
    year: 2023,
  },
];

$(document).ready(function () {
  // Click event for images
  $(".image-container").click(function () {
    // Fetch image details and desciption
    var heading = $(this).find("img").attr("alt");
    var imageLink = $(this).find("img").attr("src");
    var description = $(this).find("p").text();
    // Set heading and details
    $("#image-heading").text(heading);
    $("#image-details").text(description);
    // Set image link to display on the side panel
    $(".side-panel").find("img").attr("src", imageLink);
    // Find the specific art which is clicked and fill the details in the html
    const artDetail = artDetails.find(art => art.title === heading);
    let htmlContent = `
    <ul>
      <li><b>Artist:</b> ${artDetail.artist}</li>
      <li><b>Medium:</b> ${artDetail.medium}</li>
      <li><b>Year:</b> ${artDetail.year}</li>
    </ul>
  `;
    // Set the side panel with the details
    $(".side-panel").find("#artist").html(htmlContent);
    // Apply Animations and CSS changes for transition effects
    $(".side-panel").addClass("open");
    $(".gallery").css("justify-content", "flex-start");
    $(".grid").css("animation", "widthChange 0.5s forwards");
    $(".image-container p").css("display", "none");
  });

  // Click event to close the side panel and revert animations and css
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
