let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let hour = 0,
  minute = 0,
  second = 0;
let interval;

function updateUi() {
  seconds.innerText = String(second).padStart(2, "0");
  minutes.innerText = String(minute).padStart(2, "0");
  hours.innerText = String(hour).padStart(2, "0");
}

function startTimer() {
  if (interval) return;
  interval = setInterval(() => {
    second++;
    if (second === 60) {
      minute++;
      second = 0;
    }
    if (minute === 60) {
      hour++;
      minute = 0;
    }
    updateUi();
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function restartTimer() {
  clearInterval(interval);
  interval = null;
  second = 0;
  minute = 0;
  hour = 0;
  updateUi();
}
