console.log("--------[ Except ]--------");
//JavaScript 예외처리

function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw "@@ not a Number @@";
    //결과 : Uncaught @@ not a Number @@
    // Uncaught(잡히지 않은)
  }
  return a + b;
}

console.log(sum(2, 4));

//###########################################

function func2() {
  console.log("func2 Start");
  throw "func2() Error"; // throw만 적으면 func2에 발생한 예외가 콜스택에 쌓여있던 func2()가 파괴되고 throw가 func1()로 가서 순차적으로 , main까지 모두 파괴된다 => 뒷부분이 실행안됌
  //해결방법 : try / catch 구문 사용
  console.log("func2 End");
}
function func1() {
  console.log("func1 Start");
  try {
    func2(); //예외가 발생할 수 있는 코드
  } catch (e) {
    //예외로 넘어온 파라미터 e를 찍어본다
    console.log(e); // 예외가 발생하여도 func2의 예외 발생 부분을 제외한 나머지 스택에 있던 뒷부분이 모두 잘 실행된다
  }
  //실행결과 :
  //   will : func1
  // !Practice4.js:24 func1 Start
  // !Practice4.js:18 func2 Start
  // !Practice4.js:29 func2() Error
  // !Practice4.js:32 func1 End
  // !Practice4.js:47 did : func1
  console.log("func1 End");
}

console.log("will : func1");
try {
  func1();
} catch (e) {
  console.log(e);
}
//실행결과 :
// will : func1
// !Practice4.js:24 func1 Start
// !Practice4.js:18 func2 Start
// !Practice4.js:38 func2() Error
// !Practice4.js:40 did : func1
console.log("did : func1");

// 예상 실행 순서 : whill => fun1Start => func2 Start, end => func1 End => did
// // 실제 실행 순서 : will : func1
// !Practice4.js:22 func1 Start
// !Practice4.js:18 func2 Start
// !Practice4.js:19 func2 End
// !Practice4.js:24 func1 End
// !Practice4.js:29 did : func1

console.log("[ 동기 예외처리 ↑ ]");
console.log("[ 비동기 예외처리 ↓ ]");

//예외 발생
//실행결과 : Uncaught (in promise) error!
function wait(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("error!");
    }, sec * 1000);
  });
}

// wait(2) //wait가 성공했을 때 첫번째로 아랫줄을 실행하고 두번쨰로 그 아랫줄을 순차적으로 체인을 걸 수 있다
//   // 하지만 catch는 순차적으로 사용할 수 없다
//   .then(() => {})
//   .then(() => {});

//promise의 catch함수를 사용하여 에러를 잡는다

//
wait(2)
  .catch((e) => {
    console.log("First Catch: ", e);
  })
  .catch((e) => {
    console.log("Second Catch: ", e);
  });

//wait는 비동기 함수이기 때문에 예외를 catch로 잡을 수 없다
// try {
//   wait(2);
// } catch (e) {
//   console.log(e);
// }
