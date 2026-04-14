function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    let now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

function handleScroll() {
  console.log("Scroll event fired at", new Date().toLocaleTimeString());
}

const throttledScroll = throttle(handleScroll, 500);

window.addEventListener("scroll", throttledScroll);
