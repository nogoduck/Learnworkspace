const fs = require("fs");

//#스트림 방식으로 파일을 복사할 때의 메모리 사용량
//메모리 사용량을 확인할 수 있다.
console.log("before", process.memoryUsage().rss);

const readStream = fs.createReadStream("./big.txt");
const writeStream = fs.createWriteStream("./big3.txt");

readStream.pipe(writeStream);
readStream.on("end", () => {
  console.log("stream: ", process.memoryUsage().rss);
});

//파일이 많이안커서 큰 차이는 없었지만, 파일이 클수록 메모리차이는
// 대폭 차이가 날 것이다
// before 1832_5504
// stream:  4163_1744
