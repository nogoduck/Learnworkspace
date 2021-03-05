//this 이해하기
// 기본적으로 window이다
console.log(this);

function a() {
  console.log(this);
}
a();

//window가 아닌경우

//bind, call, apply
