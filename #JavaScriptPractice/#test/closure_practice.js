//JavaScript에서의 this:
//this의 기본상태 : 현재 실행문맥을(호출자) 말한다
// this는 함수를 호출하는 방법에 의해 결정된다
// 자바스크립트에서는 선언하면서 결정되는것과 호출할 때 결정되는 것이 있다 => 선언하면서 결정되는 것은 클로저다

// 호출값에 상관없이 this를 고정하는 것은 .bind이다
console.log("Default this: ", this);

//함수 안에서의 this
function isThis() {
  console.log("Func this: ", this);
}
isThis();

//this는 기본적으로 window이고 아래는 아닌경우이다

var OBJ = {
  a: function () {
    console.log("Object this: ", this);
  },
};
OBJ.a();
// 메서드 : 객체안에 있는 함수를 뜻하는걸로 추측
// 위와 같은 경우 객체안의 메서드를

function test1(a) {
  console.log("a.this:", a.this);
}

test1(5); //결과 :undefined

console.log("##################");

let someone = {
  name: "hardhand",
  whoAmI: function () {
    console.log(this);
  },
};

someone.whoAmI(); //객체가 그대로 출력됌

let myWhoAmI = someone.whoAmI;

myWhoAmI(); //window가 출력됌 myWhoAmI는 global에 있는 global은 window 객체이기 떄문이다, 브라우저는 window

const button1 = document.querySelector("#btn1"); // 호출한놈이 나온다
button1.addEventListener("click", myWhoAmI); //결과 : <button>
// button.addEventListener("click", myWhoAmI); //결과 : <button> 위와 동일

//bind

const button2 = document.querySelector("#btn2"); // 호출한놈이 나온다
let bindWhoAmI = myWhoAmI.bind(someone);
button2.addEventListener("click", myWhoAmI.bind(someone)); //bind에 값이 묶여 객체로 값이 고정되어 나온다
console.log(bindWhoAmI);

console.log("------------[ Scope ]-----------");
//outer는 inner와 연결되어있고 inner는 global과 연결되어 변수를 가져올 수 있다 => 스코프 체인
var d = "Global Scope";
function outer() {
  var a = 1;
  var b = "Box";
  //   console.log(a); //a에 무슨 값이 있는지 찾는 것을 스코프라고 한다
  //기본적으로 자기 블록에 값이 존재하지 않으면 블록 밖으로 나가서 탐색을 한다,
  //! var를 사용하는경우 함수레벨 스코프가 되어 위와 같이 동작하지 않는다
  function inner() {
    var a = 2;
    console.log(b);
    console.log(d);
  }
  return inner();
}
outer();

console.log("------------[ Closure ]-----------");
//동작안함
var someFun = outer();
someFun();
