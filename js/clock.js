const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  // "1" -> "01"로 만들 때
  // "1".padStart(문자열크기, ""(채우고싶은 문자))
  // "1".padStart(2, "0")
  //String() : 숫자를 string으로 변환
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//setInterval(호출하려는 함수, 매 호출 사이에 얼마나 기다릴지 시간)
//ex 5초마다 sayHello()함수가 호출됨
// setInterval(sayHello, 5000);

//setTimeout()은 1초 기다렸다가 한번만 실행
// setTimeout(sayHello, 1000);

getClock(); //website가 load 되자마자 getClock()을 실행하고 또 매초마다 다시 실행되도록
setInterval(getClock, 1000);
