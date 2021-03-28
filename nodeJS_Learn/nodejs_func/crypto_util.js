// md5 / sha1는 사용을 권하지 않음 => 취약점이 발견됌
// sha512추천

const crypto = require("crypto");
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
