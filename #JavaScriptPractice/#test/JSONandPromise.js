// JSON : JavaScript Objec Notation

// 1. Object to JSON
// stringity(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["BMC", "Trek"]);
console.log(json);

const Yeti_SB6 = {
  material: "Carbon",
  color: "Gray",
  wheel_size: 29,
};
// 2. JSON to Object
// parse(json)
