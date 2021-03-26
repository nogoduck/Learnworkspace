const { odd, even } = require("./app2");

//아래는 변수명이기 때문에 마음대로 할 수 있다 하지만 위처럼 구조분해 할당을 할때는
//속성명이랑 변수명이랑 똑같아야 사용할 수 있다

//[?] 나는 require로 app.js에 있는 함수만 가져왔을 뿐인데 왜 자꾸 app.js가 실행되는지 모르겠다
// 다른 파일을 실행만하고 변수명은 가져오고 싶지않으면 require("./app") 만 쓰면 된다는데 나는 변수명을 지정 주었어도 파일이 실행되고 변수명에 담아진다
// const checkNumber = require("./app");

console.log(odd, even);
// console.log(checkNumber);

const oddOrEvenIsNumber = (number) => {
  console.log(Boolean(number % 2));
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
};

// console.log("홀:", checkNumber(11));
console.log("짝: ", oddOrEvenIsNumber(16));

console.log("INDEX.js");
