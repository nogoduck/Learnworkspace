const http = require("http");
const fs = require("fs").promises;

const server = http
  .createServer(async (req, res) => {
    //응답은 꼭 보내주지 않아도 된다 (request, response)
    //스트림 형식이라 아래처럼 여러번 보내고 마지막에 쓰게 해주면된다

    //서버를 실행하다보면 아래 코드가 문자열인지, html 태그인지 구분을 하지 못하는 브라우저가 있다 ex)Safari
    //그래서 직접 알려줘야 한다 content type,  charset은 한글을 구분하게 하기 위함
    //async & await사용하기 위해선 예외를 꼭 처리해준다 try, catch
    //에러가 발생하면 서버가 멈춤
    //새로고침도 서버에 요청을 하는것이다
    try {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      const data = await fs.readFile("./server2.html");
      res.end(data);
    } catch (error) {
      console.error(err); //plain은 일반 문자열을 의미한다
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(err.message);
    }
  })
  .listen(8080); //만 작성하면 콜백을 따로 뺼 수도 있다 아래코드 참고
//   .listen(8080, () => {
//     //port가 80이면 굳이 포트번호를 붙이지 않아도 된다 / 배포시 변경
//     console.log("8080 port connected...");
//   });

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

//##서버는 포트번호를 바꿔서 여러개를 돌릴 수도 있다
const server1 = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>SERVER1 HTTP</h1>");
    res.write("<p>SERVER1 node</p>");
    res.end("<p>END SERVER</p>");
  })
  .listen(8084);

// #### [ REST API ] ####
// - GET : 서버 자원을 가져올 때
// - POST : 서버에 자원을 새로 등록할 때 사용 (또는 뭘 써야할 지 애매할 때)
// - PUT : 서버의 자원을 요청에 들어있는 자원으로 치환하고자 할 때 사용 (전체수정)
// - PATCH : 서버 자원의 일부만 수정하고자 할 때 사용 (부분 수정)
// - DELETE : 서버의 자원을 삭제할 때 사용
