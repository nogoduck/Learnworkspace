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

let isClick = true;
let mixedColor = [];
for (let i = 0; 0 < cardColorList.length; i++) {
  console.log(i);
  mixedColor = mixedColor.concat(
    cardColorList.splice(Math.floor(Math.random() * cardColorList.length), 1)
  );
  console.log(mixedColor);
}
//카드 생성
function setCard(row, col) {
  isClick = false;
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
        //카드 세팅이 완료되기 전에 클릭을 금지하기 위한 조건문
        //작동원리를 아직 이해못했다
        if (isClick) {
          c.classList.toggle("flipped");
        }
      });
    })(card);
    document.body.appendChild(card);
  }

  document.querySelectorAll(".card").forEach((card, i) => {
    //0.1초 간격으로 순차적으로 카드의 색깔을 공개한다
    setTimeout(() => {
      card.classList.add("flipped");
    }, 1000 + 100 * i);
    //5초 후 카드 뒤집기
    setTimeout(() => {
      document.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("flipped");
      });
      isClick = true;
    }, 5000);
  });
}

setCard(row, col);
