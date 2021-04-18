const { PythonShell } = require("python-shell");
const path = require("path");
const express = require("express");
const app = express();
// let bookname = "죽음의 수용소에서";
// let bookcode = 30041;
let result = 30;
let inputData = "okay";
console.log(path.join(__dirname, "/sample"));
var options = {
  scriptPath: path.join(__dirname, "/sampleJSON"),
  args: [JSON.stringify({ result }), JSON.stringify({ inputData })],
};
PythonShell.run("get_avg.py", options, function (err, data) {
  res.status(200).json({ data: JSON.parse(data), success: true });
});

// const option = {
//   mode: "text",
//   pythonPath: "",
//   pythonOption: ["-u"],
//   scriptPath: "",
//   args: [bookname, bookcode],
// };

// PythonShell.run("sampleJSON.py", option, (err, res) => {
//   if (err) throw err;
//   console.log(res[0]);
//   console.log(res[1]);
// });
