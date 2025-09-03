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