const fs = require("fs");

//실행을 할 때마다 순서가 다르게 읽힌다
//비동기는 콜백을 백그라운드로 다 보낸다
//백그라운드로 넘어가면 동시에 실행된다
//실행된것이 끝나는건 운영체제가 알아서 파일을 읽은 순서대로 테스트큐에 넣어주기 때문에
// 순서가 보장이 되지 않는다
//순서를 보장하기 위해선 블로킹방식에서 논블로킹방식에서 하는방법이 각각있다
fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번 ", data.toString());
});

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("2번 ", data.toString());
});

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("3번 ", data.toString());
});

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("4번 ", data.toString());
});
