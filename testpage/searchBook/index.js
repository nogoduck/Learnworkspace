// const spawn = require("child_process").spawn;
const { PythonShell } = require("python-shell");
let pyshell = new PythonShell("data.py");

const option = {
  mode: "text",
  pythonPath: "",
  pythonOption: ["-u"],
  scriptPath: "",
  args: ["val1", "val2", "val3"],
};

PythonShell.run("data.py", option, (err, res) => {
  if (err) throw err;
  console.log("SUCCESS : ", res);
});

pyshell.send("in the death camp", 3034);

pyshell.on("message", (message) => {
  console.log(message);
});

pyshell.end((err, code, signal) => {
  // if (err) throw err;
  console.log("CODE : ", code);
  console.log("Signal : ", signal);
  console.log("Sueecss");
});

// PythonShell.run("data.py", null, (err, result) => {
//   if (err) throw err;
//   console.log("Sueeceed", result[0]);
// });

// const process = spawn("python", ["data.py", "in the death camp", 4031]);

// process.stdout.on("data", function (data) {
//   console.log(data.toString());
// });

// process.stderr.on("data", function (data) {
//   console.error(data.toString());
// });
