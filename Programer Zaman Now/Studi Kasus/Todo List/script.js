const todoList = [
  "Belajar JavaScript Dasar",
  "Belajar JavaScript Object Oriented Programing",
  "Belajar JavaScript Document Object Model",
];

function clearTodoList() {
  const todoListBody = document.getElementById("todoListBody");
  while (todoListBody.firstChild) {
    todoListBody.removeChild(todoListBody.firstChild);
  }
}

function removeTodoList(index) {
  todoList.splice(index, 1);
  displayTodoList();
}

function addTodoList(todo, index) {
  const tr = document.createElement("tr");
  const tdButton = document.createElement("td");
  tr.appendChild(tdButton);

  const buttonDone = document.createElement("input");
  buttonDone.type = "button";
  buttonDone.value = "Done";
  buttonDone.onclick = () => removeTodoList(index);
  tdButton.appendChild(buttonDone);

  const tdContent = document.createElement("td");
  tdContent.textContent = todo;
  tr.appendChild(tdContent);

  document.getElementById("todoListBody").appendChild(tr);
}

function displayTodoList() {
  clearTodoList();
  todoList.forEach((todo, index) => {
    const searchText = document.getElementById("search").value.toLowerCase();

    if (todo.toLowerCase().includes(searchText)) {
      addTodoList(todo, index);
    }
  });
}

document.forms["todoForm"].onsubmit = (e) => {
  e.preventDefault();

  const todo = document.forms["todoForm"]["todo"].value;

  if (todo == "") return;

  todoList.push(todo);
  document.forms["todoForm"].reset();

  displayTodoList();
};

const searchInput = document.getElementById("search");

searchInput.onkeyup = function () {
  displayTodoList();
};
searchInput.onkeydown = function () {
  displayTodoList();
};

displayTodoList();
