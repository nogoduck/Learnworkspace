// 학습 실패한 프로젝트 이번 공부는 기능구현에 목적을 두기보단 리팩토링하는데서 더 많은것을 배워간다

// url 값 뒤에 이동할 픽셀을 지정할 때 0이 아닌 값을 지정할 때는 px을 붙여줘야 동작한다

res = document.querySelector("h1");

let imgINDEX = 0;

//객체, 딕셔너리, 맵 , 해쉬, 파이썬에서 쓰던 딕셔너리가 객체를 불리는 다른 이름이였던것이다
//정확히 둘의 차이는 모르겠다
//최근에 오목을 구현하면서 저런식으로 매칭할 일이 있어서 써봤는데 그땐 잘 작동하지 않았었다
//자바스크립트가 정말 유연한 언어로 보인다
const RockScissorPaper = {
  rock: "0",
  scissor: "-134px",
  paper: "-283px",
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

//BUG: 버튼을 클릭하면 이미지가 잠시 멈추는데 그 때 클릭을하면 정상작동을 하지않고 이미지가 빨라지며 버튼을 클릭을해도 반응이 없다
document;
let play;
function setPlay() {
  play = setInterval(() => {
    if (imgINDEX === RockScissorPaper.rock) {
      imgINDEX = RockScissorPaper.scissor;
    } else if (imgINDEX === RockScissorPaper.scissor) {
      imgINDEX = RockScissorPaper.paper;
    } else {
      imgINDEX = RockScissorPaper.rock;
    }

    document.querySelector("#computer").style.background =
      "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " + imgINDEX + " 0";
  }, 100);
}

setPlay();

//   querySelector는 찾는 클래스가 여러개가 있어도
// 처음에 선택한 하나만 선택한다
// 이를 해결하려면 querySelectorAll을 사용하면 된다
var scoreboard = {
  scissor: 1,
  rock: 0,
  paper: -1,
};

document.querySelectorAll(".btn").forEach(function (btn) {
  //function을 화살표 함수로 사용하면 작동하지 않았다 (undefined)
  // 화살표 함수의 작동원리를 다시 학습할 필요성이 느껴진다
  btn.addEventListener("click", function () {
    // clearInterval 을 사용하면 setInterval을 멈춘다
    clearInterval(play);
    // setTimeout 다음 동작을 하기전에 대기하는 시간을 정할 수 있다
    let userSelect = this.textContent;
    let userScore = scoreboard[userSelect];
    let computerScore = scoreboard[computerSelect(imgINDEX)];
    let scoreDiff = userScore - computerScore;
    console.log(userSelect, computerSelect(imgINDEX));

    //내가 선택한  손 출력
    if (userSelect === "rock") {
      document.querySelector("#user").style.background =
        "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " +
        RockScissorPaper.rock +
        " 0";
    } else if (userSelect === "scissor") {
      document.querySelector("#user").style.background =
        "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " +
        RockScissorPaper.scissor +
        " 0";
    } else {
      document.querySelector("#user").style.background =
        "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " +
        RockScissorPaper.paper +
        " 0";
    }
    //중복되는 코드는 되도록 변수를 사용해서 제거한다
    //승리판정
    if (scoreDiff === 0) {
      // console.log("무");
      res.textContent = "무";
    } else if (
      [-1, 2].includes(scoreDiff)
      //.includes를 사용하면 위와같이 한줄로 표현이 가능하다 includes의 값이 배열안에 있으면 true를 보낸다
      //scoreboard[userSelect] - scoreboard[computerSelect(imgINDEX)] === -1 ||
      //scoreboard[userSelect] - scoreboard[computerSelect(imgINDEX)] === 2
    ) {
      res.textContent = "승";
      // console.log("승");
    } else {
      res.textContent = "패";
      // console.log("패");
    }
    setTimeout(function () {
      setPlay();
      res.textContent = "";
      document.querySelector("#user").style.background =
        "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " +
        RockScissorPaper.rock +
        " 0";
    }, 500);

    // if (userSelect === "scissor") {
    //   if (computerSelect(imgINDEX) === "rock") {
    //     console.log("패");
    //   } else if (computerSelect(imgINDEX) === "scissor") {
    //     console.log("무");
    //   } else if (computerSelect(imgINDEX) === "paper") {
    //     console.log("승");
    //   }
    // } else if (userSelect === "rock") {
    //   if (computerSelect(imgINDEX) === "rock") {
    //     console.log("무");
    //   } else if (computerSelect(imgINDEX) === "scissor") {
    //     console.log("승");
    //   } else if (computerSelect(imgINDEX) === "paper") {
    //     console.log("패");
    //   }
    // } else if (userSelect === "paper") {
    //   if (computerSelect(imgINDEX) === "rock") {
    //     console.log("승");
    //   } else if (computerSelect(imgINDEX) === "scissor") {
    //     console.log("패");
    //   } else if (computerSelect(imgINDEX) === "paper") {
    //     console.log("무");
    //   }
    // }
  });
});

// 가위:1. 바위:0 보:-1
//      My\com 가위   바위   보
//      가위    1 1 / 1 0 / 1 -1
//      바위    0 1 / 0 0 / 0 -1
//      보     -1 1 /-1 0 /-1 -1
//
