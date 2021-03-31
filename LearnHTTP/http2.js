const http2 = require("http2");
const fs = require("fs");

//http2 : SSL 암호화도 지원하고 기존의 http1.1보다 속도가 개선되었다 (https와 같이 보안도 챙기고 추가로 속도까지 챙기는 격이다)

//개발시에는 http 실무에서는 http2를 사용해도 좋다
http2
  .createSecureServer(
    {
      cert: fs.readFileSync("도메인 인증서 경로"),
      key: fs.readFileSync("도메인 비밀키 경로"),
      ca: [
        fs.readFileSync("상위 인증서 경로"),
        fs.readFileSync("상위 인증서 경로"),
      ],
    },
    (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write("<h1>Hello Node!</h1>");
      res.end("<p>Hello Server!</p>");
    }
  )
  .listen(443, () => {
    console.log("443번 포트에서 서버 대기 중입니다!");
  });
