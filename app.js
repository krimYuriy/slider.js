const ubBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const sideBar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')

const slidesCount = mainSlide.querySelectorAll('div').length

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlide = 0

ubBtn.addEventListener('click', () => {
   changeSlide('up')
})
downBtn.addEventListener('click', () => {
   changeSlide('down')
})

document.addEventListener('keydown', event => {
   if (event.key === 'ArrowUp') {
      changeSlide('up')
   } else if (event.key === 'ArrowDown') {
      changeSlide('down')
   }
})

function changeSlide(direction) {
   if (direction === 'up') {
      activeSlide++
      if (activeSlide === slidesCount) {
         activeSlide = 0
      }
   } else if (direction === 'down') {
      activeSlide--
      if (activeSlide < 0) {
         activeSlide = slidesCount - 1
      }
   }

   const height = container.clientHeight

   mainSlide.style.transform = `translateY(-${height * activeSlide}px)`
   sideBar.style.transform = `translateY(${height * activeSlide}px)`
}

