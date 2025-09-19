let modeBtton = document.createElement('button')
let mainDiv = document.querySelector('.js-mode')
let timeDispay = document.createElement('h1')
modeBtton.textContent = "Mode Change"
document.body.append(modeBtton);
document.body.append(timeDispay)
let intervalId;
let isTimerRunning = true
modeBtton.addEventListener('click',()=>{
 isTimerRunning = !isTimerRunning 
 console.log(isTimerRunning);
 render()
 
}) 
function render(){
  if(isTimerRunning){
 mainDiv.innerHTML = `
  <input type="number" class="js-hr" placeholder="Input in hours">
  <input type="number" class="js-min" placeholder="Input in minutes">
  <input type="number" class="js-sec" placeholder="Input in seconds">
  <button class="start">Start Timer</button>
  <button class="pause">pause</button>`
  let startBtn = document.querySelector('.start')
  .addEventListener('click',runningTimer)
  }else{
    mainDiv.innerHTML = `
   <button>Start</button>
   <button>stop</button> `
  }
} 

function runningTimer(){
  let elapsed = 0;
  let inputHr = document.querySelector('.js-hr').value;
  let inputMin = document.querySelector('.js-min').value;
  let inputSec = document.querySelector('.js-sec').value;
  elapsed = (inputHr * 3600000) + (inputMin * 60000) + (inputSec * 1000) ;
  console.log(elapsed);  
  
  intervalId = setInterval(()=>{
  elapsed -= 10
  let hrs = Math.floor(elapsed / 3600000) || 0;
  let mins = Math.floor((elapsed % 3600000) / 60000) || 0; 
  let secs = Math.floor((elapsed % 60000)/1000) || 0; 
  let ms = elapsed % 1000 || 0; 
timeDispay.innerHTML = `${hrs}:${mins}:${secs}:${ms}`

  },10)
} 
render()