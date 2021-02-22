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
console.log(numlist);
