const addToDoButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoContainer");
const inputField = document.getElementById("inputField");


addToDoButton.addEventListener('click' , ()=>{
    let todotext = inputField.value;
   
    if(todotext != ""){
        
    var paragraph = document.createElement("p");
    paragraph.innerText = todotext;
    paragraph.classList.add("paragraph-styling");
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
   
    paragraph.addEventListener('click' ,()=>{
        paragraph.style.textDecoration = "line-through";
    });


    paragraph.addEventListener('dblclick' ,()=>{
        toDoContainer.removeChild(paragraph);
    });
    }
    


})