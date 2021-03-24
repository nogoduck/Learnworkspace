const odd = "이것은 홀수를 뜻합니다.";
const even = "이것은 짝수를 뜻합니다.";

// module.exports = odd;
// module.exports = [odd, even];// 배열로도 넘겨줄 수 있다
//하지만 보통은 객체로 값을 넘겨준다

module.exports = {
  odd,
  even,
};

// module은 생략이 가능하지만 값을 넘기는 문법이 조금 바뀐다
exports.odd = odd;
exports.even = even;

// module.exports 는 exports와 똑같고 이는 객체이다 그래서 처음값으로 빈 객체가 들어간다 {}
// module.exports === exports === {}

// // module 원칙 (불러오는 것은 똑같음)
// 1. 한가지만 export할떄는
// module.exports를 사용해주면 되고

// 2. 두가지 이상이면 위와 같이 선택해서 사용하면 된다 (같이 사용할 수 없다)
// exports를 쓰면 그다음엔 module.exports를 사용할 수 없다
// 만약에 강제로 쓰게 되면 module.exports랑 위의 export와의 참초 관계가 끊겨서 module.exports만 동작한다 / exports는 무시됌
