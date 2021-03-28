const fs = require("fs").promises;
const constants = require("fs").constants;

//fs.exitsSync : 파일여부를 확인할 수 있다
// fs = file system
// fs.stat : 파일이 폴더인지 바로가기인지 확인 할 수 있다.

// 파일삭제 : unlink  / 폴더삭제 : rmdir
//파일복사 : copyFile('', '');

// createReadStream, createWriteStream 으로도 복사를 할 수 있고
// 스트림끼리 연결하면 압축을 한다던지 더 다양한 작업을 할 수 있다

//fs.watch : 파일 감시

//폴더가 있는지 없는지 검사
fs.access("./folder", constants.F_OK | constants.W_OK | constants.R_OK)
  .then(() => {
    return Promise.reject("폴더가 이미 있음");
  })
  .catch((err) => {
    if (err.code === "ENOENT") {
      console.log("폴더가 존재하지 않음");
      return fs.mkdir("./folder");
    }
    return Promise.reject(err);
  })
  .then(() => {
    console.log("폴더 생성 성공!");
    return fs.open("./folder/file.js", "w");
  })
  .then((fd) => {
    console.log("빈 파일 만들기 성공", fd);
    fs.rename("./folder/file.js", "./folder/newfile.js");
  })
  .then(() => {
    console.log("이름 바꾸기 SUCCESS");
  })
  .catch((err) => {
    console.error(err);
  });
