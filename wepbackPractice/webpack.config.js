const path = require("path");

module.exports = {
  name: "webpack-practice",
  mode: "development", // development:개발용, production:실서비스용
  devtool: "eval", //빠르게?

  //입력
  entry: {
    app: ["./client.jsx,", "./main.jsx"], // <=배열의 파일들을 합처서 하나의 js파일로 만들어준다. 웹펙은 입력된 파일내에서 불러오는 다른파일들을 알아서 인식해 처리해준다.
  },
  //출력 (결과물)
  output: {
    path: path.join(__dirname, "dist"), //dirname : 현재폴더
    filename: "apppractice.js",
  },
};
