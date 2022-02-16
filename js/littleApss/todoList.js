//Todo list
//Crear boton eliminar al final de los li
const btnAdd = document.querySelector("#boton-ingreso");
const myList = document.querySelector(".miLista");
let txtBox = document.querySelector("#txt-in");

//guardar texto al presionar boton
btnAdd.addEventListener("click", () => {
  addTodoList();
});
txtBox.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    addTodoList();
  }
});
function addTodoList() {
  let txt = txtBox.value;
  if (txt != "") {
    addList(txt);
    document.querySelector("#txt-in").value = "";
  }
}

//Check li presed
myList.addEventListener("click", (e) => {
  //check the list
  if (e.target.classList.contains("li-todo")) {
    e.target.classList.toggle("complete-list");
  }
  //check trash
  if (e.target.classList.contains("fa-trash-alt")) {
    e.target.parentNode.remove();
  }
});

//Construct list
function addList(txt) {
  let createLi = document.createElement("LI"); //create li element
  let content = document.createTextNode(txt); //create li content
  createLi.appendChild(content); //add content to li
  createLi.className = "li-todo";

  let createDeleteIcon = document.createElement("i"); //create icon element
  createDeleteIcon.className = "fas fa-trash-alt";

  myList.appendChild(createLi);
  createLi.appendChild(createDeleteIcon);
}