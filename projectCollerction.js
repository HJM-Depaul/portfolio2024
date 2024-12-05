
const pSelector = document.querySelector("#p_id");
const projects_iframe = document.querySelector("#porjectPage_portfolio_iframe_id");

// Project preview object for home(index) page
let allProjects_portfolios = [
    new Project(
      "First Potrfolio",
      "https://drive.google.com/file/d/1M6bOQHtWJtw7ilGT4p7nNa5niCjIm-IK/preview",
      "Preview picture of first Portfolio",
      "Learned HTML and CSS through the NYPL online class"
    ),
    new Project(
      "Second Portfolio",
      "https://drive.google.com/file/d/1NdTlpD9g0AbyFRbixx88IPD2MjzY5XS9/preview",
      "Preview picture of Second Portfolio",
      "Learned JavaScript through the NYPL online class"
    ),
    new Project(
      "Third Portfolio",
      "https://drive.google.com/file/d/12aCz6WTcLpCAeXN7vHf11UrflECufaQ2/preview",
      "Preview picture of Third Portfolio",
      "Learned JavaScript through the NYPL online class"
    ),
    new Project(
      "Fourth Temporary iframe",
      "https://www.youtube.com/embed/Ej_nZ6E-rDQ?autoplay=1&mute=1",
      "Temporary Embeded YouTube Video - Practice URL parameters",
      "I hope I can code well!"
    ),
  ];

  
pSelector.innerHTML = "wiell iwet woerk";