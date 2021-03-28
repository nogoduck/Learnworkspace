const crypto = require("crypto");
const pass = "pass";
const salt = "salt";
const start = Date.now();

//실행을 해보면 4개씩 끊어서 출력이 된다
//mac, linux에서는 "UV_THREADPOOL_SIZE=8" 으로 내 코어의 갯수에 맞게 설정할 수 있지만
//window환경에서는 앞에 SET을 붙여주어야 한다 "SET UV_THREADPOOL_SIZE=8 "
//실행을 해보면 한꺼번에 잘 돌아간다

crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("1", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("2", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("3", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("4", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("5", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("6", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("7", Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1_000_000, 128, "sha512", () => {
  console.log("8", Date.now() - start);
});
