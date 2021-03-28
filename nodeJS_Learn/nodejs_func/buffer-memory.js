const fs = require("fs");

//#버퍼 방식의 메모리 사용량
//메모리 사용량을 확인할 수 있다.
console.log("before", process.memoryUsage().rss);

const data1 = fs.readFileSync("./big.txt");
fs.writeFileSync("./big2.txt", data1);
console.log("buffer: ", process.memoryUsage().rss);

//실행 결과 (단위 : 바이트)
//before   1829_2736
//buffer:  7_2937_4720
