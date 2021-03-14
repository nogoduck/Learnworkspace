// JSON : JavaScript Objec Notation

// 1. Object to JSON
// stringity(obj) : JSON 형태로 변환함

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["BMC", "Trek"]);
console.log(json);

//확인을 해보면 함수는 포함이 되지 않는다
//함수는 JSON object에 있는 데이터가 아니기 때문이고 JSON에는 JS의 객체처럼 함수가 들어가지 않는다
// 또한 JS에만 있는 Symbol의 데이터 타입도 들어가지 않는다
const Yeti_SB6_info = {
  owner: "LeeYJ",
  material: "Carbon",
  color: "Gray",
  wheel_size: 29,
  production_date: new Date(),
  real_derailleur: null,
  // symbol: Symbol("ID"),

  license: () => {
    console.log(`{owner} of the MTB`);
  },
};

json = JSON.stringify(Yeti_SB6_info);
console.log(json);

//특정값만 JSON 형태로 변환
//    stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string; => 확인을해보면 함수형태로 전달해도되고 배열형태로 전달을 해도 된다
json = JSON.stringify(Yeti_SB6_info, ["owner"]);
console.log(json);

//key 와 value로 나눌 수도 있다
//확인을 해보면 제일 처음 값으로는 key와 value를 싸고있는 제일 최상위의 값이 전달된다, 빈값이 들어감
json = JSON.stringify(Yeti_SB6_info, (key, value) => {
  console.log(`Key : ${key}, Value : ${value}`);
  //삼항연산자를 사용하여 값 변경가능
  return key === "owner" ? null : value;
});
console.log(json);

// ##########_##########_##########_##########_##########
// 2. JSON to Object
// parse(json) : JSON => 객체(Object) 변환
//json 다시 초기화
json = JSON.stringify(Yeti_SB6_info);

const obj = JSON.parse(json);
//객체를 JSON으로 변환할 때 있었던 함수는 포함되지 않은 상태로 변환이 되었고
// 그 JSON 데이터를 다시 객체로 변환하였기 떄문에 함수는 존재하지 않는다
console.log(obj);

//추가학습 [JSON파일 읽어오기] 이렇게 쓰는게 아니고
// 외부 자료를 살펴보니 함수를 따로 작성해서 그걸로 불러오는것으로 보인다 또는 JQuery를 사용했다
//잘못된 코드예시
// const Yeti_SB6_SpecSheet_JSON = require("./index.json");
// const Yeti_SB6_SpecSheet_Object = json.parse(Yeti_SB6_SpecSheet_JSON);
// console.log("JSON Data : ", Yeti_SB6_SpecSheet_JSON);
// console.log("Object Data : ", Yeti_SB6_SpecSheet_Object);
