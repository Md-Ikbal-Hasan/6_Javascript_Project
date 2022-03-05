let addStudent = document.querySelector("#addStudent");
addStudent.addEventListener("click", onFormSubmit);


var selectedRow = null;



// ..............main operation center...............
function onFormSubmit(e) {
    e.preventDefault();

    if (validData()) {
        var formData = readFormData();
        // console.log(formData);
        if (selectedRow == null) {
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }

        resetForm();
    }
}
// ..................................................

function validData() {
    let isValid = true;
    if (
        document.querySelector("#name").value == "" ||
        document.querySelector("#email").value == "" ||
        document.querySelector("#id").value == "" ||
        document.querySelector("#cgpa").value == "") {
        isValid = false;
    } else {
        isValid = true;
    }
    return isValid;
}

// read the data form user by form.....
function readFormData() {
    var formData = {};
    formData["name"] = document.querySelector("#name").value;
    formData["email"] = document.querySelector("#email").value;
    formData["id"] = document.querySelector("#id").value;
    formData["cgpa"] = document.querySelector("#cgpa").value;

    return formData;
}




function insertNewRecord(formData) {
    var table = document.querySelector("tbody"); // [0]
    var newRow = table.insertRow(table.length);
    //console.log(`table length : ${table.length}`);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = formData.name;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = formData.email;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = formData.id;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = formData.cgpa;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)"  class="btn btn-success"> Edit </a> 
                       <a onClick="onDelete(this)" class="btn btn-danger">Delete</a>`;

}


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    console.log(selectedRow);

    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("id").value = selectedRow.cells[2].innerHTML;
    document.getElementById("cgpa").value = selectedRow.cells[3].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.id;
    selectedRow.cells[3].innerHTML = formData.cgpa;

}


// delete row of a studentList Table........
function onDelete(td) {
    if (confirm("Are you sure to delete?")) {
        row = td.parentElement.parentElement;
        // console.log(row);
        document.querySelector("#studentList").deleteRow(row.rowIndex);
        // console.log("Index of row is : " + row.rowIndex);

    }
}


// reset form means all the value of form will be empty....
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("id").value = "";
    document.getElementById("cgpa").value = "";
    selectedRow = null;
}