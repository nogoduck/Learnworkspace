const 네로 = {
  이름: "네로",
  키: 150,
  몸무게: 504,
  나이: 404,
};

let 값 = "이름";
// 대괄호 안에는 변수를 쓸수 있다 하지만 . 뒤에는 불가능
//값을 지울떄는 null이 구분하기 편하다
// 컴퓨터는 값이 없을 떄 기본으로 undifined 를 주기 떄문이다
console.log(네로[값]);
console.log(네로["값"]);
console.log(네로.값);

네로.키 = null;
console.log(네로);

a = function (b, f) {
  return b + f;
};

aa = (bb, ff) => {
  return bb + ff;
};
