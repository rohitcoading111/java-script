let seconds = 0;
let timer = null;

function start() {
  if (timer !== null) return; // Already running

  timer = setInterval(() => {
    seconds++;

    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    console.log(`${hrs}:${mins}:${secs}`);
  }, 1000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  stop();
  seconds = 0;
  console.log("00:00:00");
}

start();      
stop();      
reset();      