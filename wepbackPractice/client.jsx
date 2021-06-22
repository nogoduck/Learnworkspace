const React = require("react");
const ReactDom = require("react-dom");

const main = require("./main");
//확장명 js, jsx의 차이점은 크게없지만 jsx를 사용하면 개발자들끼리 js파일 내에 jsx의 문법 사용한다는 것을 알릴 수 있고 리엑트파일이라는 것도 유추할 수 있다.

ReactDom.render(<main />, document.querySelector("#root"));
