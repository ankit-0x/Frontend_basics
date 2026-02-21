const display = document.getElementById("display");

let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let timerId = null;

function stopwatch() {
  miliseconds++;
  if (miliseconds === 100) {
    seconds++;
    miliseconds = 0;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
  }

  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = miliseconds < 10 ? "0" + miliseconds : miliseconds;
  display.innerText = m + ":" + s + ":" + ms;
}

function start() {
  if (timerId !== null) {
    clearInterval(timerId);
  }

  timerId = setInterval(stopwatch, 10);
}

function stop() {
  clearInterval(timerId);
}

function reset() {
  clearInterval(timerId);
  minutes = 0;
  seconds = 0;
  miliseconds =0;
  timerId = null;
  display.innerText = "00:00:00";
}

const button = document.querySelector('.buttons');

button.addEventListener('click',(event)=>{
    const elementClass = event.target.className;
    if(elementClass === "start"){
        start();
        console.log(Date.now());
    }
    else if(elementClass=== "pause"){
        stop();
    }
    else if(elementClass === "reset"){
        reset();
    }
});
