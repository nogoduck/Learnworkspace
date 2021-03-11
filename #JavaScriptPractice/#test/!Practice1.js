//JavaScript 학습 로드맵 =>
//실행 컨텍스트(this, scope) + Closure =>
//EventLoop => ProtoType
//현재 : Closure

//var, let의 차이
//var => 값을 싸고 있는 가장 가까운 함수의 스코프의 값으로 들어간다
function x() {
  {
    //var로 선언하면 log가 찍히지만 let은 찍히지 않음 / 블록레벨 , 함수레벨
    var t = 1;
    {
      {
        {
          {
            {
              var c = 10;
            }
          }
          console.log(c);
        }
        // var c = 20; 값을 싸고 있지 않고 바깥에 있어서 안됌
      }
    }
  }
  console.log(t);
}
x();

console.log("---------[ Closure 2, let ]------");
var btns = [
  document.querySelector("#btn1"),
  document.querySelector("#btn2"),
  document.querySelector("#btn3"),
];

function setClick() {
  for (var i = 0; i < 3; i++) {
    //let은 for문에서만 있는 특징으로 값이 사라지지 않고 적용된다
    //let으로 아래 코드를 돌리면 블록레벨스코프에 의해 스코프가 하나 더 생기게 된다 let은 for문에서만 특이하게 작동한다 출처 :
    //www.youtube.com/watch?v=RZ3gXcI1MZY&t=308s&ab_channel=%EC%BD%94%EB%93%9C%EC%A2%85
    https: btns[i].onclick = function () {
      console.log(i);
    };
  }
}
//var로 선언했을 시 for문을다 돌고난 setClick의 마지막값이 3이기 때문에 3이 계속 출력된다

setClick();

//위의 코드로 global스코프에는 btns, setClick함수가 들어간다,
//setClick 함수가 실행이되면 setClick함수를 위한 스코프가 생성된다
//setClick 스코프 : var또는 let으로 선언된 i 변수, this도 자동으로 들어간다

//스코프는 기본적으로 자신의 선언된 위치에서 값이 없으면 각각의 핸들러 들이 자신보다 상위의 스코프를 탐색한다

console.log("---------[ JavaScript Timer and Single thread ]------");

function yo() {
  setTimeout(function () {
    console.log("1.5sec Timer");
  }, 1500);

  for (let i = 0; i < 3; i++) {
    doSomething(); //1초씩 소요된다고 가정하는 함수
    console.log(i);
  }
  console.log("the end for loop and 3sec Timer ");
}
yo();
console.log("Main end");

function doSomething() {}

console.log("-------------[ Arrow Func ]-------------");

// 화살표 함수와 일반 함수 의 차이
// 화살표 함수에 없는 것: 함수 이름, this, arguments
//

console.log("-------------[ ProtoType ]-------------");
//객체끼리 상속을 하는 개념으로 본다
const car = {
  wheels: 4,
  drive() {
    console.log("4WD snow tire");
  },
  navigation_version: 0.1,
};

const tesla = {
  color: "yellow",
  navigation_version: 1.5,
  driving: "motor",
};
const audi = {
  color: "green",
  navigation_version: 3.0,
  driving: "engine",
};
const volkswagen = {
  color: "white",
  navigation_version: 1.1,
  driving: "engine",
  name: "boongboong",
};

tesla.__proto__ = car;

//Prototype Chain : 상속받은 객체에 해당하는 값이 없으면 계속 상위로 올라가
// 탐색을 진행한다, 현재 위치의 객체에 값이 있으면 다른 객체에 값이 있더라도 무시한다
volkswagen.__proto__ = tesla;

console.log("---------[ Exception ]-----------");

//정해진 규칙에서 벗어났을 때 동작하는 코드블럭

console.log("---------[ 생성자 ]-----------");

function Person() {
  this.name = name;
  this.gender = gender;
  this.A = A;
}
console.log("---------[ this ]-----------");

const arrowFunc = () => {
  console.log("Arrow: ", this);
};

arrowFunc();
function defaultFunc() {
  console.log("default Function: ", this);
}

defaultFunc();

Object_this = {
  road_bike: "BMC",
  mtb: "Yeti",
  a: function () {
    console.log(this);
  },
};

console.log("[Clousre Solution 1]");

for (let i = 0; i < 10; i++) {
  setInterval(() => {
    console.log(i);
  }, 1000);
}
