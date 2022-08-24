const myLocation = document.querySelector("#geolocation span");
const API_KEY = "c410463b0844d1a3ef9f2922a0d338e4";

function geoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const geoInfo = document.querySelector("#geolocation span");
      geoInfo.innerText = `${data.name} / ${Math.floor(data.main.temp)}℃, ${
        data.weather[0].main
      }`;
    });
}

function geoError() {
  alert("허용하지 않아 위치 정보를 확인할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
