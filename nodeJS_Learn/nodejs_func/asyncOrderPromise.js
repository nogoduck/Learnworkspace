const fs = require("fs").promises;

console.log("\n### promise & asyncOrderFile ###");
fs.readFile("./readme.txt")
  .then((data) => {
    console.log("1번 ", data.toString());
    return fs.readFile("./readme.txt");
  })
  .then((data) => {
    console.log("2번 ", data.toString());
    return fs.readFile("./readme.txt");
  })
  .then((data) => {
    console.log("3번 ", data.toString());
    return fs.readFile("./readme.txt");
  })
  .then((data) => {
    console.log("4번 ", data.toString());
    return fs.readFile("./readme.txt");
  })
  .catch((err) => {
    throw err;
  });

// 더 깔끔하게 작성하기 위해서 async & await 을 사용하여 작성할 수도 있다
// 별도의 파일을 확인하려면 async_main.js 참고
//sync는 편하긴 하지만 실제로 서버에서 사용하면 문제가 좀 발생한다

async function main() {
  let data = await fs.readFile("./readme.txt");
  console.log("1번 ", data.toString());
  data = await fs.readFile("./readme.txt");
  console.log("2번 ", data.toString());
  data = await fs.readFile("./readme.txt");
  console.log("3번 ", data.toString());
  data = await fs.readFile("./readme.txt");
  console.log("4번 ", data.toString());
}

main();
