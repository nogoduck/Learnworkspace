//다른언어 호출
// const { exec } = require("child_process");
const exec = require("child_process").exec;

console.log("== [ dir ] ==");
let process = exec("dir");

process.stdout.on("data", function (data) {
  console.log(data.toString());
});

process.stderr.on("data", function (data) {
  console.error(data.toString());
});
