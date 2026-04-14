let timerElemnt = document.getElementById("timer");
let button = document.getElementById("start");

function updateUi(count) {
  timerElemnt.innerHTML = count;
}

let timer;
function startTimer() {
  if (timer) return;
  let count = 10;
  updateUi(count);
  timer = setInterval(() => {
    if (count === 0) {
      clearInterval(timer);
      timer = null;
      alert("times up!!");
      return;
    }
    count = count - 1;
    updateUi(count);
  }, 100);
}

button.addEventListener("click", startTimer);
