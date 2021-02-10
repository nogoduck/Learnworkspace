//01. 배열 스트링으로 만들기
const a = ["BMC", "Yeti", "Cannondale", "Kona"];
const rst = a.join(" - ");
console.log(rst);

//02. 스트링 배열로 만들기 split("구분기호", 반환값 갯수(필수아님))
const b = "Cello, Fox, MIPS";
const rst1 = b.split(",");
console.log(rst1);
