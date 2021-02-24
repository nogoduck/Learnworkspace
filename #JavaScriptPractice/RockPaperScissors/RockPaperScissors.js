// url 값 뒤에 이동할 픽셀을 지정할 때 0이 아닌 값을 지정할 때는 px을 붙여줘야 동작한다

let left = 0;

setInterval(() => {
  if (left === 0) {
    left = -134;
  } else if (left === -134) {
    left = -283;
  } else {
    left = 0;
  }

  document.querySelector("#computer").style.background =
    "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " + left + "px 0";
}, 100);

//   querySelector는 찾는 클래스가 여러개가 있어도
// 처음에 선택한 하나만 선택한다
// 이를 해결하려면 querySelectorAll을 사용하면 된다

document.querySelectorAll(".btn").forEach((btn) => {
  console.log(btn);
  //function을 화살표 함수로 사용하면 작동하지 않았다 (undefined)
  // 화살표 함수의 작동원리를 다시 학습할 필요성이 느껴진다
  btn.addEventListener("click", function () {
    console.log(this.textContent);
  });
});
