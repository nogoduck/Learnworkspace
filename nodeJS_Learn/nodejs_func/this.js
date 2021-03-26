//JavaScript랑 다르게 node는 전역 스코프에서는 빈 객체가 나온다 (JS는 window가 나옴)
//하지만 함수 안에서는 global을 받는다 (JS와 동일)
//이를 이용하면 module.exports 도 빈 객체이기 떄문에 활용할 서로 활용할 수 있다

console.log(this === module.exports);
// const odd = "홀";
// this.odd = odd;
// 전역에서의 this === module.export === export
// 로 쓸 수도있지만 햇갈리기 떄문에 거의 쓰이지 않는다

// 이 외에는 js와 모두 동일한 this의 값을 가진다
// ex) function마다 this가 새로 생기는 것, 화살표 함수를 쓰면 부모의 this를 물려받는것

console.log(this);

(function a() {
  console.log(this === global);
})();
