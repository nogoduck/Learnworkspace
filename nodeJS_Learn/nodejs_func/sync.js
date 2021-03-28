const fs = require("fs");
//한번만 실행하거나 서버를 초기화 할 때 사용하고 대부분은 비동기를 사용하면서 순서를 유지한다

let data = fs.readFileSync("./readme.txt");
console.log("1번 ", data.toString());

data = fs.readFileSync("./readme.txt");
console.log("2번 ", data.toString());

data = fs.readFileSync("./readme.txt");
console.log("3번 ", data.toString());
