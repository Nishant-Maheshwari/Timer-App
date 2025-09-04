// let timeInput = document.querySelector('.js-sec')
// let startButton = document.querySelector('.start')
// let h1 = document.createElement("h1")
// document.body.append(h1)

// startButton.addEventListener('click',() => {
//   let timeleft = Number(timeInput.value)
//   let intervalId = setInterval(()=>{
//     timeleft--;
//     h1.textContent = `The timer will end after ${timeleft} seconds`

//     if(timeleft <= 0){
//       clearInterval(intervalId)
//       h1.textContent = `The countdown is over`
//     }
    
//   },1000)
  

// timeInput.value = ""
// }
// )
let mainDiv = document.querySelector('.js-mode')
let timeInputHr = document.querySelector('.js-hr')
let timeInputMin = document.querySelector('.js-min')
let timeInputSec = document.querySelector('.js-sec')
let startButton = document.querySelector('.start')
let pauseButton = document.querySelector('.pause')
let h1 = document.createElement("h1")
document.body.append(h1) 
let intervalId;
let isRunning = false
let timeLeft;

startButton.addEventListener('click',()=>{
  let hours = Number(timeInputHr.value)
let minutes = Number(timeInputMin.value)
let seconds = Number(timeInputSec.value) 

  timeLeft = (hours*3600) + (minutes*60) + seconds;
runningTimer()
  
}) 
pauseButton.addEventListener('click',()=>{
  if(isRunning === true ){
    pauseButton.textContent = "Resume"
    clearInterval(intervalId)
    isRunning = false;
  }else{
    pauseButton.textContent = "Pause"
    runningTimer()
  }
}) 

function runningTimer(){  
isRunning = true;

  intervalId = setInterval(()=>{
  timeLeft--;
  let hrs = Math.floor(timeLeft/3600)
  let mins = Math.floor((timeLeft % 3600) / 60)
  let secs = Math.floor(timeLeft%60) 
  console.log(hrs);
  console.log(mins);
  console.log(secs);
  

  h1.textContent = `The timer will end after ${hrs}:${mins}:${secs} seconds`;
  
  if(timeLeft <= 0){
    clearInterval(intervalId)
    h1.textContent = `the countdown is over`
  }
  },1000)} 

  /////stopwatch///// 
// let h1Again = createElement('h1')
// document.body.append(h1Again)
let modeBtton = document.createElement('button')
modeBtton.textContent = `Mode change`
mainDiv.append(modeBtton)
let intervalId2 
let stopWatchTime = 0
modeBtton.addEventListener('click',()=>{
 
mainDiv.innerHTML = `
<button class = "js-satrt">start</button>
<button class = "js-stop">Stop</button>`
let startStopWatch = document.querySelector('.js-satrt')
let stopStopWatch = document.querySelector('.js-stop') 
startStopWatch.addEventListener('click',()=>{
  intervalId2 = setInterval(()=>{
    let hrs = Math.floor(stopWatchTime / 3600);
    let mins = Math.floor((stopWatchTime % 3600) / 60);
    let secs = stopWatchTime % 60;
    // let milisec = stopWatchTime * 1000
 stopWatchTime++ 
 h1.textContent = `${hrs}:${mins}:${secs}`
 
  },1000)
}) 
stopStopWatch.addEventListener('click',()=>{
  clearInterval(intervalId2)
})
})  



