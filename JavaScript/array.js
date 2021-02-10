//배열 선언방법
const a = new Array();
const b = [];

a.push("😈");
a.push("😇");
console.log(a);

console.clear();

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

//for of
for (let val of a) {
  console.log(val);
}

//forEach

a.forEach((a, index, array) => console.log(a, index, array));

console.clear();

// 우측에서 부터 데이터가 추가되고 빠짐
a.push("🤢", "🥶");
console.log(a);
a.pop();
console.log(a);

// 앞에서 부터 넣고 빼는 방법
//pop과 push보다 느리다 기존에 데이터를 움직여줘야 하기 때문에
a.unshift("👀", "🥎");
console.log(a);
a.shift();
console.log(a);

//특정위치에서 제거
//splice(지울 인덱스, 갯수, 넣고싶은 값) !입력 안하면 해당 인덱스부터 끝까지 제거됌
// a.splice(2);
console.log(a);

//배열 합치기 concat
const a2 = ["🤢", "🥶"];
const newA = a.concat(a2);
console.log(newA);

console.clear();

//배열 검색 undexOf, includes:값을 bool로 반환
console.log(a);
console.log(a.indexOf("🥎"));
console.log(a.includes("🥎"));
console.log(a.includes("🦺"));
console.clear();

a.push("🥎");
//똑같은 값이 여러개 있을때 마지막 값을 출력
//lastIndexOf
console.log(a.lastIndexOf("🥎"));
