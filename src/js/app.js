// Fetching button elements from HTML
const navbarButton = document.querySelector(".navbar__button--navbar");
const carouselButton = document.querySelector(".navbar__button--carousel");
const cardButton = document.querySelector(".navbar__button--card");
const buttonButton = document.querySelector(".navbar__button--button");
const formButton = document.querySelector(".navbar__button--form");
const mediaButton = document.querySelector(".navbar__button--media-controller");
const modalButton = document.querySelector(".navbar__button--modal");
const alertButton = document.querySelector(".navbar__button--alert");

const navbarContainer = document.querySelector(".navbar__buttons-select");
const toggleMenuButton = document.querySelector(".navbar__toggle-button");
toggleMenuButton.addEventListener("click", () => {
  navbarContainer.classList.toggle("navbar__links--active");
});

// Fetching and appending the showcase section
const main = document.querySelector("main");
const showcaseSection = document.querySelector(".component__showcase");
main.append(showcaseSection);

// Creating functions

// Creating a navbar
const createNavbar = () => {
  showcaseSection.textContent = "";
  showcaseSection.style.flexDirection = "column";

  const createdNavbar = document.createElement("nav");
  createdNavbar.classList.add("showcase__navbar");
  showcaseSection.appendChild(createdNavbar);

  const navbarHeader = document.createElement("h2");
  navbarHeader.textContent = "This is a navbar.";

  const link1 = document.createElement("a");
  link1.setAttribute("href", "https://www.google.com/");
  link1.setAttribute("target", "");
  link1.textContent = "Google";

  const link2 = document.createElement("a");
  link2.setAttribute("href", "https://stackoverflow.com/");
  link2.setAttribute("href", "");
  link2.textContent = "Stackoverflow";

  const link3 = document.createElement("a");
  link3.setAttribute("href", "https://www.youtube.com/");
  link3.setAttribute("href", "");
  link3.textContent = "Youtube";

  const link4 = document.createElement("a");
  link4.setAttribute("href", "https://theuselessweb.com/");
  link4.setAttribute("href", "");
  link4.textContent = "The Useless Web";

  const linkContainer = document.createElement("div");
  linkContainer.classList.add("navbar__links");

  createdNavbar.append(navbarHeader);

  createdNavbar.addEventListener("mouseenter", () => {
    createdNavbar.appendChild(linkContainer);
    linkContainer.append(link1, link2, link3, link4);
  });
  createdNavbar.addEventListener("mouseleave", () => {
    linkContainer.remove();
  });
};

// Creating a carousel
const createCarousel = () => {
  showcaseSection.textContent = "";
  showcaseSection.style.flexDirection = "column";

  const carouselHeader = document.createElement("h3");
  carouselHeader.textContent = "This is a carousel";

  const carouselInfo = document.createElement("p");
  carouselInfo.textContent = "It is often used to display images";

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
  carousel.append(
    carouselHeader,
    carouselInfo,
    imageContainer,
    prevButton,
    nextButton
  );

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
      //This part of the code has been taken from this url https://www.youtube.com/watch?v=9HcxHDS2w1s&t=724s.
    });
  });
};
// Creating a card
const createCard = () => {
  showcaseSection.textContent = "";
  showcaseSection.style.flexDirection = "row";

  //Default card
  const cardDefault = document.createElement("div");
  cardDefault.classList.add("card");
  showcaseSection.append(cardDefault);

  const cardImage = document.createElement("img");
  cardImage.setAttribute("src", "./assets/images/Dawn@0.5x.png");
  cardImage.classList.add("card-image");
  const cardParagraph1 = document.createElement("p");
  cardParagraph1.textContent = "This is a default card.";

  //Hovered card
  const cardHover = document.createElement("div");
  cardHover.classList.add("card");
  cardHover.classList.add("card--hover");
  showcaseSection.append(cardHover);
  const cardHoverImage = document.createElement("img");
  cardHoverImage.setAttribute("src", "./assets/images/Dawn@0.5x.png");
  cardHoverImage.classList.add("card-image");

  const cardParagraph2 = document.createElement("p");
  cardParagraph2.textContent = "This is a hovered card.";

  //Disabled card
  const cardDisabled = document.createElement("div");
  cardDisabled.classList.add("card");
  cardDisabled.classList.add("card--disabled");
  showcaseSection.append(cardDisabled);

  const cardDisabledImage = document.createElement("img");
  cardDisabledImage.setAttribute("src", "./assets/images/Dawn@0.5x.png");
  cardDisabledImage.classList.add("card-image");

  const cardParagraph3 = document.createElement("p");
  cardParagraph3.textContent = "This is a disabled card.";

  cardDisabled.append(cardDisabledImage, cardParagraph3);
  cardDefault.append(cardImage, cardParagraph1);
  cardHover.append(cardHoverImage, cardParagraph2);
};

// Creating a button
const createButton = () => {
  showcaseSection.textContent = "";
  showcaseSection.style.flexDirection = "column";

  //Default button
  const createdButtonDefault = document.createElement("button");
  createdButtonDefault.classList.add("created-button");
  createdButtonDefault.textContent = "I am a default button";
  showcaseSection.appendChild(createdButtonDefault);

  //Hovered button
  const createdButtonHover = document.createElement("button");
  createdButtonHover.classList.add("created-button");
  createdButtonHover.classList.add("created-button--hover");
  createdButtonHover.textContent = "I am a hovered button";
  showcaseSection.appendChild(createdButtonHover);

  //Disabled button
  const createdButtonDisabled = document.createElement("button");
  createdButtonDisabled.classList.add("created-button");
  createdButtonDisabled.classList.add("created-button--disabled");
  createdButtonDisabled.textContent = "I am a disabled button";
  showcaseSection.appendChild(createdButtonDisabled);
};

const createForm = () => {
  showcaseSection.textContent = "";
  showcaseSection.style.flexDirection = "column";

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

  const radioHeader = document.createElement("h3");
  radioHeader.textContent = "Select size:";

  const radioInput1 = document.createElement("input");
  radioInput1.setAttribute("type", "radio");
  radioInput1.setAttribute("id", "radioInput1");
  radioInput1.setAttribute("name", "radioInput");
  radioInput1.setAttribute("value", "small");

  const radioInput2 = document.createElement("input");
  radioInput2.setAttribute("type", "radio");
  radioInput2.setAttribute("id", "radioInput2");
  radioInput2.setAttribute("name", "radioInput");
  radioInput2.setAttribute("value", "medium");

  const radioInput3 = document.createElement("input");
  radioInput3.setAttribute("type", "radio");
  radioInput3.setAttribute("id", "radioInput3");
  radioInput3.setAttribute("name", "radioInput");
  radioInput3.setAttribute("value", "large");

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
  radioContainer.append(radioHeader, radioLabel1, radioLabel2, radioLabel3);

  //Option selector
  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("form-elements__container");

  const optionsHeader = document.createElement("h3");
  optionsHeader.textContent = "Select an item from the list:";

  const optionSelect = document.createElement("select");
  optionSelect.setAttribute("id", "select");

  const option1 = document.createElement("option");
  option1.setAttribute("value", "tshirt-black");
  option1.textContent = "T-shirt (Black)";

  const option2 = document.createElement("option");
  option2.setAttribute("value", "tshirt-white");
  option2.textContent = "T-shirt (White)";

  const option3 = document.createElement("option");
  option3.setAttribute("value", "Hoodie");
  option3.textContent = "Hoodie ";

  optionSelect.append(option1, option2, option3);
  optionsContainer.append(optionsHeader, optionSelect);

  // Submit button
  const submitButton = document.createElement("button");
  submitButton.classList.add("form__submit-button");
  submitButton.textContent = "Submit";

  //Feedback Container
  const feedbackContainer = document.createElement("div");
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    submitButton.style.backgroundColor = "#2164c9";

    feedbackContainer.textContent = "";
    feedbackContainer.classList.add("form__feedback");

    const fullnameParagraph = document.createElement("p");
    fullnameParagraph.textContent = `Your name is ${nameInput.value}`;
    const emailParagraph = document.createElement("p");
    emailParagraph.textContent = `Your email is ${emailInput.value}`;

    const radioChoice = Array.from(
      document.getElementsByName("radioInput")
    ).find((input) => input.checked);

    const productChoice = document.createElement("p");
    productChoice.textContent = `You chose ${optionSelect.value} in size ${radioChoice.value}`;
    feedbackContainer.append(fullnameParagraph, emailParagraph, productChoice);

    console.log(radioChoice);

    form.reset();
  });

  form.append(
    formInfo,
    nameContainer,
    emailContainer,
    radioContainer,
    optionsContainer,
    submitButton,
    feedbackContainer
  );
};

const createMediaController = () => {
  showcaseSection.textContent = "";
  showcaseSection.style.flexDirection = "column";

  const audioArray = [
    {
      title: "Dawn",
      src: "./assets/audio/Dawn.mp3",
    },
    {
      title: "Breaking Point",
      src: "./assets/audio/Breaking Point.mp3",
    },
    {
      title: "Fading",
      src: "./assets/audio/Fading.mp3",
    },
    {
      title: "Embers",
      src: "./assets/audio/Embers.mp3",
    },
    {
      title: "Relentless",
      src: "./assets/audio/ Relentless.mp3",
    },
  ];

  const mediaContainer = document.createElement("div");
  mediaContainer.classList.add("media-container");
  const mediaImage = document.createElement("img");
  mediaImage.setAttribute("src", "./assets/images/Dawn@0.5x.png");
  mediaImage.classList.add("media__image");

  const audioTitle = document.createElement("h3");

  const audioContainer = document.createElement("div");
  audioContainer.classList.add("media-container__audio");

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("media__button-container");

  const audioController = document.createElement("audio");
  // audioController.setAttribute("src", "./assets/audio/Embers.mp3");
  audioController.setAttribute("controls", true);
  audioController.classList.add("audio-player");

  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  const nextButton = document.createElement("button");
  nextButton.dataset.audioButton = "next";
  nextButton.textContent = "Load";

  const audioButtons = [prevButton, nextButton];
  let offset = 0;
  audioButtons.forEach((button) => {
    button.classList.add("audio-button");
    button.addEventListener("click", () => {
      offset = button.dataset.audioButton === "next" ? offset + 1 : offset - 1;
      prevButton.style.visibility = "hidden";

      for (let i = offset - 1; i === offset - 1; i++) {
        audio = audioArray[i];
        audioTitle.textContent = `${i + 1}. ${audio.title}`;
        audioController.setAttribute("src", audio.src);
        console.log(audio);

        if (i === audioArray.length - 1) {
          nextButton.style.visibility = "hidden";
        } else {
          nextButton.style.visibility = "visible";
          nextButton.textContent = "Next";
        }

        if (i === 0) {
          prevButton.style.visibility = "hidden";
        } else {
          prevButton.style.visibility = "visible";
        }
      }
      console.log(offset);
      console.log(audioArray.length);
    });
    button.addEventListener("mousedown", () => {
      button.style.backgroundColor = "black";
    });
    button.addEventListener("mouseup", () => {
      button.style.backgroundColor = "#2164c9";
    });
  });
  buttonContainer.append(prevButton, nextButton);
  audioContainer.append(audioTitle, audioController, buttonContainer);
  mediaContainer.append(mediaImage, audioContainer);
  showcaseSection.appendChild(mediaContainer);
};

const createModal = () => {
  showcaseSection.textContent = "";
  showcaseSection.style.flexDirection = "column";
  //Creating the modal components
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");

  const closeModalButton = document.createElement("button");
  closeModalButton.classList.add("modal__close-button");
  closeModalButton.textContent = "X";

  const openModalButton = document.createElement("button");
  openModalButton.classList.add("modal__open-button");
  openModalButton.textContent = "Click to open a modal";

  const modalInfo = document.createElement("p");
  modalInfo.textContent = "You opened a modal!";

  modalContainer.append(modalInfo, closeModalButton);
  showcaseSection.append(modalContainer, openModalButton);

  openModalButton.addEventListener("click", () => {
    modalContainer.style.visibility = "visible";
    openModalButton.style.visibility = "hidden";
  });

  closeModalButton.addEventListener("click", () => {
    modalContainer.style.visibility = "hidden";
    openModalButton.style.visibility = "visible";
  });
};

const createAlert = (e) => {
  showcaseSection.textContent = "";
  showcaseSection.style.flexDirection = "column";

  const button = document.createElement("button");
  button.classList.add("alert__button");
  button.textContent = "Click me for an alert";

  showcaseSection.appendChild(button);

  button.addEventListener("click", () => {
    if (button.textContent === "Click me for an alert") {
      alert("This is an alert");
      button.textContent = "Click me for a new alert";
    } else if (button.textContent === "Click me for a new alert") {
      alert("You look nice today :)");
    }
  });
  button.addEventListener("mousedown", () => {
    button.style.backgroundColor = "black";
  });
  button.addEventListener("mouseup", () => {
    button.style.backgroundColor = "#2164c9";
  });
};

// Attaching event listeners

navbarButton.addEventListener("click", createNavbar);

carouselButton.addEventListener("click", createCarousel);

cardButton.addEventListener("click", createCard);

buttonButton.addEventListener("click", createButton);

formButton.addEventListener("click", createForm);

mediaButton.addEventListener("click", createMediaController);

modalButton.addEventListener("click", createModal);

alertButton.addEventListener("click", createAlert);
