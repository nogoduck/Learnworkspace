//JavaScript는 script Language라서 즉성해서 코드를 실행할 수 있따
// REPL : R(Read) E(Evaluate) P(Print) L(Loop) / 읽고 평가하고 출력하고 반복한다

// node에서 module 만들기 => 인터넷 익스플로러에서는 지원을 하지 않아서 잘 사용하지 않았다 (node에서는 매우 잘 작동하는것으로 보아 서버측에서 사용하려고 나온 기술로 추측)
//브라우저의 모듈(JavaScript) 시스템에서는 import를 사용한다

//node가 있기에 module 시스템을 사용이 가능하다 (내장객체) : 외우지 말고 이런게 있다고만 넘어가도 좋다 / 필요할때 다시 찾아서 사용하면 된다, 사실 양도 너무 많아서 외우지도 못한다
//왜 import를 node에서는 사용하지않는가 ?? node에서도 사용을 할 순 있다 하지만
// 자바스크립트 모듈보다 노드의 모듈이 먼저 개발되었는데 출시 될때 서로가 일치되지 않았었다
// 기존의 문법을 바꾸기도 상당히 어려운 작업이고 고장이 날 위험성이 따른다
// 그래서 노드는 계속 module.export와 require를 사용해서 모듈을 쓰고 있다
// import를 사용 하는 경우에는 from을 사용해서 가져와주고
// 기존의 module.exports는 export default로 바꿔서 내보낼 수 있는 상태로 만들어 준다
// import { val1, val2 } from "./exampleImport";
// console.log(val1, val2);

// 주의사항으로는 require랑 import / export default랑 module.export랑 동작이 조금씩 다르다
// 대부분의 경우는 잘 바뀌지만 무턱대로 바꾸면 좋지 않다
// react 라이브러리를 사용하면서 많이 썻던 문법이다

// 코드를 잘개 쪼갤 수 있어 관리가 훨씬 수월해진다

const importVariable = require("./app2");

// 아래처럼 구조분해할당도 가능하다 가져온 파일에서 변수명만 사용할 수도 있다
// 가져올 파일 내에서의 변수명하고 현재 사용할 변수명하고 동일해야 한다
const { odd, even } = require("./app2");

console.log(odd, even);
console.log(importVariable);

const bigNumber = 1e11;
console.log(bigNumber);

const isNumber = (number) => {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
};

console.log(isNumber(10));

module.exports = isNumber;

console.log("APP.js");
// 다른 대서 옮겨받은 값을 또 다른 곳으로 옮길 수도 있다
// 단 module.exports는 파일에서 한 번만 사용할 수 있다
// module.exports = {
//   bigNumber,
//   odd,
//   even,
// };

// ################[Node Object Check]################
// Node 객체 확인하기
// browser 에서는 window로 객체를 확인했었는데 node에서는 global을 사용한다
// 이게 서로 햇갈려서 브라우저와 node에서 globalThis로 통일했다 그러나 node는 브라우저의 특성을 가지지 않았기 떄문에
// document나 window관련 객체를 사용 할 수가 없다
// 브라우저에서처럼 setTimeout을 사용 할때 window를 생략했던것처럼 노드에서도 globalThis을 생략해서 사용할 수가 있다.

//객체를 로깅할 떄에는 log보다 dir을 사용하는 것이 유용하다 eX)console.dir()
globalThis.console.log("hi");

//global끼린 값이 공유가 되서 파일이 수백개면 가져오지 않고도 사용할 수 있다고 하는데
//실습결과 그렇게 되지 않았다
// const D = require("./globalA");
// globalThis.message = "APPLE";
// console.log(D());

//값은 모듈로 만들어 넘기는 것이 정석이다

//##########[ console table ]##########
const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};

console.time("전체시간");
console.log("값이 잘 대입되었나 체크용 로그입니다");
console.log(string, number, boolean);

console.log('Error Message는 "console.error"에 담아주세요');

console.log(obj); //큰 차이를 아직 못느꼈다
console.dir(obj);

console.table([
  { name: "fox", birth: 1995 },
  { name: "bear", birth: 1984 },
]);

console.log(obj, { colors: false, depth: 2 });
console.log(obj, { colors: true, depth: 1 });
// log와 dir 값을 대입하는데 큰 차이가 있다 꼭 확인바람
console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time("시간 측정");
for (let i = 0; i < 1e9; i++) {}
console.timeEnd("시간 측정");

function b() {
  console.trace("에러 위치 추적");
}

function a() {
  b();
}
a();

console.timeEnd("전체시간");

//setTimeout : 몇초뒤에 실행
//setInterval : 지정한 시간마다 실행
//clear(timeout/Interval) : 실행되어 있는 시간명령 취소
//setInterval을 사용할땐 보통 변수안에 담아서 사용한다

const test = setInterval(() => {
  console.log("testInterval");
}, 1500);

clearInterval(test);
//setTimeout(callback, 0) 과 setImmediate는 둘다 바로 실행되는 비동기 함수인데 서로 실행순서에 있어서 차이가 있다
// setImmediate는 사용을 선호 백그라운드 -> 이벤트 큐 -> 호출스택 으로 가기때문에 clear로 취소가능

//###########[ Timer ]###########

const timeout = setTimeout(() => {
  console.log("1.5초 후 실행");
}, 1500);

const interval = setInterval(() => {
  console.log("1초 후 실행");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("3초 후 실행을 기대하지만 취소한 코드");
}, 3000);

//2.5초후 타이머들 취소
setTimeout(() => {
  clearTimeout(timeout2);
  clearTimeout(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
  console.log("즉시 실행을 기대하지만 실행을 취소한 코드");
});

clearImmediate(immediate2);
