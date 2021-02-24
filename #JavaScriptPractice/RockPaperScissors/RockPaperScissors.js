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

document.querySelector("#rock").addEventListener("click", () => {});
