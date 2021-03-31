const http = require("http");
const fs = require("fs").promises;
const url = require("url");
const qs = require("querystring");

//request Headers cookie의 값들은 문자열이다
//문자열을 객체로 바꿔주는 함수
// ex) mycookie=test  => { mycookie: 'test' }
const parseCookies = (cookie = "") =>
  cookie
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http
  .createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie); // { mycookie: 'test' }
    // 주소가 /login으로 시작하는 경우
    // form에서 로그인을 하면 받는 위치
    if (req.url.startsWith("/login")) {
      //queryString에서 name을 추출하는 코드
      const { query } = url.parse(req.url);
      const { name } = qs.parse(query);
      // expires (만료)
      const expires = new Date();

      //쿠키에는 추가설정을 할 수 있다 :
      //  만료기간을 넣지않으면 기본적으로 세션쿠키로 동작하기 떄문에 브라우저를 끄면 쿠키가 사라진다
      // 쿠키는 브라우저가 자동으로 보내주는데 만료된 쿠키는 보내주지 않는다

      // 쿠키 유효 시간을 현재시간 + 5분으로 설정
      expires.setMinutes(expires.getMinutes() + 5);
      //쿠키를 확인해보면 요상한 값이 들어있다, 이는 요청주소나 쿠키에 한글이 들어가면 문제가 될 수 있어서 encodeURIComponent 를 사용하여 (2강 참조) 입력값을 인코드를 해준다
      //Cookie: mycookie=test; name=%EC%9D%B4%EC%9C%A0%EC%A7%8

      //302 : 이 주소로 다시 돌려보내라 (redirection) 301 or 302 사용

      //httpOnly : 쿠키를 자바스크립트를 통하여 접근하지 못하게 HTTP만이 접근 할 수 있도록 하는 설정
      //로그인을 위한 쿠키는 필수로 넣어야 하는 조건이다

      //path=/ : / 아래의 주소들에서는 현재 쿠키가 유효함을 나타냄
      res.writeHead(302, {
        Location: "/",
        "Set-Cookie": `name=${encodeURIComponent(
          name
        )}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
      });
      res.end();
      // name이라는 쿠키가 있는 경우
    } else if (cookies.name) {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(`${cookies.name}님 안녕하세요`);
    } else {
      try {
        const data = await fs.readFile("./cookie2.html");
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(err.message);
      }
    }
  })
  .listen(8081, () => {
    console.log("8081 connect...");
  });
