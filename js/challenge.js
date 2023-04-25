document.addEventListener("DOMContentLoaded", () => {
 
let interval = setInterval(incrementCounter, 1000)
 const plus = document.getElementById("plus")
 plus.addEventListener("click", incrementCounter)
 const minus = document.getElementById("minus")
 minus.addEventListener("click", () => {
    let count = document.getElementById("counter")
    count.textContent = parseInt(count.textContent, 10) -1
 })

 const likes = document.getElementById("heart")
 let likesObj = {}
 likes.addEventListener("click", () => {
    let counterValue = document.getElementById("counter").textContent
    let li = document.createElement("li")
    if(likesObj[counterValue]) {
        likesObj[counterValue] += 1
        li.innerText = `${counterValue} has been liked ${likesObj[counterValue]} times`
    } else {
        likesObj[counterValue] = 1
        li.innerText = `${counterValue} has been liked ${likesObj[counterValue]} times`
    }
    let likesUl = document.querySelector(".likes")
    likesUl.appendChild(li)
 })
 const submit = document.getElementById("submit")
const pause = document.querySelector("#pause")
pause.addEventListener("click", () => {
    if (pause.innerText === "resume") {
        pause.innerText = "pause"
        interval = setInterval(incrementCounter, 1000)
    } else {
        pause.innerText = "resume"
        clearInterval(interval)
    }

    minus.disabled = !minus.disabled
    plus.disabled = !plus.disabled
    likes.disabled = !likes.disabled  
    submit.disabled = !submit.disabled 
})

let commentForm = document.querySelector("#comment-form")
commentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const list = document.getElementById("list")
    let li = document.createElement("li")
    li.innterText = e.target[0].value
    list.appendChild(li)
    commentForm.reset()
})

})

function counter () {
    incrementCounter()
}

function incrementCounter () {
    let count = document.getElementById("counter")
    count.textContent = parseInt(count.textContent, 10) +1
}