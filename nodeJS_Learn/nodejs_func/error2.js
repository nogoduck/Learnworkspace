const fs = require("fs");

//예외를 하는 이유 : 에러로 부터 노드 프로세스를 보호하기 위함
// js에서는 예외랑 에러랑 큰 차이가 없다
// 다른 언어에서는 예외(Exception), 에러(Error)를 다른 객체로 처리하기도 한다
// 처리를 못하면 일어나는 일 : 노드 스레드가 멈춘다
// 노드는 싱글스레드라서 프로세스가 중단된다

// 기본적으로 try, catch를 사용한 에러처리
// 에러가 발생할 만한 곳에 활용
setInterval(() => {
  console.log("===== START");
  try {
    //throw : 에러를 낸다
    throw new Error("bugbugbugbugbugbugbugbgubguub");
  } catch (err) {
    console.error(err);
  }
}, 1000);

//감싸지 않아도 되는 예제
//fs는 try, catch를 하지않아도 에러가 나면 멈추지 않는다
// 그래서 아래와 같이 예외처리를 할 수 있다.
setInterval(() => {
  fs.unlink("./abcdefg.js", (err) => {
    if (err) {
      console.error("fs에러 :", err);
    }
  });
}, 1000);

//비동기의 callback error는 node process를 멈추게 하지 않는다
//하지만 promise를 사용할때는 무조건 catch를 붙여주어야 한다
// + 노드14까지는 아직 고장이 나지 않았지만 노드 버전이 올라가면서
//에러 발생시 노드 프로세스를 강제종료 할 수도 있기 때문이다
