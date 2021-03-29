const http = require("http");

const server = http
  .createServer((req, res) => {
    //응답은 꼭 보내주지 않아도 된다 (request, response)
    //스트림 형식이라 아래처럼 여러번 보내고 마지막에 쓰게 해주면된다
    res.write("<h1>HELLO HTTP</h1>");
    res.write("<p>HELLO node</p>");
    res.end("<p>END SERVER</p>");
  })
  .listen(8080, () => {
    console.log("8080 port connected...");
  });

//   .listen(8080) 만 작성하면 콜백을 따로 뺼 수도 있다 아래코드 참고

//프로세스에 올려야 작동한다
//서버도 프로그램이기 때문에 노드가 이를 프로세스로 올려주어야하고
//올리기 위해선 포트를 하나 사용한다 .listen

//도메인을 구매하지 않았기 떄문에 localhost를 사용하여 접속해준다
// https인 경우에는 443 포트번호가 생략되어있다
// http는 80번을 사용한다 생략가능
//0 ~ 1023까지는 자주쓰는 포트들이다
// 1024 ~ 49151까지 등록가능한 포트고
//  49152 ~ 65536까지는 동적 포트이다
//  대부분 80이나 ,443을 사용한다

//비동기 코드이기에 에러처리를 해준다
server.on("listening", () => {
  console.log("port 8080 Connected...");
});

server.on("error", (error) => {
  console.error(error);
});

//코드를 수정하면 서버를 항상 재시작 해줘야한다
