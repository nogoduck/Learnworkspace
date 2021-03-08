const row = 4;
const col = 3;
const cardColorList = [
  "red",
  "red",
  "orange",
  "orange",
  "yellow",
  "yellow",
  "green",
  "green",
  "white",
  "white",
  "pink",
  "pink",
];

let mixedColor = [];
for (let i = 0; 0 < cardColorList.length; i++) {
  console.log(i);
  mixedColor = mixedColor.concat(
    cardColorList.splice(Math.floor(Math.random() * cardColorList.length), 1)
  );
  console.log(mixedColor);
}

function setCard(row, col) {
  for (let i = 0; i < row * col; i++) {
    const card = document.createElement("div");
    card.className = "card";
    const cardInner = document.createElement("div");
    cardInner.className = "card-inner";
    const cardFront = document.createElement("div");
    cardFront.className = "card-front";
    const cardBack = document.createElement("div");
    cardBack.className = "card-back";
    cardBack.style.backgroundColor = mixedColor[i];
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    (function (c) {
      card.addEventListener("click", () => {
        c.classList.toggle("flipped");
      });
    })(card);
    document.body.appendChild(card);
  }
}

setCard(row, col);
