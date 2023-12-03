const API_KEY = config.apikey;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //현재 위치 날씨를 url로 받아오기
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //js가 해당 url을 직접 실행시켜줌
  //fetch = promise 바로 실행되는게 아님 서버의 응답을 받아야함 (than)
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("can't fine you. no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
