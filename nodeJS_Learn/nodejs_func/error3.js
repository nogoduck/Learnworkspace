//모든 에러를 처리하는 코드  : uncaughtException
// 에러를 기록해주는 용도로 사용한다
//이렇게 해주면 에러가 프로세스를 중단시키지 않고 계속 실행시킨다
process.on("uncaughtException", (err) => {
  console.error("예기치 못한 에러", err);
});

setInterval(() => {
  throw new Error("에러 발생");
}, 1000);

setIimeout(() => {
  console.log("실행 체크");
}, 2000);
