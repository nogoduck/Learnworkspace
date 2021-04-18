const { PythonShell } = require("python-shell");
const path = require("path");
const express = require("express");
const { json } = require("express");
const app = express();
// let bookname = "죽음의 수용소에서";
// let bookcode = 30041;

// let result = 30;
// let inputData = "okay";
// console.log(path.join(__dirname, "/sample"));
// var options = {
//   scriptPath: path.join(__dirname, "/sampleJSON"),
//   args: [JSON.stringify({ result }), JSON.stringify({ inputData })],
// };
// PythonShell.run("sampleJSON.py", options, function (err, data) {
//   res.status(200).json({ data: JSON.parse(data), success: true });
// });
const bookname = "미운오리1";
const bookcode = 40003;

const option = {
  mode: "text",
  pythonPath: "",
  pythonOption: ["-u"],
  scriptPath: "",
  args: [bookname, bookcode],
};

PythonShell.run(path.join(__dirname, "/json.py"), option, (err, res) => {
  if (err) throw err;
  // res.status(200).json({ res: JSON.parse(res), success: true });
  // let temp = JSON.parse(res);
  // console.log("JSON Data : ", temp);
  console.log(res);
  // console.log(res[0][0]);
  console.log(res[0]);
  console.log(res[1]);
  console.log(res[2]);
  console.log(res[3]);
  console.log(res[4]);
  console.log(res[5]);
  console.log(res[6]);
});
