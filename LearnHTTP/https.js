//https는 개인정보 보호법에 의해서 거의 필수로 사용된다
//https를 사용해야 하는 이유 : 요청을 보낼 떄 network - header에 너무 중요한 정보가 많이 들어가 있기 떄문에 요청된 정보가 탈취가 되면 보안상 매우 위험하다
//https를 적용하면 요청들이 암호화되서 전달이 된다 (해커들이 풀기가 어려움) => 실무에서 무조건 사용
const https = require("https");
const fs = require("fs");
//http와 https 모듈은 다르다

//작동 방식 차이점으로는
// 인수가 하나 더 들어간다 (cert, key, ca)
//암호화를 하기 위해선 인증서를 인증기관에서 얻어와야한다
//cert, key, ca 파일을 받으면 fs로 읽어서 넣어준다

//인증기관중에 발급이 편한 사이트 : letsencrypt
//https://letsencrypt.org/ko/

// server에서는 Sync 사용을 권장하지 않는데 사용하는 경우는 딱 한번만 실행하거나
// 서버를 초기화 할 때 사용이 가능하다, 아래는 초기화를 위해 사용되었다
https
  .createServer(
    {
      cert: fs.readFileSync("도메인 인증서 경로"),
      key: fs.readFileSync("도메인 비밀키 경로"),
      ca: [
        fs.readFileSync("상위 인증서 경로"),
        fs.readFileSync("상위 인증서 경로"),
      ],
    },

    //아래의 서버가 시작 되기전에 인증서의 값을 넣어주어야 서버가 돌아간다
    // 안넣어도 서버느 돌아가긴 하는데 상단 주소창을 보면 자물쇠는 뜨지만
    // 인증서에 문제가 있다고 표시된다
    //여기부턴 http와 동일
    (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write("<h1>Hello Node!</h1>");
      res.end("<p>Hello Server!</p>");
    }
  )
  .listen(443, () => {
    console.log("443번 포트에서 서버 대기 중입니다!");
  });
//https는 포트번호가 443이다, 다른포트번호도 가능하지만 443으로해야 생략해서 주소줄에 작성할 수 있다.
