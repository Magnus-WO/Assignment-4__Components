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

// Creating a navbar
const createNavbar = () => {
  showcaseSection.textContent = "";
  const createdNavbar = document.createElement("nav");
  createdNavbar.classList.add("showcase__navbar");
  showcaseSection.appendChild(createdNavbar);

  const navbarHeader = document.createElement("h2");
  navbarHeader.textContent = "This is a navbar.";
  const navbarParagraph1 = document.createElement("p");
  const createdLink1 = document.createElement("a");
  createdLink1.textContent = "link";
  createdLink1.setAttribute("href", "./newPage.html");
  navbarParagraph1.textContent = `Click here to go to a new page`;

  const navbarParagraph2 = document.createElement("p");
  const createdLink2 = document.createElement("a");
  createdLink2.setAttribute("href", "./newPage.html");
  createdLink2.textContent = "link";
  navbarParagraph2.textContent = "Click here to go to a different page";

  createdNavbar.append(
    navbarHeader,
    navbarParagraph1,
    navbarParagraph2,
    createdLink1,
    createdLink2
  );
};

// Creating a carousel
const createCarousel = () => {
  showcaseSection.textContent = "";

  const nextButton = document.createElement("button");
  nextButton.classList.add("carousel-button");
  nextButton.classList.add("carousel-button--next");
  nextButton.dataset.carouselButton = "next";
  nextButton.textContent = "Next";

  const prevButton = document.createElement("button");
  prevButton.classList.add("carousel-button");
  prevButton.classList.add("carousel-button--prev");
  prevButton.textContent = "Previous";

  const imageContainer = document.createElement("div");

  const img1 = document.createElement("img");
  img1.setAttribute(
    "src",
    "./assets/images/pexels-m-venter-792254-1659438.jpg"
  );
  // img1.setAttribute("data", "active");
  img1.dataset.active = true;

  img1.classList.add("carousel-image");

  const img2 = document.createElement("img");
  img2.setAttribute("src", "./assets/images/pexels-tobiasbjorkli-1559821.jpg");
  img2.classList.add("carousel-image");

  const img3 = document.createElement("img");
  img3.setAttribute(
    "src",
    "./assets/images/pexels-tomas-malik-793526-2581925.jpg"
  );
  img3.classList.add("carousel-image");

  imageContainer.append(img1, img2, img3);

  const carousel = document.createElement("div");
  carousel.classList.add("carousel");
  showcaseSection.appendChild(carousel);
  carousel.append(imageContainer, prevButton, nextButton);

  const carouselButtons = [nextButton, prevButton];
  carouselButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = [img1, img2, img3];

      const activeSlide = document.querySelector("[data-active]");
      let newIndex = slides.indexOf(activeSlide) + offset;

      if (newIndex < 0) {
        newIndex = slides.length - 1;
      }
      if (newIndex >= slides.length) {
        newIndex = 0;
      }
      slides[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    });
  });
};
// Creating a card
const createCard = () => {
  showcaseSection.textContent = "";

  const card = document.createElement("div");
  card.classList.add("card");
  showcaseSection.appendChild(card);

  const cardImage = document.createElement("img");
  cardImage.setAttribute("src", "./assets/images/Dawn@0.5x.png");
  cardImage.classList.add("card-image");
  const cardParagraph1 = document.createElement("p");
  cardParagraph1.textContent = "This is a card.";
  const cardParagraph2 = document.createElement("p");
  cardParagraph2.textContent =
    "It is usually used to contain elements that are connected to each other.";
  card.append(cardImage, cardParagraph1, cardParagraph2);
};

// Creating a button
const createButton = () => {
  showcaseSection.textContent = "";

  const createdButton = document.createElement("button");
  createdButton.classList.add("created-button");
  createdButton.textContent = "I am an idle button, try hovering over me!";
  showcaseSection.appendChild(createdButton);

  createdButton.addEventListener("mouseenter", () => {
    createdButton.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    createdButton.textContent = "You are hovering over me, try clicking me!";
  });
  createdButton.addEventListener("mouseleave", () => {
    createdButton.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    createdButton.style.color = "black";
    createdButton.textContent = "I am an idle button, try hovering over me!";
  });

  createdButton.addEventListener("click", () => {
    createdButton.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    createdButton.style.color = "white";
    createdButton.textContent = "You clicked me!";
  });
};

const createForm = () => {
  showcaseSection.textContent = "";

  const form = document.createElement("form");
  form.classList.add("form");
  showcaseSection.appendChild(form);

  const formInfo = document.createElement("p");
  formInfo.textContent = `This is a simple (and ugly) form, input the details as specified below, then click the "Submit" button`;
  formInfo.style.textAlign = "center";
  //Name input
  const nameContainer = document.createElement("div");
  nameContainer.classList.add("form-elements__container");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "nameInput");
  nameInput.setAttribute("placeholder", "John Doe");
  nameInput.setAttribute("required", true);

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "nameInput");
  nameLabel.textContent = "Full name:";
  nameContainer.append(nameLabel, nameInput);

  //Email input
  const emailContainer = document.createElement("div");
  emailContainer.classList.add("form-elements__container");

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("placeholder", "someone@example.com");
  emailInput.setAttribute("required", true);

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email";

  emailContainer.append(emailLabel, emailInput);

  //Radio buttons
  const radioContainer = document.createElement("div");
  radioContainer.classList.add("form-elements__container");

  const radioInput1 = document.createElement("input");
  radioInput1.setAttribute("type", "radio");
  radioInput1.setAttribute("id", "radioInput1");
  radioInput1.setAttribute("name", "radioInput");

  const radioInput2 = document.createElement("input");
  radioInput2.setAttribute("type", "radio");
  radioInput2.setAttribute("id", "radioInput2");
  radioInput2.setAttribute("name", "radioInput");

  const radioInput3 = document.createElement("input");
  radioInput3.setAttribute("type", "radio");
  radioInput3.setAttribute("id", "radioInput3");
  radioInput3.setAttribute("name", "radioInput");

  const radioLabel1 = document.createElement("label");
  radioLabel1.setAttribute("for", "radioInput1");
  radioLabel1.textContent = "small";

  const radioLabel2 = document.createElement("label");
  radioLabel2.setAttribute("for", "radioInput2");
  radioLabel2.textContent = "medium";

  const radioLabel3 = document.createElement("label");
  radioLabel3.setAttribute("for", "radioInput1");
  radioLabel3.textContent = "large";

  radioLabel1.append(radioInput1);
  radioLabel2.append(radioInput2);
  radioLabel3.append(radioInput3);
  radioContainer.append(radioLabel1, radioLabel2, radioLabel3);

  //Option selector
  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("form-elements__container");

  form.append(formInfo, nameContainer, emailContainer, radioContainer);
};

const createMediaController = () => {};

const createSearchField = () => {};

const createAlert = (e) => {
  showcaseSection.textContent = "";
  alert("This is an alert");
};

// Attaching event listeners

navbarButton.addEventListener("click", createNavbar);

carouselButton.addEventListener("click", createCarousel);

alertButton.addEventListener("click", createAlert);

cardButton.addEventListener("click", createCard);

buttonButton.addEventListener("click", createButton);

formButton.addEventListener("click", createForm);
