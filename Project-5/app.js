//Charaacter counter javascript project

let name = "Muhammad Huzaifa Bilal"
console.log(name.length);             

let display = document.getElementById("counter")
let btn = document.getElementById("btn")
let result = document.getElementById("result")
let warning = document.getElementById("warning")

// display.addEventListener("input",() => { 
//     if (display.value == "") {
//         console.log("Write Something")
//     }
//     else{
//         result.innerText = display.length;
//     }
//  })

btn.addEventListener("click",() => { 
    if (display.value == "") {
        warning.textContent = "Input Cannot be Empty"
        setTimeout(() => {
            warning.textContent = ""
        }, 3000);
    }
    else{
        result.innerText = display.value.length
        console.log(display.length);
        
    }
 }) 