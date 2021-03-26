//node 내장 모듈이다, 내장모듈이라 경로대신 이름만 적어줘도 잘 작동함
const os = require("os");

//노드는 싱글스레드를 사용하지만 나중에 멀티스레드를 사용하게될때 코어의 갯수를 파악할때 사용된다
console.log(os.cpus());
// 아래 링크로 더 많은 node 메서드를 확인 할 수 있다
// https://nodejs.org/dist/latest-v15.x/docs/api/
