let modeBtton = document.createElement('button')
let mainDiv = document.querySelector('.js-mode')
let timeDispay = document.createElement('h1')
let flagDiv = document.createElement('div')
modeBtton.textContent = "Mode Change"
document.body.append(modeBtton);
document.body.append(timeDispay)
document.body.append(flagDiv)
formatTime(0);
let intervalId;
let intervalId2;
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
  <button class="pause">pause</button>
  <button class="reset">Reset</button>`
  let startBtn = document.querySelector('.start')
  .addEventListener('click',runningTimer);
  let pauseBtn = document.querySelector('.pause')
  .addEventListener('click',pauseTimer);
  let resetBtn = document.querySelector('.reset')
  .addEventListener('click',reset)
  }else{
    mainDiv.innerHTML = `
   <button class= "start2">Start</button>
   <button class = "stop2">stop</button>
   <button class = "lap">laps</button> `
    let startbtn2 = document.querySelector('.start2')
   .addEventListener('click',stopWatch)
    let stopbtn2 = document.querySelector('.stop2')
    .addEventListener('click',stopwatchStop)
    
    
  } 
} 
////formating time display//// 
function formatTime(elapsed){
  let hrs = Math.floor(elapsed / 3600000) || 0;
  let mins = Math.floor((elapsed % 3600000) / 60000) || 0; 
  let secs = Math.floor((elapsed % 60000)/1000) || 0; 
  let ms = elapsed % 1000 || 0;   
 hrs = String(hrs).padStart(2,"0");
 mins = String(mins).padStart(2,"0");
 secs = String(secs).padStart(2,"0");
 ms = String(ms).padStart(3,"0");
  timeDispay.innerHTML = `${hrs}:${mins}:${secs}:${ms}`
  return {hrs,mins,secs,ms}
}
///Timer functions///
function runningTimer(){
  let elapsed = 0;
  let inputHr = document.querySelector('.js-hr').value;
  let inputMin = document.querySelector('.js-min').value;
  let inputSec = document.querySelector('.js-sec').value;
  elapsed = (inputHr * 3600000) + (inputMin * 60000) + (inputSec * 1000) ;
  console.log(elapsed);  
  
  intervalId = setInterval(()=>{
  elapsed -= 10
  formatTime(elapsed)
  

if(elapsed <= 0){
  clearInterval(intervalId)
  timeDispay.innerHTML = `Time's up`
}
  },10)
} 
function pauseTimer(){
  clearInterval(intervalId)
  
} 
function reset(){
  elapsed = 0;
  clearInterval(intervalId)
  timeDispay.innerHTML = `0:0:0:0`
}

////stopwatch//// 
function stopWatch(){
  let elapsed = 0 
  let labtn = document.querySelector('.lap')

   function flag(){
let {hrs,mins,secs,ms} = formatTime(elapsed) 
flagDiv.innerHTML += `<h3>${hrs}:${mins}:${secs}:${ms}</h3>`
}
labtn.addEventListener('click',flag)

  clearInterval(intervalId2)
  intervalId2 = setInterval(()=>{
    elapsed += 10;
    formatTime(elapsed)

 
     

    // timeDispay.innerHTML = `${hrs}:${mins}:${sec}:${ms}`
  },10)
} 
function stopwatchStop(){
  clearInterval(intervalId2) 

} 


render()