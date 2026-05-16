const track = document.getElementById('flex')
const btnL = document.getElementById('left')
const btnR = document.getElementById('right')

const SLIDE_W = 22.5
const GAP = 0.3
const STEP = SLIDE_W + GAP

let isAnimating = false
let direction = null

function getSlides() {
  return [...track.querySelectorAll('.item')]
}

const items = getSlides()

let cloneFirst = items[0].cloneNode(true)
let cloneLast = items[items.length - 1].cloneNode(true)

track.appendChild(cloneFirst, items[items.length - 1])
track.insertBefore(cloneLast, items[0])

function setPos(vw, animate) {
  track.style.transition = animate
    ? 'transform 0.45s ease'
    : 'none'
  track.style.transform = `translateX(${vw}vw)`
}

setPos(-22.5, false)

btnR.addEventListener('click', (e) => {
  e.preventDefault()
  if (isAnimating) return
  isAnimating = true
  direction = 'right'
  setPos(-STEP * 2, true)
})

btnL.addEventListener('click', (e) => {
  e.preventDefault()
  if (isAnimating) return
  isAnimating = true
  direction = 'left'
  setPos(STEP, true)
})

track.addEventListener('transitionend', (e) => {
  if (e.propertyName !== 'transform') return

  const slides = getSlides()

  if (direction === 'right') {
    track.appendChild(slides[0])
  } else {
    track.insertBefore(slides[slides.length - 1], slides[0])
  }

  setPos(-22.5, false)
  direction = null
  isAnimating = false
})