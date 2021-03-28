// 파일 시스템에 접근하는 모듈
const fs = require("fs").promises; //.promises를 붙이면 알아서 프로미스로 사용할 수 있다
//callback형식을 가지고있다node에서는 err, data타입을 대부분 가지고있음

fs.readFile("./readme.txt")
  .then((data) => {
    console.log(data); // 기본값이 16진법으로 출력된다 (2진법을 16진법으로 바꿔서)
    console.log(data.toString()); //사람이 알아먹을 수 있게 변환
  })
  .catch((err) => {
    throw err;
  });

//기존 promise를 사용하지 않는 방식(callback)
// fs.readFile("./readme.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }

//   console.log(data); // 기본값이 16진법으로 출력된다 (2진법을 16진법으로 바꿔서)
//   console.log(data.toString()); //사람이 알아먹을 수 있게 변환
// });
