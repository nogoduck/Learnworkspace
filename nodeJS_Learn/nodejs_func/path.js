//경로를 표시할 때 자주 쓰이는 내장 모듈이다
//path가 중요한 이유 :
//windows에서는 C:\로 경로를 많이 표시하고 가끔은 \\ 로 표기하기도 한다 하지만
// c:\\window\\
//mac이나 linux에서는 "c:/user/fox" 으로 표시를 한다
//그래서 path를 사용하면 이런 경로가 알아서 저런 번거로운 부분을 처리해준다
//path가 없으면 개발자가 직접 분기처리를 해주어야한다.

// 결론 : Windows "\", POSIX : "/"

const { isAbsolute } = require("node:path");
const path = require("path");

// __dirname : 현재의 디렉토리 경로를 var.js로 합쳐준다
// ex) nodeJS_learn\nodejs_func\var.js
//맥이여도 동일하게 작동
// 맥 + 리눅스를 합치면 POSIX라고 불린다
path.join(__dirname, "var.js");

//아래와 같이 부모폴더로 올라갈 수도 있다
path.join(__dirname, "..", "var.js");

//다른 언어에서도 path같은 기능은 지원한다 프로그래머들을 오랜기간 골머리를 썩히게 만들어서 그렇다

//path.resolve : join이랑 비슷하고 ./은 현재폴더 /는 절대경로 => 가장 상위폴더의 var.js를 뜻한다
path.resolve(__dirname, "..", "/var.js");
//경로 확인로그
console.log("###########[ __dirname ]############");
console.log(path.join(__dirname, "..", "/var.js"));
console.log(path.resolve(__dirname, "..", "./var.js"));
console.log("####################################");
//실행을 해보면 join은 절대경로로 입력이 되어있어도 무시한다
// 하지만 resolve는 앞의 현재경로를 무시하고 절대경로로 삽입하면 절대경로로 이동한다

console.log(path.sep);

//delimiter같은 경우 윈도우는 ; 이지만 POSIX는 , 이다
console.log(path.delimiter);

//nomalize를 쓰면 중구난방의 / \ /\/ 를 제대로 표기해준다
console.log("path.nomalize: ", path.normalize("c:\\users///dsds\\as/"));

// isAbsolute를 사용하면 절대경로인지 상대경로인지 구분가능
