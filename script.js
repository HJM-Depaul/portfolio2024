// Logo seclector
const logo_button = document.querySelector("#logo_button_id");
// preview selector
const preview_img = document.querySelector("#portfolio_preview_section_img_id");
const preview_buttonLeft = document.querySelector(
  "#portfolio_preview_button_Left_id"
);
const preview_buttonRight = document.querySelector(
  "#portfolio_preview_button_Right_id"
);
const preview_title = document.querySelector("#preview_title_id");
const preview_description = document.querySelector("#preveiw_description_id");

const projects_first_iframe = document.querySelector(".firstProjects_iframe");

let allProjects_iframe_scrs = [
  //0
  "https://drive.google.com/file/d/1GJpSN39ii04dp4zrayqRTauoVVLLIXfI/preview",
  //1
  "https://drive.google.com/file/d/1NdTlpD9g0AbyFRbixx88IPD2MjzY5XS9/preview",
  //2
  "https://drive.google.com/file/d/19z4l7FkBPJqWShlrRpGXN254tatqc8MI/preview",
  //3
  "https://drive.google.com/file/d/1wQQ3j1Bk8AzQxfskuSxzzi7y6dGcAS1j/preview",
  //4
  "https://drive.google.com/file/d/1HYpFrunGodYARe61KdJJI9RqS4uE9pfg/preview",
  //5
  "https://drive.google.com/file/d/12aCz6WTcLpCAeXN7vHf11UrflECufaQ2/preview"
];


//header selector
const headerWrap = document.querySelector("#header_id");
//nav bar selector
const nav = document.querySelector(".navigation_bar");

// hide header banner
window.addEventListener("scroll", function () {
  if (this.scrollY > 50) {
    headerWrap.classList.add("invisible");
    nav.classList.add("fixedTop");

  } else {
    headerWrap.classList.remove("invisible");
    nav.classList.remove("fixedTop");

  }
});


//logo hover animation
//https://stackoverflow.com/questions/75606570/how-to-make-a-video-play-only-on-hover-using-html-css
logo_button.addEventListener("mouseover", function () {
  this.play();
  logo_button.currentTime = 0;
});
logo_button.addEventListener("mouseleave", function () {
  this.pause();
  logo_button.currentTime = 4;
});

// Project Class
class Project {
  constructor(title, imgSrc, imgAlt, description) {
    this.title = title;
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
    this.description = description;
  }
}

// Project preview object for home(index) page
let allProjectsPreview = [
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
    "https://drive.google.com/file/d/12aCz6WTcLpCAeXN7vHf11UrflECufaQ2/preview",
    "Temporary Embeded YouTube Video - Practice URL parameters",
    "I hope I can code well!"
  ),
];


for (let i = allProjects_iframe_scrs.length - 1; i >= 0; i--) {
  const iframe = document.createElement('iframe');
  iframe.src = allProjects_iframe_scrs[i];
  iframe.onload = () => {
    // Append the iframe to the desired container
    document.body.appendChild(iframe);
  };
}

// load all img first prevent delays
allProjectsPreview.forEach((currentProject) => {
  const img = new Image();
  img.src = currentProject.imgSrc;
  img.onload = () => {
    preview_img.src = currentProject.imgSrc;
  };
});

let currentLength = allProjectsPreview.length;
let randomIndex = Math.floor(Math.random() * currentLength);
// console.log(randomIndex);

// load random preview when user visit/click home
loadPreviewInfo(allProjectsPreview[randomIndex]);

function loadPreviewInfo(currentProject) {
  preview_img.src = currentProject.imgSrc;
  preview_img.alt = currentProject.imgAlt;
  preview_title.innerHTML = currentProject.title;
  preview_description.innerHTML = currentProject.description;
}

// button event handler
preview_buttonLeft.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(randomIndex);
  //when current index is the initial index
  if (randomIndex == 0) {
    randomIndex = currentLength - 1;
  } else {
    randomIndex--;
  }
  loadPreviewInfo(allProjectsPreview[randomIndex]);
});
preview_buttonRight.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(randomIndex);
  //when current index is the last index
  if (randomIndex == currentLength - 1) {
    randomIndex = 0;
  } else {
    randomIndex++;
  }
  loadPreviewInfo(allProjectsPreview[randomIndex]);
});

