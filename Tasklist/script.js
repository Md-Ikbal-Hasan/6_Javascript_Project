const form = document.getElementById("task_form");
const task_desc = document.getElementById("task_desc");
const add_task = document.getElementById("add_task_btn");
const output = document.querySelector("#output");


add_task.addEventListener('click', taskAdd);

function taskAdd() {
    let task_data = task_desc.value;
    if (task_data == "") {
        document.getElementById("error").innerHTML =
            ` 
        <div class="alert alert-success alert-dismissable my-3">

       <strong> Please enter value </strong>

        <button type="button" class="close" data-dismiss="alert">
            <span>&times;</span>
        </button>
       </div>
    `

    } else {
        let tbody = document.querySelector("tbody");
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = task_data;
        tr.appendChild(td1);

        let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.className = "btn btn-success my-2 remove_todo";
        tr.appendChild(btn);


        let pos = tbody.firstElementChild; //last added task showed in first in ToDo list

        if (pos == null) {
            tbody.appendChild(tr);
        } else {
            tbody.insertBefore(tr, pos);
        }

        task_desc.value = "";

        let remove_todo = document.querySelector(".remove_todo");
        remove_todo.addEventListener("click", function(e) {
            let tbody = document.querySelector("tbody");
            // console.log(e);
            let tr = e.target.parentNode;
            tbody.removeChild(tr);
        })

    }
}