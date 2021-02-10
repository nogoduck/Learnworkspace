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
