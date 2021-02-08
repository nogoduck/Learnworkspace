// 1. Use strict
// added in ES5
// use this for Vanila Javascript.
"use strict";

// 2. Variable (read/write)
// let (added in ES6)
{
  let name = "BMC";
  console.log(name);
}
console.log(name);

//var은 값을 선언하기도 전에 쓸수가 있다
//var hoisting : 선언 위치에 상관없이 사용 가능
//일반적인 프로그래밍언어에서는 볼 수 없는 규칙이며 var은 블럭스코프를 사용할 수 없다
//어느 위치에 있든 사용가능

// 3. Constants 상수 : 값 변경 X (read  only)
//mutable : 값 변경 가능 => let
//immutable 값 변경 불가능 (보안상 좋음) => const

// 4. Variable types (변수 타입)
// primitive(더 이상 나눠지지 않는 작은 단위) > single item : number, string, boolean, null, undefiend, symbol
//object : 위의 타입을 묶어서 관리
// function

const count = 12; //integer
const size = 12.3; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "String" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt = 2122313n  => 끝에 N을 붙여주면 더 큰 변수값을 할당할 수 있다
//원래 변수의 범위는 (-2**53) ~ (2**53) 까지 지원한다

//String : + 를 사용하여 서로 더하기도 가능
// 또는 `` (백틱)을 사용하여 ${}기호로 변수를 사용가능하다

const char = "HELLO";
const charS = "WORLD";

console.log(`char : ${char} \ncharS : ${charS}`);

//boolean
// false : 0, null, undefined, NaN, "" 다 false 값으로 간주

//null과 undefined의 차이
//null은 아무 값도 없다고 null을 할당 하는것이다
//undefined은 선언은 되었지만 값이 없는 상태
// 직접 선언해도 되고 값을 안넣어도 된다
// ex) let a = "" or let a = undefined

//symbol : 학습 부족

//5. Dynamic typing

let text = "hello";

console.log(text.charAt(0));

console.log(`val: ${text}, type: ${typeof text}`);

text = 1;
console.log(`val: ${text}, type: ${typeof text}`);

text = "5" + 2;
console.log(`val: ${text}, type: ${typeof text}`);

text = "10" / "2";
console.log(`val: ${text}, type: ${typeof text}`);

console.log(text.charAt(0));

// const + object
// 선언된 값은 포인터가 잠겨있어 변경 불가능 하지만
// 내부의 값들은 자유롭게 변경가능하다
