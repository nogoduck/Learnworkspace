const path = require("path");

module.exports = {
  name: "webpack-practice",
  mode: "development", // development:개발용, production:실서비스용
  devtool: "eval", //빠르게?

  resolve: {
    //확장명이 배열과 같이 있는 파일을 웹팩이 알아서 찾아준다, entry에서도 확장명은 빼고 작성해준다
    extensions: [".js", ".jsx"],
  },

  //입력
  entry: {
    app: ["./client"], // <=배열의 파일들을 합처서 하나의 js파일로 만들어준다. 웹팩은 입력된 파일내에서 불러오는 다른파일들을 알아서 인식해 처리해준다.
  },

  //entry  => module 적용 => output
  module: {
    rules: [
      {
        test: /\.jsx?/, //js와 jsx파일에
        loader: "babel-loader", //babel이라는 룰을 적용하겠다
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  //출력 (결과물)
  output: {
    path: path.join(__dirname, "dist"), //dirname : 현재폴더
    filename: "app.js",
  },
};
