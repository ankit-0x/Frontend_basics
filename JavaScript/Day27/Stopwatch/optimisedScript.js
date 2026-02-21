const display = document.getElementById('display');

let startTime = 0;
let elapsedTime = 0;
let timerId = null;

function updateDisplay(){
    let time = Date.now()-startTime+elapsedTime;

    let milliseconds = Math.floor((time%1000)/10);
    let seconds = Math.floor(time/1000)%60;
    let minutes = Math.floor(time/60000);

   let min =  `${String(minutes).padStart(2,"0")}`;
   let sec =  `${String(seconds).padStart(2,"0")}`;
   let ms =  `${String(milliseconds).padStart(2,"0")}`;

   display.innerText = min+":"+sec+":"+ms;

}

function start(){
    if(timerId) return;
    startTime = Date.now();

    timerId = setInterval(updateDisplay,10);
}

function stop(){
    clearInterval(timerId);
    timerId = null;
    elapsedTime += Date.now() - startTime;
}

function reset(){
    clearInterval(timerId);
    timerId = null;
    startTime = 0;
    elapsedTime = 0;
    display.innerText = "00:00:00";
}

document.querySelector('.buttons').addEventListener('click',(e)=>{
    if(e.target.classList.contains('start')) start();
    if(e.target.classList.contains('pause')) stop();
    if(e.target.classList.contains('reset')) reset();
})