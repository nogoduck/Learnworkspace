// _  __던더스코어 Double underscore

//process
//환경변수에다 값을 넣기도 한다
//환경변수에 넣어뒀다가 불러오는 방식이며
// 직접 넣으면 소스코드가 유출되었을떄 값이 같이 유출되기 떄문에 위험하다
const id = process.env.ID;
const code = process.env.CODE;

//node가 메모리를 처음엔 적게 사용하는데 나중엔 쌓여서 노드가 터질 수가 있다
// 그래서 노드가 메모리를 사용하는 공간을 지정하는 옵션을 사용하기도 한다
// NODE_OPTION = --max - old - space - size = 8192; (노드 실행옵션)
// UV_THREADPOOL_SIZE = 8 (스레드풀 개수)

//promise와 process.nextTick은 새치기를 한다 (원래의 실행순서를 거스르는 행위를 함)
//아래의 코드는 비동기 함수이며 모두 즉시 실행함수다
setImmediate(() => {
  console.log("Immediate");
});

process.nextTick(() => {
  console.log("nextTick");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => console.log("PROMISE"));
// 실행하기전엔 순차적으로 결과가 나올 것 같지만
// 직접 실행을 해보면
// nextTick
// PROMISE
// Timeout
// Immediate
// 순으로 나온다
// 다 test Queue로 넘어가서 먼저 불린애가 먼저 나갈것 같지만 nextTick이나 promise는
// micro task라는 우선순위가 있기가 있기 떄문에 먼저 실행된다 둘다 우선순위이기 때문에 둘의 순서는 서로 지켜진다

//setimmediate와 settimeout,0 은 환경에따라 누가 먼저 실행될지 모른다 그래서 time,0을 사용하는 경우에는
// immediate를 사용하는 것을 권장한다

// node를 실행하게 되면 기본적으로 process가 1개 늘어나는 것이고
// 이를 종료하기 위해 process.exit(0) 또는 1을 사용하는데 0은 오류가 없이 종료된 것이고 1은 오류가 있음을 의미하고
// 1을 많이 사용한다
