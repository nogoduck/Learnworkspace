//노드는 기본적으로 싱글스레드 이기떄문에 효율적으로 cpu코어를 사용하기 위해 cluster를 사용한다
//하지만 코어가 8개를 쓴다고 성능이 8배 좋아지는것은 아니다 workerthead, threadpool 참고

//단점으로는 프로세서를 여러개 띄우기 떄문에 메모리와 세션을 공유하지 못해서
//로그인을 구현할 떄 힘이 많이 들 것이다
//로그인을 하면 해당 정보를 서버 1개에 저장을하지만 코어가 8개가 사용되면 8개의 서버중에
//새로고침을 할 때마다 랜덤으로 접속을 시도하기 때문에 로그인이 된 곳이 있고 안 된 곳이 있어
// 로그인이 풀렸다가 됬다가 할 수 있다
//이를 해결하기 위해 Redis같은 별도의 서버를 사용한다 //15장 참고
const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`마스터 프로세스 아이디: ${process.pid}`);
  // CPU 개수만큼 워커를 생산
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }
  // 워커가 종료되었을 때
  cluster.on("exit", (worker, code, signal) => {
    console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
    console.log("code", code, "signal", signal);
    cluster.fork();
  });
} else {
  // 워커들이 포트에서 대기
  http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write("<h1>Hello Node!</h1>");
      res.end("<p>Hello Cluster!</p>");
      setTimeout(() => {
        // 워커 존재를 확인하기 위해 1초마다 강제 종료
        process.exit(1);
      }, 1000);
    })
    .listen(8086);
  //클러스터방식이 사용하기 좋은 이유 :
  //서버를 8대를 띄우기 위해선 각각의 프로세스를 차지하고 다른 포트를 사용해 주어야하는데
  //클러스터는 8개의 서버를 하나의 포트에 묶어서 사용할 수 있다.
  // 작업 분배같은 경우는 라운드 로빈이라는 고르게 분배해주는 알고리즘을 사용해서 분배한다
  console.log(`${process.pid}번 워커 실행`);
}
//##############################################
// 이 과정들은 매우 복잡하다, 많은 사람들이 쓰는데 다수가 불편함을 느끼면 새로운 기술이 개발이 된다
// 5장과 6장 참고
