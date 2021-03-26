console.log("for and setTimeout => Closure Solution");
//해당 코드에서 i를 var로 선언하면 5만 출력되고 let으로 선언하면 1부터 순차적으로 출력되긴하나 1초에 한번씩 출력되지 않음 =>
//setTimeout에 ms를 입력 시 기존의 초에서 증감되는게 아니기 때문에
// i만큼 곱해줘서 초를 지정해주어야한다
//ex) setTimeout(()=> {}, 1000 * i)
//화살표함수를 사용하나 기본함수를 사용하나 결과는 동일함

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * i);
  console.log("End loop");
}

//var를 사용한 상태에서의 클로저 해결

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
    console.log("End loop");
  })(i);
}
