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
  cards.forEach((card, index) => {
    let newCard = document.createElement("div");
    newCard.setAttribute("class", `${card}`);
    newCard.style.left = `${index * 24.25}px`;
    cardsContainer.appendChild(newCard);
  });
});

function shuffleAnimation() {
  const allcards = cardsContainer.querySelectorAll("div");
  allcards.forEach((div, index) => {
    div.style.left = "0px";
    setTimeout(() => {
      div.style.left = `${index * 24.25}px`;
      div.setAttribute("class", `${cards[index]}`);
    }, 1000);
  });
}

shuffleBtn.addEventListener("click", () => {
  //randomise all the cards
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cards[i];
    [cards[i], cards[j]] = [cards[j], temp];
  }
  shuffleAnimation();
});

hideBtn.addEventListener("click", () => {
  //add class to all div to change background img
  const allcards = cardsContainer.querySelectorAll("div");
  allcards.forEach((div) => {
    div.classList.toggle("hide");
  });
});

magicBtn.addEventListener("click", () => {
  //rearrange the cards by number then type
  cards.sort((a, b) => {
    let aNum: number = a.split("-")[1];
    let bNum: number = b.split("-")[1];
    return aNum - bNum;
  });
  cards.sort((a, b) => {
    let aType: string = a.split("-")[0];
    let bType: string = b.split("-")[0];
    return cardTypes.indexOf(aType) - cardTypes.indexOf(bType);
  });
  shuffleAnimation();
});
