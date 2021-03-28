const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  //메인스레드
  const threads = new Set(); //Set은 중복되지 않는 배열
  threads.add(
    new Worker(__filename, {
      workerData: { start: 1 },
    })
  );
  threads.add(
    new Worker(__filename, {
      workerData: { start: 2 },
    })
  );

  for (let worker of threads) {
    worker.on("message", (value) => console.log("워커로부터: ", value));
    worker.on("exit", () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.log("Worker Exit...");
      }
    });
  }

  const worker = new Worker(__filename); //현재 파일 경로
  worker.on("message", (value) => console.log("워커로 부터 받은 값: ", value));
  worker.on("exit", () => console.log("End Worker~"));
  worker.postMessage("ping"); //워커스레드로 보낸다
} else {
  //워커스레드
  parentPort.on("message", (value) => {
    //메인스레드에서 보낸것이 value로 들어온다
    console.log("부모로부터 받은 값: ", value);
    parentPort.postMessage("pong");
    parentPort.close();
  });
}
