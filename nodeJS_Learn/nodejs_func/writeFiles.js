const fs = require("fs").promises;
//promise나 callback은 둘다 비동기 방식이다 => 논블로킹   / 동기는 블로킹방식
//비동기는 순서대로 안된다 이를 확인하려면 async.js확인
fs.writeFile("./myFavoriteMountineBikeBrands.txt", "BMC, Yeti, ... ")
  .then(() => {
    //생성한 파일 바로 읽기
    return fs.readFile("./myFavoriteMountineBikeBrands.txt");
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  });
