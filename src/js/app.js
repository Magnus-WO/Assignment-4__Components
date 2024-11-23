// Fetching button elements from HTML
const navbarButton = document.querySelector(".navbar__button--navbar");
const carouselButton = document.querySelector(".navbar__button--carousel");
const cardButton = document.querySelector(".navbar__button--card");
const buttonButton = document.querySelector(".navbar__button--button");
const formButton = document.querySelector(".navbar__button--form");
const mediaButton = document.querySelector(".navbar__button--media-controller");
const searchButton = document.querySelector(".navbar__button--search-input");
const alertButton = document.querySelector(".navbar__button--alert");

// Fetching and appending the showcase section
const main = document.querySelector("main");
const showcaseSection = document.querySelector(".component__showcase");
main.append(showcaseSection);

// Creating functions
const createNavbar = () => {
  showcaseSection.textContent = "";
  const createdNavbar = document.createElement("nav");
  createdNavbar.classList.add("component__1");
  showcaseSection.appendChild(createdNavbar);

  const navbarHeader = document.createElement("h2");
  navbarHeader.textContent = "This is a navbar.";
  const navbarParagraph1 = document.createElement("p");
  const createdLink1 = document.createElement("a");
  createdLink1.textContent = "here";
  createdLink1.setAttribute("href", "./newPage.html");
  navbarParagraph1.textContent = `It is used to navigate to different pages or to different places on the same page. Click here to go to a new page`;

  const navbarParagraph2 = document.createElement("p");
  const createdLink2 = document.createElement("a");
  //   createdLink2.setAttribute("href");
  createdLink2.textContent = "here";
  navbarParagraph2.textContent = "Click here to go to a different page";

  createdNavbar.append(navbarHeader, navbarParagraph1, navbarParagraph2);
};

const createCarousel = () => {};

const createCard = () => {};

const createButton = () => {};

const createForm = () => {};

const createMediaController = () => {};

const createSearchField = () => {};

const createAlert = (e) => {
  showcaseSection.textContent = "";
  alert("This is an alert");
};

// Attaching event listeners

navbarButton.addEventListener("click", createNavbar);

alertButton.addEventListener("click", createAlert);
