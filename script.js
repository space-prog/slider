const slides = [...document.querySelectorAll(".item")]
const flex = document.getElementById("flex")
const btnLeft = document.getElementById("left")
const btnRight = document.getElementById("right")
const slideW = 22.5
const len = slides.length

;[...slides].reverse().forEach(slide => {
    flex.insertBefore(slide.cloneNode(true), flex.firstChild)
})

slides.forEach(slide => {
    flex.appendChild(slide.cloneNode(true))
})

let current = len
let isAnimating = false

flex.style.transition = "none"
flex.style.transform = `translateX(-${current * slideW}vw)`

function goTo(index, animate) {
    flex.style.transition = animate ? "transform .5s ease" : "none"
    flex.style.transform = `translateX(-${index * slideW}vw)`
    current = index
}

btnRight.addEventListener("click", (e) => {
    e.preventDefault()
    if (isAnimating) return
    isAnimating = true
    goTo(current + 1, true)
})

btnLeft.addEventListener("click", (e) => {
    e.preventDefault()
    if (isAnimating) return
    isAnimating = true
    goTo(current - 1, true)
})

flex.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return

    if (current >= len * 2) {
        goTo(current - len, false)
    }
    if (current < len) {
        goTo(current + len, false)
    }

    isAnimating = false
})