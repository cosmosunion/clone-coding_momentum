const clock = document.querySelector("#clock span");

function getClock() {
  const date = new Date(); /*date에 Date()함수 반환값을 담는다 */
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `현재 시간 : ${hours}시${minutes}분${seconds}초`;
}

getClock();
setInterval(getClock, 1000);
