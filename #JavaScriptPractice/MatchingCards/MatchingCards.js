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
let clickedCard = [];
let completedCard = [];
let mixedColor = [];
for (let i = 0; 0 < cardColorList.length; i++) {
  // console.log(i);
  mixedColor = mixedColor.concat(
    cardColorList.splice(Math.floor(Math.random() * cardColorList.length), 1)
  );
  // console.log(mixedColor);
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
    //클로저를 해결하기 위해 c 매게변수를 받음
    (function (c) {
      card.addEventListener("click", () => {
        //카드 세팅이 완료되기 전에 클릭을 금지하기 위한 조건문
        //작동원리를 아직 이해못했다
        // includes : 배열속에 값의 여부를 확인함
        if (isClick && !completedCard.includes(c)) {
          c.classList.toggle("flipped");
          clickedCard.push(c);
          if (clickedCard.length === 2) {
            if (
              clickedCard[0].querySelector(".card-back").style
                .backgroundColor ===
              clickedCard[1].querySelector(".card-back").style.backgroundColor
            ) {
              console.log("카드가 일치함");
              console.log("카드 목록: ", clickedCard);
              completedCard.push(clickedCard[0]);
              completedCard.push(clickedCard[1]);
              clickedCard = [];
              console.log("초기화 후 카드 목록: ", clickedCard);
            } else {
              console.log("카드가 일치하지 않음");
              console.log(clickedCard);
              //카드 두개의 색깔이 일치하지 않을 때 + 클릭방지
              isClick = false;
              setTimeout(() => {
                clickedCard[0].classList.remove("flipped");
                clickedCard[1].classList.remove("flipped");
                isClick = true;
                clickedCard = [];
              }, 1000);
            }
          }
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
    }, 3000);
  });
}

setCard(row, col);
