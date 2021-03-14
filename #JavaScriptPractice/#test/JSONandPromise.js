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

// 2. JSON to Object
// parse(json)
