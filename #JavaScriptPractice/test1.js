let inp = prompt("시작할 단어를 입력해주세요");
while (inp != 0) {
  let ans = inp[inp.length - 1];

  inp = prompt("이어갈 단어를 입력해 주세요\n'0'을 입력하면 종료됩니다.");

  if (inp[0] === ans) {
    continue;
  } else {
    alert("땡");
    break;
  }
}
