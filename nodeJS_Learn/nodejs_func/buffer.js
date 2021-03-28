// buffer : 일정한 크기가 되면 한번에 처리하는 데이터
// stream : 일정한 크기로 나눠서 여러번에 걸쳐서 처리
// buffer or chunk 의 크기르 쪼개서 주기적으로 전달하는 역할도함
// streaming : 일정한 크기의 데이터를 지속저으로 전달
// 버퍼가 파일 사이즈랑 똑같으면 그걸 통쨰로 보냄 그걸 나눠서 보내는 것을 스트리밍이라고 한다

const buffer = Buffer.from("이것은 버퍼입니다람쥐");
console.log(buffer);
console.log(buffer.length);
console.log(buffer.toString());

const array = [Buffer.from("가나초콜렛"), Buffer.from("BMC")];
console.log(Buffer.concat(array).toString());

// 빈 버퍼 생성
console.log(Buffer.alloc(10));

//구현하려는 기능 :
// 버퍼를 사용하여 txt파일을 잘개 쪼개서 전송된 파일을 다시 합쳐준다
const fs = require("fs");

//createReadStream은 한번에 읽는 데이터의 양은 64kb이다, 하지만 우리의 텍스트파일
// 데이터는 503바이트로 너무 적기 때문에 한번에 읽어버린 것이다
// highWaterMark로 값을 별도로 지정을 해줘야한다 default value = 64000 (64kb) / 16byte = 16
const readStream = fs.createReadStream("./buffer.txt", { highWaterMark: 16 });
//스트림은 버퍼방식에 비해 메모리를 아낄 수가 있다
// 버퍼를 사용할때는 200byte 모두 메모리에 올려두고 보내는데 스트림은 그걸 짤개 쪼개서 보내기 때문이다

// console.log(readStream);

const data = [];
//readStream : data, end
//조각조각이 chunk로 올때마다 데이터를 배열에 모아준다
readStream.on("data", (chunk) => {
  data.push(chunk);
  console.log("data: ", chunk, chunk.length);
});

//전송이 다됬을때도 알려준다
// 흩뿌려진 buffer를 concat를 사용하여 모아준다
readStream.on("end", () => {
  console.log("end: ", Buffer.concat(data).toString());
});

// 스트림은 동시에 오지않고 순차적으로 보내진다
// + 비동기이기 떄문에 에러처리를 해줘야한다
readStream.on("error", (err) => {
  console.log(err);
});
