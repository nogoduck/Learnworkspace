// URL 모듈에는 구성요소가 node와 whatwg단체에서 부르는이름이 각각 다르다
//두가지 방식다 자주 쓰이고 조금 더 최신이고 세련된 방식은 whatwg방식이고
// 기존방식(node)가 쓰이는 이유는 가끔식 주소가 whatwg에서는 해식이 안되는 방식으로 들어오기도 한다
// ex)
// http://www.naver.com/login 이라는 주소가있으면

// "/login" 앞부분은 생략하고 이렇게만 주소가 들어오면
// whatwg방식에서는 이것을 해석하지 못해서 기존의 node모듈로 사용해 값을 해석해야 한다

// queryString : 주소에 데이터가 들어간것
// 하지만 주소의 값들은 문자열로 들어가기 JS에서는 다루기가 힘들다 그래서 문자열을 객체로 바꿔주기 위해선 "searchParams" 를 사용한다
const { URL } = require("url");

const myURL = new URL(
  "https://www.vitalmtb.com/community/SplatWorldwide,46636/setup,36657/?test1=404&textString=yetisb6"
);

console.log("myURL: ", myURL);
console.log("searchParams.getAll: ", myURL.searchParams.getAll("textString"));
