const toDoForm = document.querySelector(".to-do-form");
const toDoInput = toDoForm.querySelector("input");
const toDoLists = document.querySelector("#lists");

const TODOS_KEY = "todos";
let toDoArray = []; /*새로 고쳤을때 기존 데이터 로드하기 위해 let*/

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArray));
}

function deleteToDo(click) {
  const li = click.target.parentElement;
  li.remove();
  toDoArray = toDoArray.filter((item) => item.id !== parseInt(li.id));
  saveToDo();
}

function addToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
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
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDoArray.push(newToDoObj);
  addToDo(newToDoObj);
  saveToDo();
}

toDoForm.addEventListener("submit", paintToDo);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDoArray = parsedToDos;
  parsedToDos.forEach(addToDo);
}
