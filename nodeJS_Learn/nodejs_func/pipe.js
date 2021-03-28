//ex) 1mb짜리 버퍼들을 파이프처럼 연결하는 것을 구현
// 이것을 악용하면 버퍼 하나하나를 조작해 악성코드를 넣을 수도 있다
const fs = require("fs");
//파일을 압축해서 쓴다
const zlib = require("zlib");

//해석 : readme 파일을 16바이트씩 읽어서  copyReadMe에 쓴다 (파일 복사)
const readStream = fs.createReadStream("./readme.txt", { highWaterMark: 16 });
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./copyReadMe.txt.gz");
readStream.pipe(zlibStream).pipe(writeStream);
