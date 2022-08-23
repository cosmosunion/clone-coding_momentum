const clock = document.querySelector("span#clock");

function getClock() {
  const date = new Date(); /*date에 Date()함수 반환값을 담는다 */
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
