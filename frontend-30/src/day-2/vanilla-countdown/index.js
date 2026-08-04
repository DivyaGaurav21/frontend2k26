import "./styles.css";

const btn = document.getElementById("btn");
const ui = document.getElementById("ui");
const pauseBtn = document.getElementById("pause");
const restartBtn = document.getElementById("restart");
let timer = 10;
let interval = null;
function updateUi(time) {
  ui.innerText = String(time).padStart(2, "0");
}

function btnClickHandler() {
  if (interval) return;
  interval = setInterval(() => {
    console.log("timer......");
    timer--;
    updateUi(timer);
    if (timer === -1) {
      clearInterval(interval);
      interval = null;
      alert("time up!");
    }
  }, 1000);
}

function pauseHandler() {
  clearInterval(interval);
  interval = null;
}

function restartHandler() {
  clearInterval(interval);
  interval = null;
  timer = 10;
  updateUi(timer);
}

btn.addEventListener("click", btnClickHandler);
pauseBtn.addEventListener("click", pauseHandler);
restartBtn.addEventListener("click", restartHandler);
