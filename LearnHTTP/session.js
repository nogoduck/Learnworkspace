// 아래의 코드는 학습을 위해 세션을 편하게 구현한 코드이며 실무에서 사용시 보안의 문제가 있고
// 6장에서 실무에서 사용할 세션을 실제로 만든다
//아래 코드는 이해만 하고 넘어가도 좋다

const http = require("http");
const fs = require("fs").promises;
const url = require("url");
const qs = require("querystring");

//쿠키를 사용해보면 사용자가 임의로 쿠키의 값을 변경할 수 있다 그래서 쿠키에는 중요한 정보(직접적인 정보들)를 보관하기보다 암호화된 정보들을 주로 보관하고 중요한 정보는 서버에 들고있고
//중요한 정보에 접속할 수 있는 키 값을 브라우저에 보내줘서 사용한다
// 이를 세션방법이라고 한다
//아래의 예제에서는 객체를 사용하여 서버에 저장한다
const parseCookies = (cookie = "") =>
  cookie
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

//restServer의 데이터 저장용 users객체와 비슷한 역할을 한다.
const session = {};

http
  .createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith("/login")) {
      const { query } = url.parse(req.url);
      const { name } = qs.parse(query);
      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 5);
      //uniqueInt = 데이터의 키값 (데이터가 겹치지않게 하기위함) 해당코드에서는 현재시간을 줘서 구분함
      const uniqueInt = Date.now();
      //이름과 유효기간을 세션에 저장한다
      //키 값을 찾을 떄 다시 꺼내 쓸 떄 사용함
      session[uniqueInt] = {
        name,
        expires,
      };

      //브라우저로는 uniqueInt를 보낸다 (키 값)
      // name, expires는 보내지 않는다.
      //ex ) Set-Cookie: session=1617206214902; Expires=Wed, 31 Mar 2021 16:01:54 GMT; HttpOnly; Path=/ 로 키 값이 브라우저에 들어간다

      res.writeHead(302, {
        Location: "/",
        "Set-Cookie": `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
      });
      res.end();
      // 세션쿠키가 존재하고, 만료 기간이 지나지 않았다면
      // 키를 사용하여 사용자를 식별하는 구간
      //브라우저 자체에서도 만료 기간이 지나면 보내주지 않지만 노파심에 한번 더 서버안에서 검사를 해준다  session[cookies.session].expires > new Date()
    } else if (
      //현재 cookies.session의 값을 가져온다
      cookies.session &&
      session[cookies.session].expires > new Date()
    ) {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

      //세션에서 이름을 꺼내서 응답한다
      res.end(`${session[cookies.session].name}님 안녕하세요`);
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
