var nextBtn = document.querySelector('.next')
var prevBtn = document.querySelector('.prev')
var carousel = document.querySelector('.carousel')
var list = document.querySelector('.list')
var item = document.querySelector('.item')
var runningTime = document.querySelector('.timeRunning')

let timeRunning = 3000
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut
let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)

function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemDom = list.querySelectorAll('.carousel .list .item')
    if (type === 'next') {
        list.appendChild(sliderItemDom[0])
        carousel.classList.add('next')
    } else {
        list.prepend(sliderItemDom[sliderItemDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeAutoNext)

    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() //reset the running time animation
}

//start the initial animation
resetTimeAnimation()
