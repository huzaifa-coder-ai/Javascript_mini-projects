//Events (click, input) Color Flipper
let button = document.getElementById("btn")

function changecolor() {
    let val1 = Math.floor(Math.random() * 255)
    let val2 = Math.floor(Math.random() * 255)
    let val3 = Math.floor(Math.random() * 255)

    return `rgb(${val1}, ${val2}, ${val3})`;

}

button.addEventListener("click",() => { 
    document.body.style.backgroundColor = changecolor()
 })