let second = 0;
let minute = 0;
let hour = 0;
let interval;

function updateUi() {
  document.getElementById("seconds").innerText = String(second).padStart(
    2,
    "0",
  );
  document.getElementById("minutes").innerText = String(minute).padStart(
    2,
    "0",
  );
  document.getElementById("hours").innerText = String(hour).padStart(2, "0");
}

function start() {
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
  }, 100);
}

function pause() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  clearInterval(interval);
  interval = null;
  second = 0;
  minute = 0;
  hour = 0;
  updateUi();
}
