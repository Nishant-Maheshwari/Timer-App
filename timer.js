let timeInput = document.querySelector('.js-timer')
let startButton = document.querySelector('.start')
let h1 = document.createElement("h1")
document.body.append(h1)
startButton.addEventListener('click',() => {
  let timeleft = Number(timeInput.value)
  let intervalId = setInterval(()=>{
    timeleft--;
    h1.textContent = `The timer will end after ${timeleft} seconds`

    if(timeleft <= 0){
      clearInterval(intervalId)
      h1.textContent = `The countdown is over`
    }
    
  },1000)
  
}) 