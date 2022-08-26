const toDoForm = document.querySelector(".to-do-form");
const toDoInput = toDoForm.querySelector("input");
const toDoLists = document.querySelector("#lists");

const toDoArray = [];

function saveToDo() {
  localStorage.setItem("todos", JSON.stringify(toDoArray));
}

function deleteToDo(click) {
  click.target.parentElement.remove();
}

function addToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  li.appendChild(span);
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", deleteToDo);
  li.appendChild(btn);
  toDoLists.appendChild(li);
}

function paintToDo(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDoArray.push(newToDo);
  addToDo(newToDo);
  saveToDo();
}

toDoForm.addEventListener("submit", paintToDo);
