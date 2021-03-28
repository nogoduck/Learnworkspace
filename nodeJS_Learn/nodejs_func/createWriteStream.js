const fs = require("fs");

const writeStream = fs.createWriteStream("./writeBuffer.txt");

//writeStream : write, end, finish
writeStream.on("finish", () => {
  console.log("Complete write file");
});

writeStream.write("1번 줄 글을 삽입합니다.\n");
writeStream.write("2번 줄은 쓸 내용이 없습니다 ");
writeStream.end(); // 완료
