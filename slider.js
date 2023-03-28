const sliderContent = document.querySelectorAll('.slider-content')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
let index = 3


const mount = () => sliderContent[index].classList.add('active')
const unmount = () => sliderContent[index].classList.remove('active')

next.addEventListener('click', ()=> {
    unmount()
    if (index >= sliderContent.length - 1){
        index = 0
    } else {
        index++
    }
    mount()
})

prev.addEventListener('click', ()=> {
    unmount()
    if (index <= 0){
        index = sliderContent.length - 1
    } else {
        index--
    }
    mount()
})

mount()
