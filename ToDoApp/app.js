let inputarea = document.getElementById("text-space");
let addtask = document.getElementById("add");
let warning = document.getElementById("warning");
let myTasks = document.getElementById("mytasks");


addtask.addEventListener("click", addTask);

inputarea.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (inputarea.value == "") {
        warning.innerText = "Please Write Something";
        setTimeout(() => {
            warning.innerText = "";
        }, 3000);
    } else {
        let li = document.createElement("li");
        li.innerHTML = `
            <span>${inputarea.value}</span>
            <i class="fa-solid fa-trash delete-btn"></i>
        `;
        myTasks.appendChild(li);
        inputarea.value = "";
        
 
        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.remove();
        });
    }
}