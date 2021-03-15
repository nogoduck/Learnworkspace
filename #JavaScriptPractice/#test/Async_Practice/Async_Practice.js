// JavaScript는 기본적으로 동기(Syncronous)적으로 돌아간다
// 호이스팅이(Hoisting)이 된 이후 부터 작성한 코드가 순차적으로 돌아간다
// Hoisting : var, function declartion(변수나 함수같은 선언이 가장 먼저 읽히는 것을 의미한다)

//동기 예제
console.log("A");
console.log("B");
console.log("C");

console.clear();
// ##########_##########_##########_##########_##########

//비동기(Async) 예제
console.log("A"); //동기 (출력)

// 아래 코드가 제일 마지막에 실행된다
// 내 기억상 비동기 코드는 다른 스택으로 이동되었다가 스택이 비어지면
// 그 때 실행되는것으로 알고 있다 자세히 알기 위해선 실행 컨텍스트 공부가 다시 필요하다
//나중에 다시 전달한다는 의미로 콜백함수라고 불린다
setTimeout(() => {
  //비동기 (브라우저한테 요청해두고 콜스택에서 제거)
  console.log("B");
}, 0);
console.log("C"); // 동기 (출력)

// #callback : 콜백도 두가지 경우로 나뉜다

// Synchronous callback : 동기적 콜백 / Immediately(바로)
function printImmediately(print) {
  print();
}

// Asyncronous callback : 비동기 콜백
// setTimeout을 rapping 하는 함수
function printWithDelay(print, timeout) {
  setTimeout(print, timeout); // => //비동기 (브라우저한테 요청해두고 콜스택에서 제거)
}

printImmediately(() => console.log("hello callback"));
printWithDelay(() => console.log("hello Async callback"), 1000);

// 각 언어마다 콜백을 지원하는 방식이 다르다 lambda, function point

// #call back helllllll example
// 가독성이 매우 떨어진다
class UserData {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "fox" && password === "32float") ||
        (id === "queen" && password === "32float")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not Found id or password !"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "fox") {
        onSuccess({ name: "fox", role: "admin" });
      } else {
        onError(new Error("no Access!"));
      }
    }, 1000);
  }
}

const userData = new UserData();
const id = prompt("Input your ID: ");
const password = prompt("Input yout Password: ");

userData.loginUser(
  id,
  password,
  (user) => {
    userData.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role~`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
