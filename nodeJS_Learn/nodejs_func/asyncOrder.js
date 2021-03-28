const fs = require("fs");
//논블로킹(비동기) 콜백 예제 => 실행되는 순서가 보장됌
// [?] 이렇게 작성하면 동기코드랑 뭐가 다른가
// 이 비동기파일(asyncOrder.js)이 100개가 있다고 하면 모두 백그라운드로 한꺼번에 들어가서 한번에 실행이 되지만
// 동기인 코드는 파일하나하나가 실행이 끝나야 순차적으로 실행이 된다

console.log("### call back hell & asyncOrderFile ###");
fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번 ", data.toString());
  fs.readFile("./readme.txt", (err, data) => {
    if (err) {
      throw err;
    }
    console.log("2번 ", data.toString());
    fs.readFile("./readme.txt", (err, data) => {
      if (err) {
        throw err;
      }
      console.log("3번 ", data.toString());
      fs.readFile("./readme.txt", (err, data) => {
        if (err) {
          throw err;
        }
        console.log("4번 ", data.toString());
      });
    });
  });
});

//promise를 사용하여 수정한코드는 asyncOrderPromise.js 참고
