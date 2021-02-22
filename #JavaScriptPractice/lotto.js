//45개의 empty(비어있는) 배열이 들어간다
//empty의 특성으로는 반복문 사용이 불가능하다
//출력을 해줘도 undefined 1개만 출력됌
//fill을 사용해주어야 45개의 배열 출력가능
//확인방법 :
//numlist.forEach(function(a){console.log(a)});

var numlist = Array(45);
numlist = numlist.fill();
// console.log(numlist);

//forEach(function(a, b)) => a요소는 값이고 b는 인덱스를 가져온다
numlist.forEach((val, idx) => {
  numlist[idx] = idx + 1;
});
console.log(numlist);
