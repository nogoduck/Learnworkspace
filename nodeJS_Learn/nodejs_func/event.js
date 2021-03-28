const EventEmitter = require("events");
// emitter : 발행인
//js에서 콜백함수로 이벤트를 사용하는 것처럼 이벤트를 등록해 둘 수 있다.
const myEvent = new EventEmitter();
myEvent.addListener("event1", () => {
  console.log("Run Event1");
});

myEvent.on("event2", () => {
  console.log("Run Event2");
});
//이벤트2 추가이벤트
myEvent.on("event2", () => {
  console.log("add + [Run Event2]");
});

//한번만 실행되는 이벤트 : once
myEvent.once("event3", () => {
  console.log("once event 3");
});

myEvent.on("event4", () => {
  console.log("once event 4");
});

//엮여있는 모든 콜백을 이벤트와 함께 제거한다
// ex) event2는 두가지 동작이 있는데 둘다 제거된다
myEvent.removeAllListeners("event4");
myEvent.emit("event4");
//만약에 하나만 지우고 싶다면

const listener = () => {
  console.log("EVENT 5");
};

myEvent.on("event5", listener);
myEvent.removeListener("event5", listener); //특정 이벤트의 콜백기능제거
myEvent.emit("event5");

//이벤트 호출
myEvent.emit("event1");
myEvent.emit("event2");
myEvent.emit("event2");
myEvent.emit("event3");
myEvent.emit("event3");
myEvent.emit("event3");
myEvent.emit("event3");

//콜백 함수가 몇개인지 확인
console.log("EVENT2_CALLBACK_CNT: ", myEvent.listenerCount("event2"));
