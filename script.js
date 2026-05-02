const item = [...document.querySelectorAll(".item")]
let flex = document.getElementById("flex")
let left = document.getElementById("left")
let right = document.getElementById("right")
const size = [];

console.log(item)

let cloneLast = item[3].cloneNode(true)
let cloneFirst = item[0].cloneNode(true)

console.log(size)

right.addEventListener("click", function(e) {
    e.preventDefault
    flex.style.transform = "translate(-70vw)"
})
left.addEventListener("click", function(e) {
    e.preventDefault
    flex.style.transform = "translateX(-22vw)"
})

let cloneDva = item[2].cloneNode(true)
let cloneThree = item[1].cloneNode(true)

flex.insertAdjacentElement("beforeend", cloneFirst)
flex.insertAdjacentElement("afterbegin", cloneLast)
flex.insertAdjacentElement("afterbegin", cloneDva)
flex.insertAdjacentElement("beforeend", cloneThree)

console.log(cloneLast, cloneFirst)