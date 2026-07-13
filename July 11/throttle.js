// throttle


function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    let now = Date.now();

    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;

    return fn(...args);
  };
}

function greet(name) {
  console.log(`Hello ${name} at ${Date.now()}`);
}

const throttledGreet = throttle(greet, 2000);

// Call every 500ms
setInterval(() => {
  throttledGreet("Rajeev");
}, 500);
