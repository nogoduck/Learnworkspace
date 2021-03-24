const condition = false;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("SUCCESS");
  } else {
    reject("FAILED");
  }
});

promise.then(console.log).catch(console.log);

// promise.then(console.log).catch(console.log);

// 비동기 코드를 사용할떄는 항상 실패할 가능성을 두고 코드를 작성해야한다
// try -> catch

// axios.get이 promise를 지원하는지 callback을 지원하는지 알 수 가 없다
// 공식문서를 확인해야 한다 현재로선 promise를 지원함

// encodeURIComponent, decodeURIComponent 를 사용해야 주소창에 한글을 입력해도 서버가 처리할 수 있다 ( URL 이라고 안하고 URI를 요즘에는 많이쓴다 )
// 주소창에 입력된 값은 encode로 감싸고 서버에 들어온 값은 decode로 받아주면 된다
// URL : 서버에 있는 파일의 위치를 가르킨다
// URI : 서버에 있는 자원의 위치를 가르킨다
// 파일위주에서 자원 위주로 넘어갔기 떄문에 URI를 사용한다
