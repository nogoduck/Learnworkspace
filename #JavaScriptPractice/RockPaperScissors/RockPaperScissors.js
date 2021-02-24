// url 값 뒤에 이동할 픽셀을 지정할 때 0이 아닌 값을 지정할 때는 px을 붙여줘야 동작한다

let imgINDEX = 0;

//객체, 딕셔너리, 맵 , 해쉬, 파이썬에서 쓰던 딕셔너리가 객체를 불리는 다른 이름이였던것이다
//정확히 둘의 차이는 모르겠다
//최근에 오목을 구현하면서 저런식으로 매칭할 일이 있어서 써봤는데 그땐 잘 작동하지 않았었다
//자바스크립트가 정말 유연한 언어로 보인다
const RockScissorPaper = {
  rock: "0",
  scissor: "-134",
  paper: "-283",
};

//indexOf는 1차원 배열에 사용하고,
// find, findIndex는 2차원 배열에 사용한다

//객체를 배열 형태로 바꿔줌 Object.entries()
// console.log(Object.entries(RockScissorPaper));

//하드코딩을 리팩토링하는게 더 어렵지만 효율적이다
function computerSelect(imgINDEX) {
  //배열.find는 반복문으로 원하는 것을 찾으면 true를 비턴한다 (배열에서 특정한 값을 찾아준다)
  return Object.entries(RockScissorPaper).find((v) => {
    // console.log(v);
    //객체의 값들을 배열로 바꾼걸보면 키는 [0] 값은  [1] 배열에 삽입되있다
    return v[1] == imgINDEX;
  })[0];
}

//아래와 같은 키와 값이 바뀐 코드를 작성하기 위해
// const RockScissorPaper2 = {
//   0: "rock",
//   "-134": "scissor",
//   "-283": "paper",
// };

//변수는 짧게 쓴다고 좋은것이 아니다
//길고 자세하게 의미를 담을수록 좋다
//Clean Code 책을 꼭 읽어봐야 한다
//하지만 작년에 알고리즘을 공부하면서 변수명을 최대한 빠르게 쓰기위해 간추리는게 습관이 되버렸다
//나 혼자만 볼 코드라 생각하고 짜는것도 한몫한다

setInterval(() => {
  if (imgINDEX === RockScissorPaper.rock) {
    imgINDEX = RockScissorPaper.scissor;
  } else if (imgINDEX === RockScissorPaper.scissor) {
    imgINDEX = RockScissorPaper.paper;
  } else {
    imgINDEX = RockScissorPaper.rock;
  }

  document.querySelector("#computer").style.background =
    "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " + imgINDEX + "px 0";
}, 100);

//   querySelector는 찾는 클래스가 여러개가 있어도
// 처음에 선택한 하나만 선택한다
// 이를 해결하려면 querySelectorAll을 사용하면 된다

document.querySelectorAll(".btn").forEach((btn) => {
  console.log(btn);
  //function을 화살표 함수로 사용하면 작동하지 않았다 (undefined)

  // 화살표 함수의 작동원리를 다시 학습할 필요성이 느껴진다
  btn.addEventListener("click", function () {
    let userSelect = this.textContent;
    console.log(userSelect, computerSelect(imgINDEX));

    if (userSelect === "가위") {
      if (computerSelect(imgINDEX) === "rock") {
        console.log("패");
      } else if (computerSelect(imgINDEX) === "scissor") {
        console.log("무");
      } else if (computerSelect(imgINDEX) === "paper") {
        console.log("승");
      }
    } else if (userSelect === "바위") {
      if (computerSelect(imgINDEX) === "rock") {
        console.log("무");
      } else if (computerSelect(imgINDEX) === "scissor") {
        console.log("승");
      } else if (computerSelect(imgINDEX) === "paper") {
        console.log("패");
      }
    } else if (userSelect === "보") {
      if (computerSelect(imgINDEX) === "rock") {
        console.log("승");
      } else if (computerSelect(imgINDEX) === "scissor") {
        console.log("패");
      } else if (computerSelect(imgINDEX) === "paper") {
        console.log("무");
      }
    }
  });
});
