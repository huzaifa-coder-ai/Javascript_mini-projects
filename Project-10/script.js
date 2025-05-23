//Metric System: BMI = weight (kg) / height (m²) 
let age = document.getElementById("age")
let height = document.getElementById("height")
let weight = document.getElementById("weight")
let btn = document.getElementById("btn")
let reset = document.getElementById("reset")
let result = document.getElementById("result")

function checkBMI() {

    let h = height.value/100
    let w = weight.value;
    let bmi = w / (h*h)
    return bmi.toFixed(1)
}

btn.addEventListener("click",() => { 
    if (age.value == "" || height.value == "" || weight.value == "") {
        alert("fill all the required input first ")
    }
    else{
    result.textContent = checkBMI()
}
 })
reset.addEventListener("click",() => { 
    age.value = "";
    weight.value = "";
    height.value = "";
    result.textContent = "";
 })