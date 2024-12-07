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
  //project 1
  "https://drive.google.com/file/d/1GJpSN39ii04dp4zrayqRTauoVVLLIXfI/preview",
  //proejct 2 - 1
  "https://drive.google.com/file/d/1NdTlpD9g0AbyFRbixx88IPD2MjzY5XS9/preview",
  //project 2 - 2
  "https://drive.google.com/file/d/1zIwEREmvohS-UDQpA7WCkMON_I_mkf-n/preview",
  //project 2 - 3
  "https://drive.google.com/file/d/1jaQX00AZR5uTqxC0xG5tp-XvGTgFQOss/preview",
  //project 2 - 4
  "https://drive.google.com/file/d/11h8XiXcNvdwOMyft-Ba1EbBZG--rZKzH/preview",
  //project 2 - 5
  "https://drive.google.com/file/d/184z76t0wehI6iAj4IQ2v5H9Y-eFTETBA/preview",
  //project 2 - 6
  "https://drive.google.com/file/d/11OHt9bIl8pPpOFoTORoCOkCVu6L4BMn8/preview",
  //project 2 - 7
  "https://drive.google.com/file/d/1IF_KYuC0BtWlKEqlNohYGAbzlrnyJndM/preview",
  //project 2 - 8
  "https://drive.google.com/file/d/1_rncDj23fKWJ1xxkOhmkhiH2qBFZmGK9/preview",
  //project 2 - 9
  "https://drive.google.com/file/d/1ePp6UYZM-RNhUrHCaJFRW2mKSnszSq8p/preview",
  //project 2 - 10
  "https://drive.google.com/file/d/1I8R90ndkwc0_MRjtyojBHUIqUu7z0Kdg/preview",
  //project 2 - 11
  "https://drive.google.com/file/d/1EVVGuE4JxFsQXpsB-nO5YQ3bR84xaNxt/preview",
  //project 2 - 12
  "https://drive.google.com/file/d/1Q4UNYiCImFium20vctaJ9YSPORsp_uq0/preview",
  //project 2 - 13
  "https://drive.google.com/file/d/1nxuRAPdXDJszv6WqhN68n8dtfLByDRgr/preview",
  //proejct 2 - 14
  "https://drive.google.com/file/d/1zszcUt-IhvtDjko_cMr98R1HeV1v52PW/preview",
  //proejct 2 - 15
  "https://drive.google.com/file/d/19z4l7FkBPJqWShlrRpGXN254tatqc8MI/preview",
  //project 2 - 16
  "https://drive.google.com/file/d/16r4rJprHqbaasoAbbkqTUmOJtCp7r2ZG/preview",
  //project 2 - 17
  "https://drive.google.com/file/d/1V3mY9fzhdIHJAKuIPhTng0YqAxJlZrR2/preview",
  //project 3 - 1
  "https://drive.google.com/file/d/1wQQ3j1Bk8AzQxfskuSxzzi7y6dGcAS1j/preview",
  //project 3 - 2
  "https://drive.google.com/file/d/1HYpFrunGodYARe61KdJJI9RqS4uE9pfg/preview",
  //project 3 - 3
  "https://drive.google.com/file/d/12aCz6WTcLpCAeXN7vHf11UrflECufaQ2/preview",
  //project 4 - 1
  "https://drive.google.com/file/d/1nfNBhSycErXP1eMGg67qw94Y-Rd9yTjC/preview",
  //project 5 - 1
  "https://drive.google.com/file/d/1_aZ1ok4jh5ZT6m572GE1VQ11eFxg5G61/preview",
  //project 5 - 2
  "https://drive.google.com/file/d/1zePyqIKp_N1z56oZme6eIecWp9SFcQB7/preview",
  //project 5 - 3
  "https://drive.google.com/file/d/1spVGpNJGY3sSrUYGg-NrEGl1etNF_9bm/preview",
  //project 5 - 4
  "https://drive.google.com/file/d/1GIaim_vBH3OKqZCyc4uWltwtDoJs32MB/preview",
  //project 6 - 1
  "https://drive.google.com/file/d/1L7xTE3cQWTVK-TNsUaK4unBu0ZnwGLSx/preview",
  //project 6 - 2
  "https://drive.google.com/file/d/19WVG2HNKvMBeAsHWu6Z4r-YbM5U0HaNk/preview",
  //project 6 - 3
  "https://drive.google.com/file/d/1qqhdndsTHIAHSj3IwuGl8yMdnWqmIdH3/preview",
  //project 6 - 4
  "https://drive.google.com/file/d/1pDV9VR6BWnpbPtM2rnV4xGrsTP3cXBvf/preview",
  //project 6 - 5
  "https://drive.google.com/file/d/166sIJW-tYNnDDizjvlIEq1tHc3d6rR7e/preview"
];


//header selector
const headerWrap = document.querySelector("#header_id");
//nav bar selector
const nav = document.querySelector(".navigation_bar");

// hide header banner
window.addEventListener("scroll", function () {
  if (this.scrollY > 70) {
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
    "Project 1 Preview",
    "https://drive.google.com/file/d/1M6bOQHtWJtw7ilGT4p7nNa5niCjIm-IK/preview",
    "Preview picture of first Project",
    "Simple HTML & CSS web site"
  ),
  new Project(
    "Project 2 Preview",
    "https://drive.google.com/file/d/183GMOvcuebT1wQJ8LJgsvW-nj0DY9Le0/preview",
    "Preview picture of second Project",
    "Identified and fixed deficiencies on the Awesome Inc Program page"
  ),
  new Project(
    "Project 3 Preview",
    "https://drive.google.com/file/d/12aCz6WTcLpCAeXN7vHf11UrflECufaQ2/preview",
    "Preview picture of third Project",
    "Learned and applied advanced JavaScript techniques, combined with advanced HTML and CSS"
  ),
  new Project(
    "Project 4 Preview",
    "https://drive.google.com/file/d/1nfNBhSycErXP1eMGg67qw94Y-Rd9yTjC/preview",
    "Preview picture of fourth Project",
    "Distance Converter : Learned and applied Android Studio, Java, XML, and Gradle"
  ),
  new Project(
    "Project 5 Preview",
    "https://drive.google.com/file/d/1whtRy2jHKsUGc_VbK-bNmG1ioRTFQNMm/preview",
    "Preview picture of fifth Project",
    "Note Pad : Learned and applied Android Studio, Java, XML, and Gradle"
  ),
  new Project(
    "Project 6 Preview",
    "https://drive.google.com/file/d/1kvLe3KhQAdsVinXpprgsPYHHX1w1DjCW/preview",
    "Preview picture of sixth Project",
    "Know Your Government : Learned and applied Android Studio, Java, XML, and Gradle"
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

