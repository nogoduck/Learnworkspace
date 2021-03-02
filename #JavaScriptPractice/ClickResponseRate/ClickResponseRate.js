const screen = document.querySelector("#screen");

let startTime;
let endTime;
var timeout;
const record = [];
//코드들 간에 동작 시간이 너무 느릴때 체크용으로 사용한다
// console.time("시간측정"); <-> console.timeEnd("시간측정"), "" 안의 값은 동일해야한다
// console.log(starttime);
// + 더 정밀한 시간측정이 필요할때 : performance.now()를 사용한다
// ex) const start = performance.now()

screen.addEventListener("click", () => {
  // console.timeEnd("시작측정");
  //classList.contains로 현재 클래스의 상태를 파악할 수 있다
  //밀리초 단위로 출력됌 => 1000으로 나눠야 우리가 사용하는 초 단위로 환산가능
  if (screen.classList.contains("waiting")) {
    screen.classList.remove("waiting");
    screen.classList.add("ready");
    screen.textContent = "초록색이 되면 클릭하세요";
    timeout = setTimeout(() => {
      startTime = new Date();
      screen.click();
      //random은
    }, Math.floor(Math.random() * 1000) + 1000);
  } else if (screen.classList.contains("ready")) {
    //준비상태
    if (!startTime) {
      //부정 클릭
      clearTimeout(timeout);
      console.log("부정클릭 금지!");
      screen.classList.remove("ready");
      screen.classList.add("waiting");
      screen.ineerHTML = "마음이 조급하시네요";
    } else {
      screen.classList.remove("ready");
      screen.classList.add("now");
      screen.textContent = "클릭하세요 !";
    }
  } else if (screen.classList.contains("now")) {
    endTime = new Date();
    let resultTime = endTime - startTime;
    console.log("반응속도: ", resultTime, "ms");
    record.push(resultTime);
    startTime = null;
    endTime = null;
    screen.classList.remove("now");
    screen.classList.add("waiting");
    screen.textContent = "클릭해서 시작하세요";
  }
});

//호출스택 (call stack) :
// 먼저 호출되는 함수가 제일 나중에 빠진다 (호출된 순서대로 스택에 쌓이기 때문에)
// function d() {
//   console.log("D");
// }
// function e() {
//   console.log("E");
// }

// function a() {
//   function b() {
//     function c() {
//       console.log("C");
//     }
//     c();
//     console.log("B");
//   }
//   b();
//   console.log("A");
// }

// d();
// e();
// a();

// 예상 실행 순서 : D, E, C, B, A (맞음)
// 실제 실행 순서 : D, E, C, B, A
