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
let isTimerMode = true
let mainDiv = document.querySelector('.js-mode')
let timeInputHr = document.querySelector('.js-hr')
let timeInputMin = document.querySelector('.js-min')
let timeInputSec = document.querySelector('.js-sec')
let startButton = document.querySelector('.start')
let pauseButton = document.querySelector('.pause')
let h1 = document.createElement("h1")
let modeChangeBtn = document.createElement('button')
document.body.append(h1) 
modeChangeBtn.textContent = "Mode Change"
document.body.append(modeChangeBtn) 
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

  function render(){
if(!isTimerMode){
  mainDiv.innerHTML = `
  <button>Start</button>
  <button>stop</button>`
} else {
  mainDiv.innerHTML = `
   <input type="number" class="js-hr" placeholder="Input in hours">
  <input type="number" class="js-min" placeholder="Input in minutes">
  <input type="number" class="js-sec" placeholder="Input in seconds">
  <button class="start">Start Timer</button>
  <button class="pause">pause</button>
  <script src="timer.js"></script>
  `
}
  }


modeChangeBtn.addEventListener('click',()=>{
  if(!isTimerMode){
    isTimerMode = true;
  }else{
    isTimerMode = false
  }
  render()
})

//   /////stopwatch///// 
// // let h1Again = createElement('h1')
// // document.body.append(h1Again)
// let modeBtton = document.createElement('button')
// modeBtton.textContent = `Mode change`
// mainDiv.append(modeBtton)
// let intervalId2 
// let stopWatchTime = 0
// modeBtton.addEventListener('click',()=>{
 
// mainDiv.innerHTML = `
// <button class = "js-satrt">start</button>
// <button class = "js-stop">Stop</button>`
// let startStopWatch = document.querySelector('.js-satrt')
// let stopStopWatch = document.querySelector('.js-stop') 
// startStopWatch.addEventListener('click',()=>{
//   intervalId2 = setInterval(()=>{
//     let hrs = Math.floor(stopWatchTime / 3600000);
//     let mins = Math.floor((stopWatchTime % 3600000) / 60000);
//     let secs = Math.floor((stopWatchTime % 60000)/1000)
//     let milisec = Math.floor((stopWatchTime % 1000)/10)
//  stopWatchTime += 10
//  h1.textContent = `${hrs}:${mins}:${secs}:${milisec}`
 
//   },10)
// }) 
// stopStopWatch.addEventListener('click',()=>{
//   clearInterval(intervalId2)
// })
// })  



