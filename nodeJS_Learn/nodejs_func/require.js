//===================[ 모듈 심화 ]===================

console.log(require);

require("./app2");
// 기본적으로 cache에 값을 저장해두고 이것을 다시 불러 올때에는 실제 파일에서 가져오지 않고
// 메모리에 올려둔 정보를 가져온다
// 하드에서 읽는 속도보다 메모리가 훨씬 빠르기 떄문이다

//캐시를 초기화하면 다시 하드에서 파일을 읽어 가져오는 방법도 있다 하지만 내장객체를 사용하는 것은 위험부담이 있다
//ex ) 파일을 수정하면 항상 껏다가 켜야 변경사항이 적용이 된다 하지만 캐쉬를 조정하면 실시간으로 적용을 할 수 있다
console.log("APP2.JS run");
console.log(require);

//module.exports와  require는 순서에 상관이 없다 아무위치에나 작성해도 잘 돌아간다
// 하지만 import와 export는 import가 가장 위에 있어야 한다