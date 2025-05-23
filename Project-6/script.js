

// setInterval(() => {
//     const now = new Date()
// console.log(now.toLocaleTimeString())
// }, 1000);

let clockTime = document.getElementById("clock")

function updateTime() {
    let now = new Date();
    clockTime.innerHTML = now.toLocaleTimeString()
}
// setInterval(() => {
//     let now = new Date();
//     clockTime.innerHTML = now.toLocaleTimeString()
// }, 1000);
setInterval(updateTime,1000)
updateTime()