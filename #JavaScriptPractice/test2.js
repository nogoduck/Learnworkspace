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
// console.log(네로[값]);
// console.log(네로["값"]);
// console.log(네로.값);

네로.키 = null;
// console.log(네로);

a = function (b, f) {
  return b + f;
};

aa = (bb, ff) => {
  return bb + ff;
};
// 진짜배열
const Arr = ["BMC", "Cello", "Yeti", "Pinarello"];

//배열 같은 객체
const noArr = {
  0: "BMC",
  1: "Cello",
  2: "Yeti",
  3: "Pinarello",
};

// console.log(Arr);
// console.log(noArr);
// ##################################################################
// 구구단
while (true) {
  firstNum = Math.ceil(Math.random() * 9);
  secondNum = Math.ceil(Math.random() * 9);
  let res = firstNum * secondNum;
  ans = prompt(firstNum + "X" + secondNum + "= ??");

  if (Number(ans) === res) {
    alert("딩동댕");
  } else {
    alert("오답XX");
    break;
  }
}
//무한루프 걸렷을때 SHIFT + ESC (브라우저 관리자)
//프롬프트창에서 취소를 누르면 null 값이 들어감 이를 Number로 변환하면 0 값이 들어감
