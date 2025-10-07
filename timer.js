let mainDiv =document.querySelector('.js-mode');
let modeBtton = document.createElement('button');
let timeDisplay = document.createElement('h1');
let stopwatchDisplay = document.createElement('h1');
let flagDisplay = document.createElement('h2')
let isTimerRunning = true;
modeBtton.textContent = "Mode Change";
document.body.append(modeBtton,timeDisplay,stopwatchDisplay,flagDisplay) 

modeBtton.addEventListener('click',()=>{
isTimerRunning = !isTimerRunning;
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
  <button class="reset">Reset</button>
    `
    runningTimer()
  }else{
     mainDiv.innerHTML = `
   <button class= "start2">Start</button>
   <button class = "stop2">stop</button>
   <button class = "reset">Reset</button>
   <button class = "lap">laps</button> `
    runningStopWatch()
  }
} 
///formate time display///
function formateTime(elapsed){
  let hrs = Math.floor(elapsed/3600000);
  let mins = Math.floor(elapsed%3600000/60000);
  let secs = Math.floor(elapsed%60000/1000)
  let ms = elapsed%1000;
  hrs =  String(hrs).padStart(2,"0");
  mins = String(mins).padStart(2,"0");
  secs = String(secs).padStart(2,"0");
  ms  =  String(ms).padStart(3,"0"); 
  
  return  `${hrs}:${mins}:${secs}:${ms}`
}
////Timer////
function runningTimer(){
  let elapsed = 0;
  let intervalId;


  ///start function///
  function start(){
    ////selectors////
  let HrsInput = document.querySelector('.js-hr').value;
  let MinsInput = document.querySelector('.js-min').value;
  let SecInput = document.querySelector('.js-sec').value;
  elapsed = (HrsInput * 3600000) + (MinsInput * 60000) + (SecInput * 1000) 
  console.log(elapsed); 

    intervalId = setInterval(()=>{
      elapsed -= 10;
      timeDisplay.innerHTML = `Time remaining : ${formateTime(elapsed)}`

       if(elapsed <= 0){
      clearInterval(intervalId)
      timeDisplay.innerHTML = "Time's up"
    }
    },10) 

   
  }
 document.querySelector('.start')
 .addEventListener('click',start) 

 ////pause function///
 function pause(){
  clearInterval(intervalId);
 }
  document.querySelector('.pause')
  .addEventListener('click',pause) 

  ////reset function/// 
  function reset(){
    elapsed = 0;
    clearInterval(intervalId);
    timeDisplay.innerHTML = formateTime(elapsed)
    
  } 
  document.querySelector('.reset')
  .addEventListener('click',reset)

} 


////stopwatch//// 

function runningStopWatch(){
  let elapsed = 0;
  let intervalId;
  let laps = [];
////start function////
  function start(){
    intervalId = setInterval(()=>{
      elapsed += 10;
      stopwatchDisplay.innerHTML = `Stopwatch Time : ${formateTime(elapsed)}`
    },10)
  } 
  document.querySelector('.start2')
  .addEventListener('click',start)
 
 ////stop function////

  function stop(){
    clearInterval(intervalId);
  } 
  document.querySelector('.stop2')
  .addEventListener('click',stop)

////reset function////

function reset(){
  clearInterval(intervalId)
  elapsed = 0;
  stopwatchDisplay.innerHTML = `Stopwatch Time : ${formateTime(elapsed)}`
} 
document.querySelector('.reset').
addEventListener('click',reset)


////flag fucntion///
 function flag(){
  laps.push(formateTime(elapsed))
  // let displaystr = "";
  // laps.map((lap,i)=>{
  //   displaystr += `laps ${i+1}: ${lap} <br>`
  // })
  flagDisplay.innerHTML = laps.map((lap,i)=>{
    return `laps ${i+1}: ${lap}`
  }).join("<br>")
 } 
 document.querySelector('.lap')
 .addEventListener('click',flag)

}


render()