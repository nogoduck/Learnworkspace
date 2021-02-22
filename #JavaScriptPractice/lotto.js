//45개의 empty(비어있는) 배열이 들어간다
//empty의 특성으로는 반복문 사용이 불가능하다
//출력을 해줘도 undefined 1개만 출력됌
//fill을 사용해주어야 45개의 배열 출력가능
//확인방법 :
//numlist.forEach(function(a){console.log(a)});

//(1) 생략가능
// var numlist = Array(45);
// numlist = numlist.fill();

// console.log(numlist);

//forEach(function(a, b)) => a요소는 값이고 b는 인덱스를 가져온다
// numlist.forEach((val, idx) => {
//   numlist[idx] = idx + 1;
// });
// console.log(numlist);

//mapping(맵) :
//[undefined, undefined, undefined]
//[1, 2, 3] => 기존의 정보들을 1 : 1 로 매치하여 값을 변경
//새로운 배열을 가져오기 떄문에 변수도 새로 만들어줘야 한다
let numlist = Array(45)
  .fill()
  .map((val, i) => {
    return i + 1;
  });
// console.log(numlist);

//기준값이 바뀔땐 for보단 while 선호
//Math.random은 랜덤객체이긴한데 온전한 랜덤은 아니고 수학적으로 계산된 랜덤이다 + 컴퓨터는 태초부터 규칙성을 가지고 있어 완전한 랜덤을 구현하는것은 불가능하다

let shuffle = [];
while (numlist.length > 0) {
  let rdval = numlist.splice(Math.floor(Math.random() * numlist.length), 1)[0];
  shuffle.push(rdval);
}
// console.log(numlist, shuffle);
// 배열을 자르는 함수
//slice(a, b) => a는 시작하는 인덱스 b는 시작위치로부터 가져올 배열의 갯수
//splice 와 slice 작동기능은 동일한것 같은데 차이점은 공부할 필요가 있다
// ##############################################
//sort를 사용해서 정렬을 하면 작은숫자 순으로 배열이 되는것이 아니라 각 숫자의 제일 앞의 자릿수가 작은 것부터 정렬이 되는것으로 보인다
//이를 해결하기 위해서 함수를 추가로 작성해 주어야한다
//sort(function(a, b){return a - b}) 와 아래 화살표 함수는 동일하다 ES6부터 바뀐 더 편리하게 바뀐 문법
// ##############################################
//sort(function(a, b)) : function에 대한 추가설명
//매게변수 a, b는 각각 이전숫자, 현재숫자를 가져온다
//이전숫자에서 현재숫자를 뺀 값이 0보다 크면 숫자를 서로 바꿔준다, 0보다 작으면 바꿔주지 않는다
//ex [11, 41, 32, 27, 21, 18] =>
//(2) [11, 32, 41, 27, 21, 18] =>
//(3) [11, 32, 27, 41, 21, 18]
// (1) 11 - 41 = -30 > 0 (False)
// (2) 41 - 32 =   9 > 0 (True)
// (3) 41 - 27 =  14 > 0 (True)
// 대충 이런식으로 작동하는 원리로 보인다
//내림차순은 매게변수를 반대로 빼주면 된다
// sort(function(a, b){return b - a})

//위와 같은 함수나 객체들은 직접 만들 상황이아니면 원리를 이해할 필요는 없고 필요할 때마다 그때그떄 찾아서 쓰면 저절로 외워진다

console.log(shuffle.slice(0, 6));
let winnum = shuffle.slice(0, 6).sort((a, b) => a - b);
let bonusnum = shuffle[shuffle.length - 1];
console.log("당첨번호: ", winnum, "보너스번호: ", bonusnum);
