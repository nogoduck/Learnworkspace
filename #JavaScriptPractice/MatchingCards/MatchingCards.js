const row = 4;
const col = 3;

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
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    (function (c) {
      card.addEventListener("click", () => {
        c.classList.toggle("flipped");
      });
      console.log("CLICK CARD");
    })(card);
    document.body.appendChild(card);
  }
}

setCard(row, col);
