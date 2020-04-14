const cardsContainer = document.getElementById("cards");
const startBtn = document.getElementById("start");
const shuffleBtn = document.getElementById("shuffle");
const hideBtn = document.getElementById("hide");
const magicBtn = document.getElementById("magic");
//all the card types
const cardTypes = ["heart", "club", "spade", "diamond"];

//will hold all 52 cards
let cards = [];

//creates the 13 cards for each types
cardTypes.forEach((card) => {
  for (let i = 1; i <= 13; i++) {
    cards.push(`${card}-${i}`);
  }
});

startBtn.addEventListener("click", () => {
  //create div for each card and place them next to each other
  let cardDistance: number = 0;
  cards.forEach((card) => {
    let newCard = document.createElement("div");
    newCard.setAttribute("class", `${card}`);
    newCard.style.left = `${cardDistance * 24.25}px`;
    cardsContainer.appendChild(newCard);
    cardDistance++;
  });
});

shuffleBtn.addEventListener("click", () => {
  //randomise all the cards
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cards[i];
    [cards[i], cards[j]] = [cards[j], temp];
  }
  const allcards = cardsContainer.querySelectorAll("div");
  allcards.forEach((div, index) => {
    div.setAttribute("class", `${cards[index]}`);
  });
});

hideBtn.addEventListener("click", () => {
  //add class to all div to change background img
  const allcards = cardsContainer.querySelectorAll("div");
  allcards.forEach((div) => {
    div.classList.toggle("hide");
  });
});
