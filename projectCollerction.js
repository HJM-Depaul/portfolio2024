
const pSelector = document.querySelector("#p_id");
pSelector.innerHTML = "why?";
const projects_iframe = document.querySelector("#porjectPage_portfolio_iframe_id");
const pSelector_2 = document.querySelector("#portfolio_p_id");
const portfolioGrid_div = document.querySelector("#a_portfolio_gridwrapDiv_id");
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
    "https://drive.google.com/file/d/12aCz6WTcLpCAeXN7vHf11UrflECufaQ2/preview",
    "Temporary Embeded YouTube Video - Practice URL parameters",
    "I hope I can code well!"
  ),
];

//load all img first prevent delays
allProjects_portfolios.forEach((loadcurrentPortfolio) => {
  projects_iframe.src = loadcurrentPortfolio.imgSrc;
});

let currentPortfoliosLength = allProjects_portfolios.length;
let count_index = 0;

//add all iframe and description on page
allProjects_portfolios.forEach((currentPortfolio) => {
  const newPortfolio_div = document.createElement("div");
  portfolioGrid_div.appendChild(newPortfolio_div);
  if(count_index %2 == 0){
    const newPortfolio_p = document.createElement("p");
    newPortfolio_div.appendChild(newPortfolio_p);
    const newPortfolio_iframe = document.createElement("iframe");
    newPortfolio_p.appendChild(newPortfolio_iframe);
    
    newPortfolio_p.innerText = `${currentPortfolio.title}</br>${currentPortfolio.description}`;
    newPortfolio_iframe.src = currentPortfolio.imgSrc;
    count_index++;
  }else{
    const newPortfolio_iframe = document.createElement("iframe");
    newPortfolio_div.appendChild(newPortfolio_iframe);
    const newPortfolio_p = document.createElement("p");
    newPortfolio_iframe.appendChild(newPortfolio_p);

    newPortfolio_p.innerText = `${currentPortfolio.title}</br>${currentPortfolio.description}`;
    newPortfolio_iframe.src = currentPortfolio.imgSrc;
    count_index++;
  }
});


pSelector_2.innerHTML = allProjects_portfolios[2].title;
