const spawn = require("child_process").spawn;
//python을 불러올 수 있다
// 단 python이 깔려있어야한다 c를 실행할 시에도 동일함
//node는 실행을 요청하기만 한다
const process = spawn("python", ["text1.py"]);

process.stdout.on("data", function (data) {
  console.log(data.toString());
});

process.stderr.on("data", function (data) {
  console.error(data.toString());
});
//멀티스레드를 할때도 위와같이 다른언어를 통해서받는게 효율적으로 보인다
