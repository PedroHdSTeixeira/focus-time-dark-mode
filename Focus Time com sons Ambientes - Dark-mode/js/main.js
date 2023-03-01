const body = document.querySelector("body")
const buttonSun = document.querySelector('.sun-img')
const buttonMoon = document.querySelector('.moon-img')

const timeDisplay = document.querySelector('.time-display')
const timeControls = document.querySelector('.time-controls')
const soundControls = document.querySelector('.sound-controls')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const buttonForest = document.querySelector('.forest')  
const buttonRain = document.querySelector('.rain')  
const buttonCoffee = document.querySelector('.coffee')  
const buttonFire = document.querySelector('.fire')  

const forestSound = document.querySelector('.forest-sound')
const rainSound = document.querySelector('.rain-sound')
const coffeeSound = document.querySelector('.coffee-sound')
const fireSound = document.querySelector('.fire-sound')

const forestVolume = document.querySelector('.forest-volume')
const rainVolume = document.querySelector('.rain-volume')
const coffeeVolume = document.querySelector('.coffee-volume')
const fireVolume = document.querySelector('.fire-volume')
const kitchenTime = document.querySelector('.kitchen-timer')

const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")


buttonPlay.addEventListener("click", function(){
    countdown()
})

buttonStop.addEventListener("click", function(){
    resetDisplay()
})

buttonPlus.addEventListener("click", function(){
    timeIncrement()
})

buttonMinus.addEventListener("click", function(){
    timeDecrement()
})

let initialMinutes = minutesDisplay.textContent
let timerTimeOut

function countdown(){
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    timerTimeOut = setTimeout(function(){

        if (seconds <= 0) {
            secondsDisplay.textContent = "05"
            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }else{
            secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
        }
        if (minutes == 0 && seconds <= 0){
            resetDisplay()
            timeEnd()
            return
        }
        countdown()
    }, 1000)
}

function resetDisplay(){
    minutesDisplay.textContent = initialMinutes
    secondsDisplay.textContent = "00"
    clearTimeout(timerTimeOut)
}

function timeIncrement (){
    minutesDisplay.textContent = String(Number(initialMinutes) + 5).padStart(2, "0")

    initialMinutes = minutesDisplay.textContent
}

function timeDecrement (){

    if (initialMinutes != 0) {

    minutesDisplay.textContent = String(Number(initialMinutes) - 5).padStart(2, "0")
    
        initialMinutes = minutesDisplay.textContent
    }
}

forestSound.loop = true
rainSound.loop = true
coffeeSound.loop = true
fireSound.loop = true

//Forest
buttonForest.addEventListener("click", function(){
    forestButtonFocus()
    forestSoundStart()
})

forestVolume.addEventListener("input", function(){
    forestSound.volume = this.value
})

function forestButtonFocus (){
    buttonForest.classList.add("focus-on")
    buttonRain.classList.remove("focus-on")
    buttonCoffee.classList.remove("focus-on")
    buttonFire.classList.remove("focus-on")
}

function forestSoundStart(){
    forestSound.play()
    rainSound.pause()
    coffeeSound.pause()
    fireSound.pause()
}
//Rain
buttonRain.addEventListener("click", function(){
    rainButtonFocus()
    rainSoundStart()
})

rainVolume.addEventListener("input", function(){
    rainSound.volume = this.value
})

function rainButtonFocus (){
    buttonForest.classList.remove("focus-on")
    buttonRain.classList.add("focus-on")
    buttonCoffee.classList.remove("focus-on")
    buttonFire.classList.remove("focus-on")
}

function rainSoundStart(){
    forestSound.pause()
    rainSound.play()
    coffeeSound.pause()
    fireSound.pause()
}

// coffee
buttonCoffee.addEventListener("click", function(){
    coffeeButtonFocus()
    coffeeSoundStart()
})

coffeeVolume.addEventListener("input", function(){
    coffeeSound.volume = this.value
})

function coffeeButtonFocus (){
    buttonForest.classList.remove("focus-on")
    buttonRain.classList.remove("focus-on")
    buttonCoffee.classList.add("focus-on")
    buttonFire.classList.remove("focus-on")
}

function coffeeSoundStart(){
    forestSound.pause()
    rainSound.pause()
    coffeeSound.play()
    fireSound.pause()
}
//Fire
buttonFire.addEventListener("click", function(){
    fireButtonFocus()
    fireSoundStart()
})

fireVolume.addEventListener("input", function(){
    fireSound.volume = this.value
})

function fireButtonFocus (){
    buttonForest.classList.remove("focus-on")
    buttonRain.classList.remove("focus-on")
    buttonCoffee.classList.remove("focus-on")
    buttonFire.classList.add("focus-on")
}

function fireSoundStart(){
    forestSound.pause()
    rainSound.pause()
    coffeeSound.pause()
    fireSound.play()
}

function timeEnd() {
    kitchenTimer.play()
  }




  //Dark Mode
  buttonSun.addEventListener("click", function(){
    turnOn()
  }) 

  buttonMoon.addEventListener("click", function(){
    turnOff()
  })

  function turnOn (){
    body.style.background = "var(--bg-color-dark-mode)"
    buttonSun.classList.add("hide")
    buttonMoon.classList.remove("hide")

    timeDisplay.classList.add("dark-mode")
    timeControls.classList.add("dark-mode")

    soundControls.classList.add("dark-mode")


  }

  function turnOff (){
    body.style.background = "var(--bg-color)"
    buttonSun.classList.remove("hide")
    buttonMoon.classList.add("hide")

    timeDisplay.classList.remove("dark-mode")
    timeControls.classList.remove("dark-mode")

    soundControls.classList.remove("dark-mode")

  }
