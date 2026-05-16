const track = document.getElementById('flex')
const btnL = document.getElementById('left')
const btnR = document.getElementById('right')

const SLIDE_W = 22.5
const items = [...track.querySelectorAll('.item')]
const itemsLength = items.length

let isAnimating = false
let idx = 0


function updateSlider() {
  while(track.firstChild) {
    track.removeChild(track.firstChild)
  }
  const firstClone = items[itemsLength - 1].cloneNode(true)
  const lastClone = items[0].cloneNode(true)
  firstClone.style.left = `${-SLIDE_W}vw`
  lastClone.style.left = `${SLIDE_W * itemsLength}vw`
  track.insertAdjacentElement('afterbegin', firstClone)
  track.appendChild(lastClone)

  for(let i = 0; i<itemsLength; i++) {
    let item = items[i].cloneNode(true)
    item.style.left = `${SLIDE_W * i}vw`
    track.appendChild(item)
  }
}

function gotoIndex(index) {
  isAnimating = true
  let distance = -index * SLIDE_W
  idx = (idx + itemsLength + index) / itemsLength
  track.style.transition = "all .5s ease"
  track.style.transform = `translateX(${distance}vw)`
  setTimeout(() => {
    track.style.transform = "none"
    track.style.transition = "none"
    isAnimating = false
    updateSlider()
  }, 500)
}

btnL.addEventListener("click", function(e) {
  e.preventDefault()
  items.unshift(items.pop())
  gotoIndex(-1)
})

btnR.addEventListener("click", function(e) {
  e.preventDefault()
  items.push(items.shift())
  gotoIndex(1)
})

updateSlider()