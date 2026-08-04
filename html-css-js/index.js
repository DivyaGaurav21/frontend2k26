const timerContaier = document.getElementById("timer");

let time = 10;
let timer;

function updateUi() {
  timerContaier.innerText = String(time).padStart(2, "0");
  if (time === 0) {
    timerContaier.innerText = "times up!";
    time = 10;
  }
}

function startCountDown() {
  if (timer) return;
  timer = setInterval(() => {
    time--;
    if (time === 0) {
      clearInterval(timer);
      timer = null;
    }
    updateUi();
  }, 100);
}
