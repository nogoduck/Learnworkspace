//new Constructor(생성자)
//학습 출처 :https://victorydntmd.tistory.com/51

//JS객체와 json은 다르다
//선어방식에서부터 json은 property에 큰 따옴표가 필요하다 그리고 함수를 선언 할 수가 없다

// C++, Java : Class 기반의 객체지향 언어
// JavaScript : Prototype 기반의 객체지향 언어 => Class를
// Prototype

function Person(firstName, LastName, ages, sex) {
  //   console.log(firstName, LastName, ages);
  this.firstName = firstName;
  this.LastName = LastName;
  this.ages = ages;
  this.sex = sex;
  //   console.log(firstName, LastName, ages);
  //   console.log(this);
}

Person("YJ", "Lee", 25, "dsds");

//instance
//생성자 함수에 의해서 객체가 만들어진다
// //[+] 생성자 함수에 있는 매개변수를 다 채우지 않아도 순서대로 잘 들어가는 것을 알 수 있다, 또한 숫자와 문자를 따로 구분하지 않는걸로 보인다
const dog = new Person("nu", "ri", 4, "male");
const cat = new Person("nu", 4, "male");
const turtle = new Person("slowly", "very", 104);
