// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("connect to server");
// });

let bool = false;
const func = new Promise((resolve, reject) => {
  if (bool) {
    resolve("success");
  } else {
    reject("failed");
  }
});

func
  .then((e) => {
    console.log("then: ", e);
  })
  .catch((e) => {
    console.log("catch: ", e);
  });

async function func2() {
  return "SUCCESS by async";
}

func2().then(console.log);

async function func3() {
  return;
}

//#########################[ Async & await ]#########################
// async function func4(){
//   try{

//   }catch (e) {
// console.log(e)
//   }
// }
