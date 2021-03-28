// md5 / sha1는 사용을 권하지 않음 => 취약점이 발견됌
// sha512추천

const crypto = require("crypto");
const { callbackify } = require("node:util");
console.log(
  "base64: ",
  crypto.createHash("sha512").update("비밀번호").digest("base64")
);
console.log(
  "Hex: ",
  crypto.createHash("sha512").update("비밀번호").digest("hex")
);

// 위는 노드 내장 모듈
// createHash 사용할 해시 알고리즘 삽입, update(문자열) = 반환할 문자열 , digest(인코딩) = 인코딩할 알고리즘 삽입

// 현재는 pbkdf2, bcrypt, scrypt 알고리즘으로 암호화를 한다
// node에서는 pbkdf2와 scrypt를 지원함
// sha512가 취약해지면 sha3으로 넘어가야함

//## [ how to use pbkdf2 ] ##

// salt > 해독을 더 어렵게 하기위해 섞은 문자열
// randomByte로 64바이트 문자열 생성 -> salt의 역할
// pbkd2의 인수로 비밀번호, salt, 반복횟수, 출력 바이트, 알고리즘 입력
// 반복 횟수를 조정하여 암호화하는데 1초가 걸리게 하는것이 권장됨
crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString("base64");
  console.log("salt: ", salt);
  crypto.pbkdf2("비밀번호: ", salt, 100000, 64, "sha512", (err, key) => {
    console.log("password: ", key.toString("base64"));
  });
});

// 비밀번호를 db에 저장할땐
// salt와 비밀번호를 둘다 저장해야한다 salt가 달라지면 비밀번호도 달라지기 떄문에

//대칭형은 aes암호화 추천 / 비대칭은 rsa 방식추천
// 키 관리방식은 회사마다 다르고 전략이 다르다
//aws kms
//비밀번호가 뚫리는데는 대부분 사람의 실수로인해 뚫린다
// ex) 카톡공유, 단순한 비밀번호

// ====== [ util ] =====
// deprecated, promisify
// 모듈시스템 : js에서는 es2015 모듈 : import, export  / node에서는 commonJS로 require exports를 계속 사용한다
//기존의 코드는 함부로 수정하기 어렵다 , 괜히 수정했다가 그걸사용하던 개발자들까지 싹다 뜯어고쳐야 하는일이 발생할 수도 있기 떄문
//만약에 잘못 만들어졋다면 deprecated로 해당 기능을 감싸줘야하며 감싼 기능을 사용할 때마다 경고창이 뜨게 될 것이다
//버전을 수정해주면서 deprecated를 삭제해주어야 한다

// node에서는 promise를 지원하지 않는 모듈이 많다 그래서 async, await을 사용할 수도 없다 (callback의 특성)
// 하지만 util.promisify로 감싸주면 Promise : then ,catch , await을 붙일 수가 있다
// 단 조건이 있다 콜백 조건이 (error, data) => {} 이여야만 변경이 가능하다
// 노드의 대부분 콜백은 저런 구조이다
