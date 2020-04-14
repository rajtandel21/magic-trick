var cardsContainer = document.getElementById("cards");
var startBtn = document.getElementById("start");
var shuffleBtn = document.getElementById("shuffle");
var hideBtn = document.getElementById("hide");
var magicBtn = document.getElementById("magic");
//all the card types
var cardTypes = ["heart", "club", "spade", "diamond"];
//will hold all 52 cards
var cards = [];
//creates the 13 cards for each types
cardTypes.forEach(function (card) {
    for (var i = 1; i <= 13; i++) {
        cards.push(card + "-" + i);
    }
});
startBtn.addEventListener("click", function () {
    //create div for each card and place them next to each other
    var cardDistance = 0;
    cards.forEach(function (card) {
        var newCard = document.createElement("div");
        newCard.setAttribute("class", "" + card);
        newCard.style.left = cardDistance * 24.25 + "px";
        cardsContainer.appendChild(newCard);
        cardDistance++;
    });
});
shuffleBtn.addEventListener("click", function () {
    var _a;
    //randomise all the cards
    for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        _a = [cards[j], temp], cards[i] = _a[0], cards[j] = _a[1];
    }
    var allcards = cardsContainer.querySelectorAll("div");
    allcards.forEach(function (div, index) {
        div.setAttribute("class", "" + cards[index]);
    });
});
hideBtn.addEventListener("click", function () {
    //add class to all div to change background img
    var allcards = cardsContainer.querySelectorAll("div");
    allcards.forEach(function (div) {
        div.classList.toggle("hide");
    });
});
