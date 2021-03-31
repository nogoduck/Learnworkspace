const http = require("http");

http
  // cookie 사용법
  // 브라우저에서 Set-Cookie를 받으면
  // 그 다음부터는 쿠키에 값을 넣고 자동으로 보내줘서 서버에서는 사용자를 식별할 수 있다.

  //헤더와 본문
  // 브라우저 네트워클 탭을보면 request-payload 에 데이터가 들어가 있을 수가 있는데 그런경우 요청의 데이터라고 불린다 또는 본문, 바디
  //Response 탭을 보면 응답한 값이 들어가 있는데 이 값들은 응답의 데이터, 응답의 본문, 바디 라고도 불린다

  //Reasponse Headers  : 데이터들의 데이터
  // 요청은 Reasponse Headers : 헤더 / Request Headers : 바디로 이루어져 있다

  .createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    //browser - network 탭을 확인해보면 cookie : 에 내가 적은값이 다시 콘솔로 돌아오는 것을 알 수 있고
    // 브라우저는 창을 새로고침하거나 닫지 않는한 쿠키가 남아있다
    // + favico.ico 라는것도 들어오는데 이것은 크롬브라우저가 알아서 보내는 것으로 탭의 아이콘들을 의미한다
    res.writeHead(200, { "Set-Cookie": "mycookie=test" });
    res.end("Hello Cookie");
  })
  .listen(8081, () => {
    console.log("8081 connect...");
  });
