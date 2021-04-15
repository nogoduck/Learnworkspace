const spawn = require("child_process").spawn;

const process = spawn("python", ["data.py", "in the death camp", 4031]);

process.stdout.on("data", function (data) {
  console.log(data.toString());
});

process.stderr.on("data", function (data) {
  console.error(data.toString());
});
