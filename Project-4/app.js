let taskScreen = document.getElementById("task")
let button = document.getElementById("btn1")
let createdtask = document.getElementById("list")

let errormsg = document.getElementById("error-message")

button.addEventListener("click",()=> { 
    if (taskScreen.value == "") {
        console.log("Write Something")
        errormsg.textContent = "Task Cannot be empty"
        setTimeout(() => {
            errormsg.textContent = ""
        }, 3000);
    } 
    else {
        let li = document.createElement("li")
        li.innerHTML =`<span>${taskScreen.value}<span/><i class="fa-solid fa-trash delete-btn"></i>`
        createdtask.appendChild(li)
    taskScreen.value= ""

        li.querySelector(".delete-btn").addEventListener("click",() => { 
            li.remove()
         })
    }
 })

