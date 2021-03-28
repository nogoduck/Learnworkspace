const fs = require("fs");
const file = fs.createWriteStream("./big.txt");

//#1gb 파일 생성 (실 생성용량 : 677mb)
for (let i = 0; i <= 10_000_000; i++) {
  file.write("해당 파일은 1GB의 공간을 확보할 때까지 씌여집니다.\n");
}

file.end();
